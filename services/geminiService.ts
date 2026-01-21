import { GoogleGenAI, Type } from "@google/genai";

export interface DeepContent {
  followup: string;
}

export interface ImpostorClue {
  hint: string;
}

const getAiClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getDeepContent(question: string): Promise<DeepContent> {
  const ai = getAiClient();
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    Eres el anfitrión de "Dianoia". 
    Tu objetivo es generar una única 'repregunta' basada en la pregunta original.
    REGLA CRÍTICA: No uses lenguaje espiritual, místico, poético o demasiado metafórico. 
    Busca un tono humano, directo, curioso y natural, como el de una charla entre amigos cercanos.
    La repregunta debe ser simple y ayudar a profundizar en la experiencia personal.
    Responde en español, máximo 15 palabras.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: `Pregunta original: "${question}"`,
      config: {
        systemInstruction,
        temperature: 0.7,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            followup: { type: Type.STRING, description: "Pregunta directa de profundización" }
          },
          required: ["followup"]
        }
      },
    });

    const data = JSON.parse(response.text || "{}");
    return {
      followup: data.followup || "¿Hay algo más sobre esto que te gustaría contar?"
    };
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return {
      followup: "¿Qué otra cosa te genera pensar en esto?"
    };
  }
}

export async function getImpostorClue(word: string, isImpostor: boolean): Promise<ImpostorClue> {
  const ai = getAiClient();
  const model = 'gemini-3-flash-preview';

  const roleInstruction = isImpostor 
    ? "El usuario es el IMPOSTOR. No sabe la palabra secreta. Dale solo la CATEGORÍA general a la que podría pertenecer la palabra oculta para ayudarlo a mentir (ej: 'Comida', 'Lugar', 'Objeto')."
    : `El usuario es un CIVIL y conoce la palabra secreta: '${word}'. Dale una pista sutil, un uso o una característica visual breve. No digas la palabra.`;

  const systemInstruction = `
    Eres el asistente del juego "El Impostor" (versión Argentina).
    Tu tarea es dar una pista muy breve (máximo 6 palabras).
    ${roleInstruction}
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: `Palabra clave (si aplica): ${word}`,
      config: {
        systemInstruction,
        temperature: 0.5,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            hint: { type: Type.STRING, description: "La pista o categoría" }
          },
          required: ["hint"]
        }
      },
    });

    const data = JSON.parse(response.text || "{}");
    return { hint: data.hint || (isImpostor ? "Algo general..." : "Es algo común.") };
  } catch (error) {
    return { hint: isImpostor ? "Intenta adivinar el contexto." : "Es algo muy argentino." };
  }
}