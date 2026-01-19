
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface DeepContent {
  followup: string;
}

export async function getDeepContent(question: string): Promise<DeepContent> {
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    Eres el anfitrión de "Desconectados Digital". 
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
