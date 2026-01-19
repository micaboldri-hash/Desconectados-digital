
import { Question } from './types';

// Fix: Renamed to QUESTIONS and exported to resolve "no exported member" error in App.tsx
export const QUESTIONS: Question[] = [
  { 
    id: 1, 
    text: "¿Sos obsesivo/a? ¿En qué sentido?", 
    followUps: [
      "¿Ese rasgo te ayuda en tu día a día o te genera estrés?",
      "¿Hay alguien que te lo haya señalado alguna vez?",
      "¿Intentaste cambiarlo o ya lo aceptaste como parte de vos?",
      "¿En qué áreas de tu vida se nota más esa obsesión?",
      "¿Recordás cuándo empezó a manifestarse ese rasgo?"
    ]
  },
  { 
    id: 2, 
    text: "¿Te mentís a vos mismo/a sobre algo? ¿Por qué?",
    followUps: [
      "¿Qué pasaría si hoy decidieras dejar de caer en esa mentira?",
      "¿Sentís que esa mentira te protege de algo?",
      "¿Es algo que sospechás que los demás ya notaron?",
      "¿Cómo te hace sentir admitirlo ahora?",
      "¿Esa mentira cambió con el paso de los años?"
    ]
  },
  { 
    id: 3, 
    text: "¿Un recuerdo valioso de tu infancia?",
    followUps: [
      "¿Qué olor o sonido te transporta a ese momento?",
      "¿Quién más estaba presente en ese recuerdo?",
      "¿Por qué creés que tu mente eligió guardar ese momento exacto?",
      "¿Cómo te sentís al recordarlo hoy?",
      "¿Qué le dirías a tu versión niña de ese momento?"
    ]
  },
  { 
    id: 4, 
    text: "¿Una persona o una experiencia que te haya marcado?",
    followUps: [
      "¿Cómo sería tu vida hoy si eso no hubiera pasado?",
      "¿Esa marca es algo que llevás con orgullo o con nostalgia?",
      "¿Qué aprendiste de vos a través de esa persona o evento?",
      "¿Se lo pudiste agradecer o expresar alguna vez?",
      "¿Esa experiencia cambió tus valores fundamentales?"
    ]
  },
  { 
    id: 5, 
    text: "¿Cuál es tu mayor miedo?",
    followUps: [
      "¿Sentís que ese miedo te limita en tus decisiones?",
      "¿De dónde creés que viene esa sensación?",
      "¿Hay algún momento en el que te sentiste valiente frente a eso?",
      "¿Qué es lo peor que podría pasar si se hiciera realidad?",
      "¿Cómo te imaginás superándolo algún día?"
    ]
  },
  { 
    id: 6, 
    text: "¿Qué pensabas el día que nació tu primer/a hijo/a? Si no tenés hijos/as, ¿te gustaría tener?",
    followUps: [
      "¿Qué es lo que más te asusta o te ilusiona de la ma/paternidad?",
      "¿Cómo imaginás que cambiarían tus prioridades?",
      "¿Qué valor fundamental te gustaría transmitir?",
      "¿Sentís presión social respecto a este tema?",
      "¿Creés que estás preparado/a para ese cambio?"
    ]
  },
  { 
    id: 7, 
    text: "¿Qué aprendiste de vos este último año?",
    followUps: [
      "¿Fue un aprendizaje doloroso o gratificante?",
      "¿Qué hábito tuviste que dejar atrás para aprender eso?",
      "¿Cómo vas a aplicar ese conocimiento de ahora en adelante?",
      "¿Alguien te ayudó a darte cuenta de eso?",
      "¿Te sorprendió descubrir eso sobre vos?"
    ]
  },
  { 
    id: 8, 
    text: "¿Tuviste amistades que no fueron sanas? ¿Cómo lo manejaste?",
    followUps: [
      "¿Qué señales ignoraste al principio?",
      "¿Te costó mucho poner un límite?",
      "¿Sentís que eso cambió tu forma de confiar en los demás?",
      "¿Qué aprendiste sobre lo que sí buscás en un amigo?",
      "¿Hubo algún momento de cierre o simplemente se alejaron?"
    ]
  },
  { 
    id: 9, 
    text: "¿Qué exigencias te imponés? ¿Hacés algo para suavizarlas?",
    followUps: [
      "¿Esa voz que te exige suena como la tuya o como la de alguien más?",
      "¿En qué momento del día te sentís más presionado/a por vos mismo/a?",
      "¿Qué pasa si un día decidís no cumplir con esas expectativas?",
      "¿Cómo te premiás cuando lográs relajarte?",
      "¿Sentís que esas exigencias vienen de tu infancia?"
    ]
  },
  { 
    id: 10, 
    text: "¿Hay algún aspecto de tu personalidad que te cuesta aceptar? ¿Buscás rechazarlo o integrarlo en tu vida?",
    followUps: [
      "¿Cómo creés que ese aspecto te ayuda en ciertas situaciones?",
      "¿Qué pasaría si fueras más amable con esa parte de vos?",
      "¿Es algo que intentás ocultar a los demás?",
      "¿Cuándo sentís que ese rasgo toma el control?",
      "¿Alguien te hizo sentir que ese rasgo era algo malo?"
    ]
  },
  { 
    id: 11, 
    text: "¿Sentís que te quedó algo pendiente con alguna persona? ¿Por qué no hiciste nada al respecto?",
    followUps: [
      "¿Qué es lo que más te frena para retomar ese contacto?",
      "¿Cómo te sentirías si esa persona diera el primer paso?",
      "¿Sentís que el tiempo ya cerró esa puerta o sigue entreabierta?",
      "¿Qué le dirías si la tuvieras frente a vos solo un minuto?",
      "¿Es una deuda de perdón o de agradecimiento?"
    ]
  },
  { 
    id: 12, 
    text: "¿Cómo te veo en esta etapa?",
    followUps: [
      "¿Esa imagen coincide con cómo te sentís por dentro?",
      "¿Qué parte de tu personalidad creés que brilla más ahora?",
      "¿Hay algo de tu versión anterior que extrañes?",
      "¿Qué creés que proyectás sin darte cuenta?",
      "¿Cómo te gustaría que te vieran los demás en un año?"
    ]
  },
  { 
    id: 13, 
    text: "¿Qué cambiarías de tu crianza si tuvieras que educar a una persona?",
    followUps: [
      "¿Qué es lo que más agradecés de cómo te criaron?",
      "¿Sentís que heredaste miedos de tus padres?",
      "¿Cómo evitarías repetir los mismos errores?",
      "¿Qué valor sentís que faltó en tu hogar?",
      "¿Qué frase de tus padres repetís aunque no quieras?"
    ]
  },
  { 
    id: 14, 
    text: "¿Qué estás trabajando en tu interior y te gustaría compartir?",
    followUps: [
      "¿Es algo que te genera paz o conflicto?",
      "¿Cómo te das cuenta de que estás progresando en eso?",
      "¿Qué es lo más difícil de ese proceso?",
      "¿Quién es tu mayor apoyo en este camino?",
      "¿Cómo te imaginás una vez que logres resolverlo?"
    ]
  },
  { 
    id: 15, 
    text: "Destacá una virtud de alguna de las personas presentes.",
    followUps: [
      "¿Cuándo fue la primera vez que notaste esa virtud?",
      "¿Cómo creés que esa virtud influye en el grupo?",
      "¿Te gustaría tener un poco más de ese rasgo en vos?",
      "¿Sentís que esa persona es consciente de lo valioso que es ese don?",
      "¿Cómo podrías ayudar a potenciar esa virtud en ella?"
    ]
  },
  { 
    id: 16, 
    text: "¿Qué rol cumplís en tu familia? ¿Cómo te hace sentir?",
    followUps: [
      "¿Ese rol te fue asignado o lo elegiste vos?",
      "¿Te gustaría probar un papel diferente por un tiempo?",
      "¿Sentís que ese rol te agota o te da propósito?",
      "¿Cómo cambia ese rol cuando estás fuera del círculo familiar?",
      "¿Quién es la persona que más reconoce tu esfuerzo en la familia?"
    ]
  },
  { 
    id: 17, 
    text: "¿Cómo manejás los desencuentros en los vínculos (*)? (*) Por ejemplo, amistades que dejás de frecuentar.",
    followUps: [
      "¿Sos de los que prefieren hablar o de los que se alejan en silencio?",
      "¿Sentís mucha culpa cuando un vínculo se rompe?",
      "¿Qué es lo que más te cuesta perdonar en una relación?",
      "¿Sos de dar segundas oportunidades con facilidad?",
      "¿Cómo te das cuenta de que un vínculo ya no tiene vuelta atrás?"
    ]
  },
  { 
    id: 18, 
    text: "¿Cuándo fue la última vez que dijiste \"Te quiero\"? ¿A quién se lo dijiste?",
    followUps: [
      "¿Te sale natural o sentís que tenés que pensarlo mucho?",
      "¿Hay alguien a quien te gustaría decírselo pero no te animás?",
      "¿Sentís que lo decís lo suficiente?",
      "¿Cómo reaccionás cuando te lo dicen a vos?",
      "¿Preferís decirlo con palabras o con actos?"
    ]
  },
  { 
    id: 19, 
    text: "Describí tu relación con vos mismo/a.",
    followUps: [
      "¿Sos tu mejor amigo o tu peor juez?",
      "¿Qué es lo que más te gusta de estar a solas con vos?",
      "¿En qué momento del día te sentís más en paz con quien sos?",
      "¿Qué le dirías a tu versión de hace cinco años?",
      "¿Sentís que esa relación mejoró con el tiempo?"
    ]
  },
  { 
    id: 20, 
    text: "Solo yo sé que soy ________.",
    followUps: [
      "¿Por qué elegís mantener esa parte en privado?",
      "¿Hay alguien con quien te gustaría compartir ese secreto?",
      "¿Cómo te hace sentir cargar con esa definición a solas?",
      "¿Esa parte de vos te hace sentir vulnerable o poderoso/a?",
      "¿Creés que la gente se sorprendería si lo supiera?"
    ]
  },
  { 
    id: 21, 
    text: "¿Cuál es el sueño más grande que tenés?",
    // Fix: Completed the missing follow-ups for the last question which was truncated
    followUps: [
      "¿Qué es lo primero que harías si hoy se cumpliera?",
      "¿Sentís que estás haciendo algo para acercarte a eso?",
      "¿Qué sacrificarías para lograrlo?",
      "¿Alguien más sabe de este sueño?",
      "¿Cómo creés que cambiaría tu vida si se hiciera realidad?"
    ]
  }
];
