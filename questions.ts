
import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "¿Sos obsesivo/a? ¿En qué sentido?",
    followUps: [
      "¿Ese rasgo te genera más eficacia o más ansiedad?",
      "¿Hay alguien que te lo haya señalado recientemente?",
      "¿En qué área específica de tu vida se nota más?"
    ]
  },
  {
    id: 2,
    text: "¿Te mentís a vos mismo/a sobre algo? ¿Por qué?",
    followUps: [
      "¿Qué pasaría si hoy decidieras dejar de sostener esa mentira?",
      "¿Sentís que esa mentira te protege de un dolor mayor?",
      "¿Es algo que sospechás que los demás ya notaron?"
    ]
  },
  {
    id: 3,
    text: "¿Un recuerdo valioso de tu infancia?",
    followUps: [
      "¿Qué olor o sonido te transporta inmediatamente a ese momento?",
      "¿Quién era tu cómplice en ese recuerdo?",
      "¿Cómo te sentís hoy al evocar esa imagen?"
    ]
  },
  {
    id: 4,
    text: "¿Una persona o una experiencia que te haya marcado?",
    followUps: [
      "¿Cómo sería tu vida hoy si eso no hubiera pasado?",
      "¿Llevás esa marca con orgullo o con pesar?",
      "¿Pudiste expresar lo que significó para vos?"
    ]
  },
  {
    id: 5,
    text: "¿Cuál es tu mayor miedo?",
    followUps: [
      "¿Sentís que ese miedo te impide tomar decisiones hoy?",
      "¿Recordás cuándo fue la primera vez que lo sentiste?",
      "¿Qué es lo peor que pasaría si se hiciera realidad?"
    ]
  },
  {
    id: 6,
    text: "¿Qué pensabas el día que nació tu primer/a hijo/a? Si no tenés hijos/as, ¿te gustaría tener?",
    followUps: [
      "¿Qué miedo te surgió en ese instante exacto?",
      "¿Cómo cambió tu visión del mundo desde ese día?",
      "¿Qué valor fundamental te gustaría transmitir o heredar?"
    ]
  },
  {
    id: 7,
    text: "¿Qué aprendiste de vos este último año?",
    followUps: [
      "¿Fue un aprendizaje doloroso o liberador?",
      "¿Qué tuviste que soltar para aprender eso?",
      "¿Te sorprendiste a vos mismo/a con este descubrimiento?"
    ]
  },
  {
    id: 8,
    text: "¿Tuviste amistades que no fueron sanas? ¿Cómo lo manejaste?",
    followUps: [
      "¿Qué señales ignoraste al principio de esa relación?",
      "¿Te costó mucho poner el punto final?",
      "¿Qué aprendiste sobre lo que no querés en un vínculo?"
    ]
  },
  {
    id: 9,
    text: "¿Qué exigencias te imponés? ¿Hacés algo para suavizarlas?",
    followUps: [
      "¿Esa voz exigente se parece a la de alguien de tu pasado?",
      "¿Qué pasa si un día no cumplís con tus propias expectativas?",
      "¿Te permitís descansar sin sentir culpa?"
    ]
  },
  {
    id: 10,
    text: "¿Hay algún aspecto de tu personalidad que te cuesta aceptar? ¿Buscás rechazarlo o integrarlo en tu vida?",
    followUps: [
      "¿En qué situaciones suele aparecer ese rasgo?",
      "¿Qué pasaría si fueras más compasivo con esa parte tuya?",
      "¿Alguien te hizo sentir que eso estaba mal?"
    ]
  },
  {
    id: 11,
    text: "¿Sentís que te quedó algo pendiente con alguna persona? ¿Por qué no hiciste nada al respecto?",
    followUps: [
      "¿Qué te frena hoy a intentar cerrar ese ciclo?",
      "¿Esperás que la otra persona de el primer paso?",
      "¿Cómo te sentirías si pudieras resolverlo ahora mismo?"
    ]
  },
  {
    id: 12,
    text: "¿Cómo te ves en esta etapa?",
    followUps: [
      "¿Coincide lo que sentís con lo que proyectás?",
      "¿Qué es lo que más disfrutás de tu versión actual?",
      "¿Hay algo de tu 'yo' anterior que extrañes?"
    ]
  },
  {
    id: 13,
    text: "¿Qué cambiarías de tu crianza si tuvieras que educar a una persona?",
    followUps: [
      "¿Qué es lo que más agradecés haber recibido?",
      "¿Sentís que heredaste algún miedo de tus padres?",
      "¿Qué valor sentís que faltó en tu mesa familiar?"
    ]
  },
  {
    id: 14,
    text: "¿Qué estás trabajando en tu interior y te gustaría compartir?",
    followUps: [
      "¿Es un proceso solitario o tenés apoyo?",
      "¿Cómo medís tu progreso en esto?",
      "¿Qué obstáculo es el más difícil de superar?"
    ]
  },
  {
    id: 15,
    text: "Destacá una virtud de alguna de las personas presentes.",
    followUps: [
      "¿Recordás el momento exacto en que notaste esa virtud?",
      "¿Cómo te inspira eso a vos personalmente?",
      "¿Se lo habías dicho alguna vez?"
    ]
  },
  {
    id: 16,
    text: "¿Qué rol cumplís en tu familia? ¿Cómo te hace sentir?",
    followUps: [
      "¿Ese rol lo elegiste o te lo asignaron?",
      "¿Te sentís libre de cambiar ese papel si quisieras?",
      "¿Quién es la persona que más valida tu rol?"
    ]
  },
  {
    id: 17,
    text: "¿Cómo manejás los desencuentros en los vínculos (*)? (*) Por ejemplo, amistades que dejás de frecuentar.",
    followUps: [
      "¿Preferís la confrontación o el silencio?",
      "¿Te quedás pensando mucho tiempo en lo que pasó?",
      "¿Sos de dar segundas oportunidades fácilmente?"
    ]
  },
  {
    id: 18,
    text: "¿Cuándo fue la última vez que dijiste \"Te quiero\"? ¿A quién se lo dijiste?",
    followUps: [
      "¿Te sale fácil o se te traba en la garganta?",
      "¿Hay alguien a quien debieras decírselo hoy?",
      "¿Sentís que lo escuchás lo suficiente?"
    ]
  },
  {
    id: 19,
    text: "Describí tu relación con vos mismo/a.",
    followUps: [
      "¿Sos tu mejor aliado o tu crítico más duro?",
      "¿Disfrutás de tu propia compañía en silencio?",
      "¿Qué harías para mejorar ese vínculo hoy?"
    ]
  },
  {
    id: 20,
    text: "Solo yo sé que soy ________.",
    followUps: [
      "¿Por qué elegís guardar eso en secreto?",
      "¿Te da poder o te pesa no contarlo?",
      "¿Quién sería la primera persona en saberlo?"
    ]
  },
  {
    id: 21,
    text: "¿Cuál es el sueño más grande que tenés?",
    followUps: [
      "¿Qué paso pequeño podrías dar hoy hacia eso?",
      "¿Te da miedo que se cumpla o que no se cumpla?",
      "¿Cómo cambiaría tu rutina si eso sucediera?"
    ]
  },
  {
    id: 22,
    text: "¿Qué comida te recuerda a tu hogar?",
    followUps: [
      "¿Quién solía cocinar ese plato?",
      "¿Qué emoción te despierta ese aroma?",
      "¿Hace cuánto no lo probás?"
    ]
  },
  {
    id: 23,
    text: "¿Qué personaje de película o serie te gustaría ser? ¿Por qué?",
    followUps: [
      "¿Qué cualidad de ese personaje te falta a vos?",
      "¿Te bancarías sus problemas tanto como sus virtudes?",
      "¿Es un héroe o un villano?"
    ]
  },
  {
    id: 24,
    text: "¿Qué recuerdo tenés de tu primera cita?",
    followUps: [
      "¿Qué sentías en el estómago en ese momento?",
      "¿Fuiste vos mismo/a o actuaste un poco?",
      "¿Qué le dirías a tu yo de ese día?"
    ]
  },
  {
    id: 25,
    text: "¿Qué canción elegirías para cantar en un karaoke?",
    followUps: [
      "¿La elegís por la letra o por el ritmo?",
      "¿A quién se la dedicarías secretamente?",
      "¿Te da vergüenza o te transformás en el escenario?"
    ]
  },
  {
    id: 26,
    text: "¿Quién de las personas presentes sería mejor comediante?",
    followUps: [
      "¿Es por su ingenio o por su torpeza?",
      "¿Recordás algún chiste o momento gracioso puntual?",
      "¿Creés que esa persona sabe que es graciosa?"
    ]
  },
  {
    id: 27,
    text: "¿Qué cuento te relataban en la infancia?",
    followUps: [
      "¿Quién te lo leía o contaba?",
      "¿Te daba miedo o te daba paz?",
      "¿Qué enseñanza te quedó grabada de esa historia?"
    ]
  },
  {
    id: 28,
    text: "¿Te enamoraste alguna vez? ¿Quién fue la primera persona y qué te gustó de ella?",
    followUps: [
      "¿Fue un amor correspondido?",
      "¿Qué aprendiste del amor con esa experiencia?",
      "¿Seguís sintiendo algo al recordarlo?"
    ]
  },
  {
    id: 29,
    text: "¿Qué buscás en una pareja?",
    followUps: [
      "¿Eso que buscás, vos lo ofrecés también?",
      "¿Cambió mucho tu búsqueda con los años?",
      "¿Qué es innegociable para vos?"
    ]
  },
  {
    id: 30,
    text: "Quiero o tengo. ¿Cuál de las dos está más presente en tu cotidianidad?",
    followUps: [
      "¿Sentís que disfrutás lo que tenés?",
      "¿El 'quiero' te motiva o te frustra?",
      "¿Cómo podrías equilibrar esa balanza?"
    ]
  },
  {
    id: 31,
    text: "¿Qué aventura tenés pendiente por realizar?",
    followUps: [
      "¿Qué te impide hacerla ahora mismo?",
      "¿A quién llevarías con vos?",
      "¿Es un riesgo físico o emocional?"
    ]
  },
  {
    id: 32,
    text: "¿Una situación que te incomode?",
    followUps: [
      "¿Cómo reacciona tu cuerpo ante eso?",
      "¿Solés evitarla o enfrentarla?",
      "¿Creés que los demás notan tu incomodidad?"
    ]
  },
  {
    id: 33,
    text: "¿Una persona que te alivie en momentos tristes?",
    followUps: [
      "¿Qué tiene esa persona que te calma?",
      "¿Sabe esa persona lo importante que es?",
      "¿Vos sos el alivio de alguien?"
    ]
  },
  {
    id: 34,
    text: "Si pudieses ser exitoso/a en lo que quieras, ¿en qué elegirías serlo?",
    followUps: [
      "¿Es algo que ya hacés o algo nuevo?",
      "¿Buscarías fama o solo reconocimiento personal?",
      "¿Cambiaría mucho tu vida diaria?"
    ]
  },
  {
    id: 35,
    text: "¿Una buena decisión?",
    followUps: [
      "¿Te costó mucho tomarla?",
      "¿Qué hubiera pasado si elegías lo opuesto?",
      "¿A quién más benefició esa decisión?"
    ]
  },
  {
    id: 36,
    text: "¿Qué pensás sobre la monogamia?",
    followUps: [
      "¿Es algo natural o cultural para vos?",
      "¿Te sentís cómodo/a con ese modelo?",
      "¿Tuviste experiencias que cambiaron tu opinión?"
    ]
  },
  {
    id: 37,
    text: "¿Alguna vez tuviste un acto valioso con alguien, del que no presumas mucho, pero te hace sentir orgulloso/a?",
    followUps: [
      "¿Por qué elegís no contarlo?",
      "¿Qué sentiste justo después de hacerlo?",
      "¿Te gustaría que alguien hiciera lo mismo por vos?"
    ]
  },
  {
    id: 38,
    text: "¿Dejaste de hacer cosas por miedo a fracasar? ¿Cuáles?",
    followUps: [
      "¿Ese miedo era tuyo o impuesto?",
      "¿Todavía estás a tiempo de intentarlo?",
      "¿Qué es lo peor que podría pasar si fallás?"
    ]
  },
  {
    id: 39,
    text: "¿Creés en las segundas oportunidades?",
    followUps: [
      "¿Vos has necesitado una alguna vez?",
      "¿Hay límites para perdonar?",
      "¿Las personas cambian realmente?"
    ]
  },
  {
    id: 40,
    text: "¿Cuál es el mejor consejo que te dieron? ¿Pudiste transmitirselo a alguien también?",
    followUps: [
      "¿Quién te lo dio?",
      "¿Lo aplicaste inmediatamente o tardaste?",
      "¿En qué momento te salvó ese consejo?"
    ]
  },
  {
    id: 41,
    text: "¿Qué pensabas el día de tu casamiento? Si no te casaste, ¿te gustaría?",
    followUps: [
      "¿Sentís presión social al respecto?",
      "¿Qué significa el compromiso para vos?",
      "¿Cómo imaginás la fiesta ideal?"
    ]
  },
  {
    id: 42,
    text: "¿Qué creencias se les imponen a los/as niños/as y no estás de acuerdo?",
    followUps: [
      "¿Vos sufriste esa imposición?",
      "¿Hacés algo para cambiar eso en tu entorno?",
      "¿Por qué creés que se sigue repitiendo?"
    ]
  },
  {
    id: 43,
    text: "Si pudieses conocer los sentimientos más profundos de una persona, ¿a quién elegirías? ¿Por qué?",
    followUps: [
      "¿Estás preparado/a para lo que podrías encontrar?",
      "¿Creés que cambiaría tu relación con ella?",
      "¿Es curiosidad o necesidad de control?"
    ]
  },
  {
    id: 44,
    text: "¿Qué estás listo/a para soltar?",
    followUps: [
      "¿Qué te mantenía atado a eso hasta ahora?",
      "¿Cómo te vas a sentir cuando lo sueltes?",
      "¿Necesitás ayuda para dejarlo ir?"
    ]
  },
  {
    id: 45,
    text: "¿Considerás importante la educación sexual? ¿Quiénes deberían abordar este tema?",
    followUps: [
      "¿Cómo fue tu propia educación sexual?",
      "¿Qué tabú te costó más romper?",
      "¿Creés que hoy hay más libertad o más confusión?"
    ]
  },
  {
    id: 46,
    text: "¿Un sueño recurrente?",
    followUps: [
      "¿Qué sensación te deja al despertar?",
      "¿Intentaste interpretarlo alguna vez?",
      "¿Creés que es un mensaje de tu inconsciente?"
    ]
  },
  {
    id: 47,
    text: "Un talento inútil que te de orgullo es ________.",
    followUps: [
      "¿Cómo descubriste que podías hacer eso?",
      "¿Se lo mostrás a la gente en fiestas?",
      "¿Te divierte tener esa habilidad secreta?"
    ]
  },
  {
    id: 48,
    text: "¿Qué lugar ocupa el deseo en tu vida?",
    followUps: [
      "¿Lo reprimís o le das rienda suelta?",
      "¿Sentís que el deseo te mueve o te distrae?",
      "¿Cómo cambió tu deseo con los años?"
    ]
  },
  {
    id: 49,
    text: "¿Qué es la soledad para vos? ¿Te gusta estar solo/a? ¿Por qué?",
    followUps: [
      "¿Cuál es tu actividad favorita en soledad?",
      "¿Cuándo la soledad pasa a ser aislamiento?",
      "¿Te llevás bien con tus propios pensamientos?"
    ]
  },
  {
    id: 50,
    text: "Si algo te gusta, ¿asumirías cualquier riesgo?",
    followUps: [
      "¿Dónde trazás la línea del peligro?",
      "¿Sos impulsivo/a o calculador/a?",
      "¿Te arrepentiste alguna vez de arriesgarte?"
    ]
  },
  {
    id: 51,
    text: "¿Qué te da culpa?",
    followUps: [
      "¿Es una culpa racional o impuesta?",
      "¿Cómo hacés para aliviarla?",
      "¿Te perdonás fácil a vos mismo/a?"
    ]
  },
  {
    id: 52,
    text: "¿Qué creencia te gustaría desaprender?",
    followUps: [
      "¿De dónde viene esa creencia?",
      "¿En qué momentos te limita más?",
      "¿Qué te dirías para contradecirla?"
    ]
  },
  {
    id: 53,
    text: "¿Cuándo fue la última vez que lloraste? ¿Por qué?",
    followUps: [
      "¿Te permitís llorar o te aguantás?",
      "¿Te sentiste mejor después?",
      "¿Alguien te consoló?"
    ]
  },
  {
    id: 54,
    text: "¿Qué tan cómodo/a te sentís hablando sobre la sexualidad?",
    followUps: [
      "¿Con quién hablás de esto sin filtro?",
      "¿Hay temas específicos que te den pudor?",
      "¿Te gustaría ser más abierto/a?"
    ]
  },
  {
    id: 55,
    text: "¿Hay algún momento en el que te sientas solo/a estando acompañado/a?",
    followUps: [
      "¿Con qué personas te pasa eso?",
      "¿Es porque no te entienden o no te escuchan?",
      "¿Cómo salís de esa sensación?"
    ]
  },
  {
    id: 56,
    text: "¿Cómo y por qué empezaste a tener conocimiento sobre la sexualidad? ¿Te hubiese gustado que sea de otra forma?",
    followUps: [
      "¿Fue por curiosidad o por accidente?",
      "¿Qué mito tardaste años en derribar?",
      "¿Con quién te hubiese gustado hablarlo primero?"
    ]
  },
  {
    id: 57,
    text: "Si mirás al pasado, ¿cómo ves al/a la adolescente que fuiste?",
    followUps: [
      "¿Lo abrazarías o lo retarías?",
      "¿Qué inseguridad ya superaste de esa época?",
      "¿Qué sueño de ese adolescente sigue vivo?"
    ]
  },
  {
    id: 58,
    text: "¿Cuáles son tus próximos objetivos por cumplir?",
    followUps: [
      "¿Son objetivos tuyos o lo que se espera de vos?",
      "¿Qué paso concreto vas a dar esta semana?",
      "¿Cómo vas a celebrar cuando lo logres?"
    ]
  },
  {
    id: 59,
    text: "¿Qué etiqueta sentís que acarreás y no te identifica?",
    followUps: [
      "¿Quién te puso esa etiqueta?",
      "¿Hacés algo para demostrar lo contrario?",
      "¿Te pesa o ya no te importa?"
    ]
  },
  {
    id: 60,
    text: "¿Qué pensás sobre la educación sin distinción de géneros?",
    followUps: [
      "¿Tuviste experiencias de discriminación escolar?",
      "¿Cómo creés que impactaría en el futuro?",
      "¿Qué miedo te genera, si es que te genera alguno?"
    ]
  },
  {
    id: 61,
    text: "\"Elegí un trabajo que te guste y no vas a tener que trabajar ni un día de tu vida\". ¿Qué pensás?",
    followUps: [
      "¿Es una frase realista para vos?",
      "¿Tu trabajo actual te apasiona?",
      "¿Qué pasa cuando la pasión se vuelve obligación?"
    ]
  },
  {
    id: 62,
    text: "La educación que recibí me enseñó a ________.",
    followUps: [
      "¿Agradecés o renegás de esa enseñanza?",
      "¿Tuviste que desaprender eso después?",
      "¿Se lo enseñarías a tus hijos?"
    ]
  },
  {
    id: 63,
    text: "¿Qué o quién influye en la forma en que pensás? ¿Por qué?",
    followUps: [
      "¿Te gusta sentir esa influencia?",
      "¿Sos fácil de convencer?",
      "¿Cuándo defendiste tu postura contra todos?"
    ]
  },
  {
    id: 64,
    text: "¿El fin justifica los medios?",
    followUps: [
      "¿Cuál es tu límite ético inquebrantable?",
      "¿Alguna vez cruzaste la línea por un buen fin?",
      "¿Te arrepentís de haberlo hecho?"
    ]
  },
  {
    id: 65,
    text: "Cuando ayudás a alguien, ¿lo hacés por vos o por la otra persona? ¿Creés que existen las acciones desinteresadas?",
    followUps: [
      "¿Te sentís bien cuando agradecen tu ayuda?",
      "¿Ayudarías si nadie se enterara?",
      "¿Qué es el altruismo para vos?"
    ]
  },
  {
    id: 66,
    text: "¿Creés que se puede hacer humor con todo? ¿Qué pensás?",
    followUps: [
      "¿Qué tema es sagrado para vos?",
      "¿Te ofendiste alguna vez con un chiste?",
      "¿El humor sana o hiere?"
    ]
  },
  {
    id: 67,
    text: "¿Qué es ser libre en una relación de pareja? ¿Qué diferencias encontrás con otros vínculos que mantenés?",
    followUps: [
      "¿Sentís libertad en tu relación actual?",
      "¿Los celos limitan tu libertad?",
      "¿Qué acuerdo es vital para vos?"
    ]
  },
  {
    id: 68,
    text: "¿Qué es la sexualidad para vos?",
    followUps: [
      "¿Es solo físico o también emocional?",
      "¿Cambió tu definición con el tiempo?",
      "¿Qué rol juega en tu felicidad?"
    ]
  },
  {
    id: 69,
    text: "Lo que una persona piensa, ¿creés que la define? ¿En qué medida y por qué?",
    followUps: [
      "¿Somos lo que pensamos o lo que hacemos?",
      "¿Juzgás a la gente por sus ideas políticas?",
      "¿Pudiste separar a la persona de su ideología?"
    ]
  },
  {
    id: 70,
    text: "¿Alguna vez dejaste de hacer algo por tu género?",
    followUps: [
      "¿Sentiste bronca en ese momento?",
      "¿Quién te impuso ese límite?",
      "¿Lo harías hoy sin importar qué digan?"
    ]
  },
  {
    id: 71,
    text: "¿Creés que existe una razón por la que te rodeás de ciertas personas?",
    followUps: [
      "¿Qué tienen en común tus amigos?",
      "¿Buscás espejos o complementos?",
      "¿Te cuesta abrirte a gente muy distinta?"
    ]
  },
  {
    id: 72,
    text: "¿Todo lo que pensamos es lo que deseamos? ¿Por qué?",
    followUps: [
      "¿Te asustan a veces tus propios pensamientos?",
      "¿Sabés distinguir fantasía de deseo real?",
      "¿Qué pensamiento recurrente no es un deseo?"
    ]
  },
  {
    id: 73,
    text: "¿Cuándo creés que es importante empezar a tener noción sobre la sexualidad?",
    followUps: [
      "¿Antes es mejor o quema etapas?",
      "¿La inocencia se pierde o se transforma?",
      "¿Quién debería dar la primera charla?"
    ]
  },
  {
    id: 74,
    text: "¿Casualidad o causalidad?",
    followUps: [
      "¿Creés en el destino?",
      "¿Qué evento de tu vida parece guionado?",
      "¿Te da paz pensar que todo tiene un sentido?"
    ]
  },
  {
    id: 75,
    text: "\"Si no te cela no te quiere\". ¿Qué opinás sobre esta expresión?",
    followUps: [
      "¿Alguna vez te sentiste querido/a por celos?",
      "¿Cómo demostrás interés sin celar?",
      "¿Qué inseguridad esconden los celos?"
    ]
  },
  {
    id: 76,
    text: "¿Creés que llega un momento en el que nos sentimos realizados/as?",
    followUps: [
      "¿O siempre falta algo más?",
      "¿Qué imagen tenés de tu propia realización?",
      "¿Conocés a alguien que parezca realizado?"
    ]
  },
  {
    id: 77,
    text: "¿Alguna vez fingiste afecto por una persona? ¿Por qué?",
    followUps: [
      "¿Fue por compromiso o por lástima?",
      "¿Te sentiste falso/a haciéndolo?",
      "¿La otra persona se dio cuenta?"
    ]
  },
  {
    id: 78,
    text: "¿Qué mandatos traés y padecés?",
    followUps: [
      "¿Cuál te gustaría romper hoy mismo?",
      "¿Sentís culpa cuando no los cumplís?",
      "¿Son familiares o sociales?"
    ]
  },
  {
    id: 79,
    text: "El lenguaje, ¿cómplice o enemigo de la inclusión social?",
    followUps: [
      "¿Te cuesta adaptarte a los cambios del lenguaje?",
      "¿Creés que las palabras crean realidades?",
      "¿Te corregiste a vos mismo/a alguna vez?"
    ]
  },
  {
    id: 80,
    text: "Si pudieras volver al pasado, ¿qué te dirías?",
    followUps: [
      "¿Te advertirías de algo o te darías ánimo?",
      "¿Te escucharías a vos mismo/a?",
      "¿A qué edad viajarías?"
    ]
  },
  {
    id: 81,
    text: "Siendo grande, ¿cómo te hubiese gustado ser de chico/a?",
    followUps: [
      "¿Más valiente o más tranquilo/a?",
      "¿Sentís que te faltó jugar más?",
      "¿Qué hobby de la infancia abandonaste?"
    ]
  },
  {
    id: 82,
    text: "¿Qué cambiarías del mundo?",
    followUps: [
      "¿Empezarías por algo político o social?",
      "¿Creés que un solo cambio alcanza?",
      "¿Qué hacés en tu metro cuadrado para eso?"
    ]
  },
  {
    id: 83,
    text: "¿Te gustaría hacerle una pregunta a una de las personas presentes? Hacésela.",
    followUps: [
      "¿Por qué elegiste a esa persona?",
      "¿Te da nervios su respuesta?",
      "¿Es algo que siempre quisiste saber?"
    ]
  },
  {
    id: 84,
    text: "¿Alguna vez escuchaste o leíste alguna conversación sin permiso? ¿Por qué?",
    followUps: [
      "¿Encontraste lo que buscabas o te arrepentiste?",
      "¿Te carcomió la culpa después?",
      "¿Cambió tu visión de esa persona?"
    ]
  },
  {
    id: 85,
    text: "¿Creés que existe el momento indicado para empezar o terminar un proyecto (*)? ¿Cómo te das cuenta? (*) Por ejemplo, una relación, un trabajo, entre otros.",
    followUps: [
      "¿Sos de estirar los finales?",
      "¿Confiás en tu intuición para eso?",
      "¿Qué señal esperás para actuar?"
    ]
  },
  {
    id: 86,
    text: "¿Tuviste alguna experiencia paranormal? ¿Cómo fue y con quién/es estabas?",
    followUps: [
      "¿Te dio miedo o curiosidad?",
      "¿Te creen cuando la contás?",
      "¿Buscás una explicación lógica o mágica?"
    ]
  },
  {
    id: 87,
    text: "¿En qué te gustaría haber sido bueno/a?",
    followUps: [
      "¿Es un talento artístico o deportivo?",
      "¿Intentaste aprenderlo y fallaste?",
      "¿Admirás a quienes lo hacen bien?"
    ]
  },
  {
    id: 88,
    text: "¿El último regalo que hiciste? ¿Y el último regalo que recibiste?",
    followUps: [
      "¿Te gusta más regalar o recibir?",
      "¿Pensás mucho los regalos o vas a lo seguro?",
      "¿Cuál fue el peor regalo que te hicieron?"
    ]
  },
  {
    id: 89,
    text: "¿Sobre qué tema considerás que tenés mucho conocimiento?",
    followUps: [
      "¿Te gusta enseñarlo a otros?",
      "¿Cómo aprendiste tanto sobre eso?",
      "¿Es útil o es pura curiosidad?"
    ]
  },
  {
    id: 90,
    text: "Si fueses embajador/a, ¿qué lugar elegirías para irte a vivir? ¿A dónde no irías?",
    followUps: [
      "¿Qué te atrae de esa cultura?",
      "¿Te adaptarías fácil al idioma?",
      "¿Qué es lo que no soportarías del lugar que rechazás?"
    ]
  },
  {
    id: 91,
    text: "¿Tu película preferida?",
    followUps: [
      "¿Cuántas veces la viste?",
      "¿Con qué personaje te identificás?",
      "¿Qué escena te hace llorar o reír siempre?"
    ]
  },
  {
    id: 92,
    text: "Si escribieras un libro, ¿de qué sería? ¿Cómo lo titularías?",
    followUps: [
      "¿Sería ficción o autobiografía?",
      "¿A quién se lo dedicarías?",
      "¿Te gustaría ser famoso por escribirlo?"
    ]
  },
  {
    id: 93,
    text: "¿Qué es lo que más te gusta del barrio donde vivís?",
    followUps: [
      "¿Es la gente o el paisaje?",
      "¿Te sentís parte de la comunidad?",
      "¿Qué le falta para ser perfecto?"
    ]
  },
  {
    id: 94,
    text: "Si fueras un animal, ¿cuál serías? ¿Por qué?",
    followUps: [
      "¿Elegís por instinto o por estética?",
      "¿Te ves como depredador o presa?",
      "¿Qué envidiás de la vida animal?"
    ]
  },
  {
    id: 95,
    text: "¿Elegirías otra época para vivir? ¿Cuál? ¿Por qué?",
    followUps: [
      "¿Renunciarías a la tecnología actual?",
      "¿Te atrae la moda o los valores de esa época?",
      "¿Qué rol tendrías en esa sociedad?"
    ]
  },
  {
    id: 96,
    text: "¿Un viaje pendiente?",
    followUps: [
      "¿Es un destino exótico o cercano?",
      "¿Estás ahorrando para eso?",
      "¿Es un viaje para hacer solo/a o acompañado/a?"
    ]
  },
  {
    id: 97,
    text: "¿Cuál es tu lugar preferido en tu casa? ¿Por qué?",
    followUps: [
      "¿Qué hacés ahí que no hacés en otro lado?",
      "¿Es un refugio o un lugar de encuentro?",
      "¿Cómo lo decoraste?"
    ]
  },
  {
    id: 98,
    text: "¿Existe la media naranja? ¿Creés que necesitamos algo o alguien externo para sentirnos completos/as?",
    followUps: [
      "¿Te sentís completo/a hoy?",
      "¿Esa idea te presiona o te ilusiona?",
      "¿Qué opinás del amor propio frente a esto?"
    ]
  },
  {
    id: 99,
    text: "\"Es mejor pedir perdón que permiso\". ¿Qué opinás sobre esta expresión?",
    followUps: [
      "¿Sos impulsivo/a o respetuoso/a?",
      "¿Te metiste en problemas por pensar así?",
      "¿Cuándo no aplica esta frase?"
    ]
  },
  {
    id: 100,
    text: "¿Creés que las personas pueden cambiar?",
    followUps: [
      "¿Viste a alguien cambiar radicalmente?",
      "¿Qué se necesita para un cambio real?",
      "¿Vos cambiaste algo fundamental?"
    ]
  },
  {
    id: 101,
    text: "Pensá en alguien que te gustaría abrazar. ¿Quién es?",
    followUps: [
      "¿Por qué no lo estás abrazando ahora?",
      "¿Es un abrazo de saludo o de contención?",
      "¿Sabe esa persona que la extrañás?"
    ]
  },
  {
    id: 102,
    text: "¿Cómo canalizás tu enojo? ¿Y tu tristeza?",
    followUps: [
      "¿Explotás o implosionás?",
      "¿Hacés deporte o arte para soltar?",
      "¿Te cuesta mostrarte vulnerable?"
    ]
  },
  {
    id: 103,
    text: "¿Una canción que te alegre?",
    followUps: [
      "¿Te hace bailar instantáneamente?",
      "¿Te recuerda a una fiesta o viaje?",
      "¿La escuchás cuando estás mal?"
    ]
  },
  {
    id: 104,
    text: "Si pudieses volver al pasado y cambiar algo, ¿qué sería? ¿Por qué?",
    followUps: [
      "¿Es un error propio o ajeno?",
      "¿Cambiaría mucho tu presente?",
      "¿Aprenderías la lección igual?"
    ]
  },
  {
    id: 105,
    text: "¿Una decisión difícil?",
    followUps: [
      "¿La tomaste con la cabeza o el corazón?",
      "¿Te arrepentís hoy?",
      "¿Quién te ayudó a decidir?"
    ]
  },
  {
    id: 106,
    text: "Compartí un miedo absurdo que tengas.",
    followUps: [
      "¿Sabés de dónde viene?",
      "¿Te condiciona la vida diaria?",
      "¿Te reís de vos mismo/a por eso?"
    ]
  },
  {
    id: 107,
    text: "¿Un pensamiento recurrente?",
    followUps: [
      "¿Aparece antes de dormir?",
      "¿Te genera ansiedad o calma?",
      "¿Lo hablaste con alguien?"
    ]
  },
  {
    id: 108,
    text: "¿Con quién fue tu primer beso? ¿Qué sentiste?",
    followUps: [
      "¿Fue como en las películas o un desastre?",
      "¿Qué pasó con esa persona?",
      "¿Te da ternura recordarlo?"
    ]
  },
  {
    id: 109,
    text: "Si pudieras crear tu lugar en el mundo, ¿cómo sería?",
    followUps: [
      "¿Qué clima tendría?",
      "¿Quiénes vivirían ahí?",
      "¿Qué reglas no existirían?"
    ]
  },
  {
    id: 110,
    text: "La razón o la emoción. ¿Cuál de las dos tiene más peso en vos? ¿Te gusta que sea así o preferirías que fuera al revés?",
    followUps: [
      "¿Te trajo problemas ser así?",
      "¿En qué situación te traicionó tu lado dominante?",
      "¿Admirás a la gente opuesta a vos?"
    ]
  },
  {
    id: 111,
    text: "¿Qué actividad tendés a dejar para después?",
    followUps: [
      "¿Por qué te da tanta fiaca?",
      "¿Qué sentís cuando por fin la terminás?",
      "¿Sos procastinador/a crónico/a?"
    ]
  },
  {
    id: 112,
    text: "\"Dime con quién andas y te diré quién eres\". ¿Qué pensás?",
    followUps: [
      "¿Tus amigos te definen?",
      "¿Te juzgaron mal por tus compañías?",
      "¿Vos juzgás a otros por su entorno?"
    ]
  },
  {
    id: 113,
    text: "¿Te define la opinión de los/as demás?",
    followUps: [
      "¿De quién te importa más la opinión?",
      "¿Dejaste de hacer algo por el 'qué dirán'?",
      "¿Cuándo te sentiste más libre de juicio?"
    ]
  },
  {
    id: 114,
    text: "¿Cuál fue tu primera impresión de la persona que tenés a tu izquierda?",
    followUps: [
      "¿Cambió mucho esa imagen con el tiempo?",
      "¿Te sorprendió para bien?",
      "¿Se lo habías confesado antes?"
    ]
  },
  {
    id: 115,
    text: "¿Cómo reaccionás ante una actitud que te molesta?",
    followUps: [
      "¿Lo decís al momento o acumulás?",
      "¿Se te nota en la cara?",
      "¿Sos de explotar después?"
    ]
  },
  {
    id: 116,
    text: "¿Te considerás una persona prejuiciosa? ¿Por qué?",
    followUps: [
      "¿Con qué grupos solés tener prejuicios?",
      "¿Intentás deconstruir esos pensamientos?",
      "¿Alguien te sorprendió rompiendo tu prejuicio?"
    ]
  },
  {
    id: 117,
    text: "¿Qué actividades te divertían antes y ahora no?",
    followUps: [
      "¿Por qué perdiste el interés?",
      "¿Extrañás esa versión tuya?",
      "¿Qué actividad nueva las reemplazó?"
    ]
  },
  {
    id: 118,
    text: "¿Pensás más en el \"por qué\" o en el \"para qué\" de las cosas?",
    followUps: [
      "¿Buscás causas o propósitos?",
      "¿Te ayuda a resolver problemas?",
      "¿Te quedás atascado/a analizando?"
    ]
  },
  {
    id: 119,
    text: "¿Qué mandatos o presiones creés que se imponen entre varones?",
    followUps: [
      "¿Cómo te afectan a vos o a los hombres que querés?",
      "¿Ves cambios en las nuevas generaciones?",
      "¿Qué es lo más tóxico de esa masculinidad?"
    ]
  },
  {
    id: 120,
    text: "¿Qué es el \"amor propio\"?",
    followUps: [
      "¿Es egoísmo o salud mental?",
      "¿Cómo lo practicás a diario?",
      "¿Te cuesta ponerte en primer lugar?"
    ]
  },
  {
    id: 121,
    text: "¿Creés que una persona adulta puede aprender de una joven? ¿En qué sentido?",
    followUps: [
      "¿Qué te enseñó alguien más joven?",
      "¿Sentís que se perdió el respeto a los mayores?",
      "¿Qué admirás de la juventud actual?"
    ]
  },
  {
    id: 122,
    text: "¿En qué momento del día tenés tus mejores ideas?",
    followUps: [
      "¿Las anotás o se te olvidan?",
      "¿Necesitás silencio o ruido para pensar?",
      "¿Sos nocturno/a o mañanero/a?"
    ]
  },
  {
    id: 123,
    text: "¿Qué es lo primero que mirás en una persona?",
    followUps: [
      "¿Es algo físico o energético?",
      "¿Qué detalle te hace desconfiar?",
      "¿La mirada dice todo?"
    ]
  },
  {
    id: 124,
    text: "¿Cuándo fue la última vez que hiciste algo por primera vez? ¿Qué fue?",
    followUps: [
      "¿Te dio miedo antes de hacerlo?",
      "¿Lo volverías a hacer?",
      "¿Qué sentiste al superarte?"
    ]
  },
  {
    id: 125,
    text: "¿Tu libro preferido?",
    followUps: [
      "¿Te marcó una etapa de la vida?",
      "¿Lo prestás o sos celoso/a con él?",
      "¿Qué frase subrayarías hoy?"
    ]
  },
  {
    id: 126,
    text: "¿Creés en el amor a primera vista?",
    followUps: [
      "¿Te pasó alguna vez?",
      "¿Es amor o solo atracción?",
      "¿Puede durar para siempre?"
    ]
  },
  {
    id: 127,
    text: "¿Una situación vergonzosa que recuerdes?",
    followUps: [
      "¿Te reís ahora de eso?",
      "¿Quién fue testigo?",
      "¿Te gustaría borrarla de tu memoria?"
    ]
  },
  {
    id: 128,
    text: "¿Cuál era tu juego o juguete favorito de la infancia?",
    followUps: [
      "¿Jugabas solo/a o con amigos?",
      "¿Todavía lo tenés?",
      "¿Qué habilidad desarrollaste jugando a eso?"
    ]
  },
  {
    id: 129,
    text: "Tres cosas que te hacen sentir feliz.",
    followUps: [
      "¿Son cosas simples o grandes eventos?",
      "¿Con qué frecuencia las vivís?",
      "¿Dependen de vos o de otros?"
    ]
  },
  {
    id: 130,
    text: "¿Qué tres deseos pedías cuando eras niño/a? ¿Y ahora?",
    followUps: [
      "¿Alguno se cumplió?",
      "¿Perdiste la inocencia en tus pedidos?",
      "¿Pedirías algo para el mundo o para vos?"
    ]
  },
  {
    id: 131,
    text: "Si fueses de otro género, ¿qué sería lo primero que harías?",
    followUps: [
      "¿Qué curiosidad física tenés?",
      "¿Qué privilegio te gustaría probar?",
      "¿Qué dificultad te daría miedo enfrentar?"
    ]
  },
  {
    id: 132,
    text: "Si pudieses crear un feriado, ¿por qué motivo sería?",
    followUps: [
      "¿Cómo se festejaría?",
      "¿Qué estaría prohibido hacer ese día?",
      "¿Sería un día de descanso o de fiesta?"
    ]
  },
  {
    id: 133,
    text: "¿Cuál es el mejor lugar que conociste?",
    followUps: [
      "¿Volverías o preferís conocer nuevos?",
      "¿Con quién fuiste?",
      "¿Qué foto mental guardás de ahí?"
    ]
  },
  {
    id: 134,
    text: "\"Detrás de un gran hombre hay una gran mujer\". ¿Qué pensás?",
    followUps: [
      "¿Es una frase machista o realista?",
      "¿Deberían estar al lado y no detrás?",
      "¿Conocés parejas que funcionen así?"
    ]
  },
  {
    id: 135,
    text: "Nombrá a alguien que te inspire.",
    followUps: [
      "¿Es alguien famoso o cercano?",
      "¿Qué cualidad suya imitás?",
      "¿Se lo dijiste alguna vez?"
    ]
  },
  {
    id: 136,
    text: "Nombrá tres características que te definan.",
    followUps: [
      "¿Son virtudes o defectos?",
      "¿Los demás estarían de acuerdo?",
      "¿Cuál te gustaría cambiar?"
    ]
  },
  {
    id: 137,
    text: "¿Reconocés tus defectos? ¿Y tus virtudes? ¿Cuáles son?",
    followUps: [
      "¿Te cuesta más ver lo bueno o lo malo?",
      "¿Qué defecto te trae más problemas?",
      "¿Qué virtud te salvó más veces?"
    ]
  },
  {
    id: 138,
    text: "¿Qué actitudes no te gustan pero las tolerás en una persona? ¿Y cuáles valorás?",
    followUps: [
      "¿Tolerás por amor o por costumbre?",
      "¿Cuál es tu límite de tolerancia?",
      "¿Qué actitud te conquista instantáneamente?"
    ]
  },
  {
    id: 139,
    text: "Los domingos son... ¿Deprimentes o disfrutables? ¿Te gusta arrancar la semana?",
    followUps: [
      "¿Tenés algún ritual de domingo?",
      "¿Te agarra angustia a la tarde?",
      "¿Cómo encarás los lunes?"
    ]
  },
  {
    id: 140,
    text: "Un buen resultado, aunque sin esfuerzo, ¿vale menos?",
    followUps: [
      "¿Valorás más el proceso o el logro?",
      "¿Te da culpa tener suerte?",
      "¿El mérito está sobrevalorado?"
    ]
  },
  {
    id: 141,
    text: "¿Creés que existe la amistad entre el hombre y la mujer?",
    followUps: [
      "¿Tuviste experiencias que lo confirmen o nieguen?",
      "¿Siempre hay tensión sexual?",
      "¿Qué hace falta para que funcione?"
    ]
  },
  {
    id: 142,
    text: "¿Cómo definís una relación tóxica?",
    followUps: [
      "¿Estuviste en alguna?",
      "¿Qué señal de alerta identificás primero?",
      "¿Creés que se puede sanar desde adentro?"
    ]
  },
  {
    id: 143,
    text: "¿Vivir sin amor de amistad o sin amor de pareja?",
    followUps: [
      "¿Cuál te parece más indispensable?",
      "¿Podrías ser feliz solo con amigos?",
      "¿La pareja puede suplir a los amigos?"
    ]
  },
  {
    id: 144,
    text: "¿Elegimos lo que somos o nos lo impone nuestro entorno?",
    followUps: [
      "¿Cuánto de vos es rebelión y cuánto adaptación?",
      "¿Qué rasgo tuyo es puramente elección?",
      "¿Sentís que podrías haber sido muy diferente?"
    ]
  },
  {
    id: 145,
    text: "Si tuvieses que volver a elegir tu género, ¿cuál elegirías? ¿Por qué?",
    followUps: [
      "¿Te sentís cómodo/a con el tuyo?",
      "¿Qué ventaja ves en el otro?",
      "¿Es una cuestión física o social?"
    ]
  },
  {
    id: 146,
    text: "¿Hay alguna actividad que te guste tanto que te haga perder la noción del tiempo?",
    followUps: [
      "¿Cuándo fue la última vez que la hiciste?",
      "¿Es creativa o física?",
      "¿Podrías vivir de eso?"
    ]
  },
  {
    id: 147,
    text: "Cuando eras chico/a, ¿cómo te imaginabas siendo adulto/a?",
    followUps: [
      "¿Te decepcionaste o te superaste?",
      "¿Qué consejo le darías a ese niño/a?",
      "¿Qué te falta para ser esa visión?"
    ]
  },
  {
    id: 148,
    text: "¿Qué actividad extrema te gustaría hacer?",
    followUps: [
      "¿Te frena el miedo o el dinero?",
      "¿Saltarías en paracaídas?",
      "¿Buscás adrenalina en tu vida?"
    ]
  },
  {
    id: 149,
    text: "¿Un momento simple que disfrutes?",
    followUps: [
      "¿Es en soledad o compartido?",
      "¿Cuánto vale ese momento para vos?",
      "¿Lo defendés en tu agenda?"
    ]
  },
  {
    id: 150,
    text: "¿Qué momentos del día elegís para reflexionar?",
    followUps: [
      "¿Es voluntario o te asaltan los pensamientos?",
      "¿La ducha es tu lugar de ideas?",
      "¿Escribís tus reflexiones?"
    ]
  },
  {
    id: 151,
    text: "¿De qué halago estás más orgulloso/a?",
    followUps: [
      "¿Fue sobre tu físico o tu personalidad?",
      "¿Quién te lo dijo?",
      "¿Te cuesta recibir cumplidos?"
    ]
  },
  {
    id: 152,
    text: "¿Qué disfrutás de tu cotidianidad? ¿Y qué no?",
    followUps: [
      "¿Qué rutina eliminarías ya mismo?",
      "¿Encontrás magia en lo diario?",
      "¿Te aburrís fácil?"
    ]
  },
  {
    id: 153,
    text: "¿Tomás decisiones porque te sentís preparado/a o porque son las esperadas para tu edad?",
    followUps: [
      "¿Sentís el reloj social?",
      "¿Alguna vez te rebelaste contra la etapa?",
      "¿Te arrepentiste de apurarte?"
    ]
  },
  {
    id: 154,
    text: "¿Con qué tipo de personalidad solés conectar?",
    followUps: [
      "¿Son parecidos a vos o diferentes?",
      "¿Qué energía te atrae?",
      "¿Qué personalidad te repele?"
    ]
  },
  {
    id: 155,
    text: "¿Creés que todos/as tenemos un propósito en esta vida? ¿Cuál sentís que es el tuyo?",
    followUps: [
      "¿Ya lo encontraste o lo buscás?",
      "¿El propósito puede cambiar?",
      "¿Te angustia no tener uno claro?"
    ]
  },
  {
    id: 156,
    text: "Una mujer toma la iniciativa en una relación heterosexual. ¿Qué pensás?",
    followUps: [
      "¿Te parece valiente o agresivo?",
      "¿Te intimida o te gusta?",
      "¿Lo hiciste alguna vez?"
    ]
  },
  {
    id: 157,
    text: "Cuando te sentís bien con vos mismo/a, ¿con quién te gusta estar?",
    followUps: [
      "¿Compartís tu bienestar o te lo guardás?",
      "¿Hay gente que te baja la energía?",
      "¿Preferís festejar o estar tranquilo/a?"
    ]
  },
  {
    id: 158,
    text: "Si tuvieses que elegir una profesión o carrera distinta, ¿cuál sería?",
    followUps: [
      "¿Fue tu segunda opción real?",
      "¿Te animarías a cambiar ahora?",
      "¿Qué te frenó en su momento?"
    ]
  },
  {
    id: 159,
    text: "¿Qué primera impresión creés que das?",
    followUps: [
      "¿De serio/a, simpático/a o distante?",
      "¿Te esforzás por caer bien?",
      "¿Te importa esa impresión?"
    ]
  },
  {
    id: 160,
    text: "¿Te asusta el futuro? ¿Por qué?",
    followUps: [
      "¿Es por incertidumbre personal o mundial?",
      "¿Sos optimista o pesimista?",
      "¿Planificás mucho o vivís el día?"
    ]
  },
  {
    id: 161,
    text: "¿Volver al pasado o ir al futuro? ¿Por qué?",
    followUps: [
      "¿Para arreglar algo o para espiar?",
      "¿Tenés nostalgia o ansiedad?",
      "¿Qué año exacto visitarías?"
    ]
  },
  {
    id: 162,
    text: "Si fueras un objeto, ¿cuál te gustaría ser?",
    followUps: [
      "¿Serías útil o decorativo?",
      "¿Dónde estarías ubicado?",
      "¿Quién te cuidaría?"
    ]
  },
  {
    id: 163,
    text: "¿Qué fantasía te gustaría bajar a la realidad?",
    followUps: [
      "¿Es sexual, profesional o de vida?",
      "¿Qué tan lejos estás de cumplirla?",
      "¿Te da miedo que se rompa la magia?"
    ]
  },
  {
    id: 164,
    text: "¿Cuáles son tus tres placeres culposos?",
    followUps: [
      "¿Por qué te dan culpa?",
      "¿Los disfrutás en secreto?",
      "¿Alguien los comparte con vos?"
    ]
  },
  {
    id: 165,
    text: "¿Qué título le pondrías a una película sobre tu vida?",
    followUps: [
      "¿Sería un drama o una comedia?",
      "¿Quién actuaría de vos?",
      "¿Tendría final feliz?"
    ]
  },
  {
    id: 166,
    text: "Tres cosas que te gusta hacer y sentís que te salen mal.",
    followUps: [
      "¿Las seguís haciendo igual?",
      "¿Te reís de tu falta de habilidad?",
      "¿Te gustaría mejorar o no te importa?"
    ]
  },
  {
    id: 167,
    text: "¿Algo ridículo por lo que te gustaría que te paguen?",
    followUps: [
      "¿Dormir, comer, opinar?",
      "¿Serías millonario/a con eso?",
      "¿Lo harías profesionalmente?"
    ]
  },
  {
    id: 168,
    text: "¿Tres cosas que te den vergüenza ajena?",
    followUps: [
      "¿Por qué te afecta tanto lo que hace el otro?",
      "¿Te tapás la cara o mirás?",
      "¿Alguna vez vos diste vergüenza ajena?"
    ]
  },
  {
    id: 169,
    text: "Si fueses una persona famosa, ¿quién serías? ¿Por qué?",
    followUps: [
      "¿Te bancarías la falta de privacidad?",
      "¿Admirás su talento o su estilo de vida?",
      "¿Qué harías con su dinero?"
    ]
  },
  {
    id: 170,
    text: "¿Tenés alguna fuente de motivación hoy en día? ¿Cuál es o podría ser?",
    followUps: [
      "¿Es interna o externa?",
      "¿Qué hacés cuando se acaba la motivación?",
      "¿Necesitás un nuevo desafío?"
    ]
  },
  {
    id: 171,
    text: "¿Te sentís libre de tomar tus propias decisiones?",
    followUps: [
      "¿Quién condiciona tus elecciones?",
      "¿El dinero te limita la libertad?",
      "¿Cuándo te sentiste más libre?"
    ]
  },
  {
    id: 172,
    text: "¿Qué destacás de las personas que te criaron?",
    followUps: [
      "¿Su esfuerzo, su cariño o su paciencia?",
      "¿Te ves parecido/a a ellos?",
      "¿Se lo agradeciste?"
    ]
  },
  {
    id: 173,
    text: "¿Qué sensaciones tuviste en tu primer día de universidad/trabajo? Si no tuviste esas experiencias, ¿qué esperás de ellas?",
    followUps: [
      "¿Te sentiste pequeño/a o poderoso/a?",
      "¿Hiciste amigos ese día?",
      "¿Cumplió tus expectativas?"
    ]
  },
  {
    id: 174,
    text: "Si tuvieras que elegir una persona para que te acompañe en una experiencia espiritual, ¿quién sería? ¿Por qué?",
    followUps: [
      "¿Necesitás a alguien escéptico o creyente?",
      "¿Confiarías ciegamente en ella?",
      "¿Qué buscarían juntos?"
    ]
  },
  {
    id: 175,
    text: "¿Qué destacás de tus amistades?",
    followUps: [
      "¿La lealtad, la diversión o la escucha?",
      "¿Son familia elegida?",
      "¿Te sentís valorado/a por ellos?"
    ]
  },
  {
    id: 176,
    text: "¿Solés culpar a otras personas por lo que te pasa? ¿En qué situaciones?",
    followUps: [
      "¿Te cuesta asumir responsabilidad?",
      "¿Es un mecanismo de defensa?",
      "¿Cuándo te diste cuenta de esto?"
    ]
  },
  {
    id: 177,
    text: "¿Te dedicás tiempo a vos mismo/a? ¿Qué hacés en esos momentos?",
    followUps: [
      "¿Es tiempo de calidad o de scrolleo?",
      "¿Te sentís culpable si no hacés nada?",
      "¿Cómo recargás energía?"
    ]
  },
  {
    id: 178,
    text: "¿Te gusta reflexionar solo/a o con otras personas? ¿Qué temas despiertan tu curiosidad últimamente?",
    followUps: [
      "¿Te aburre la charla superficial?",
      "¿Con quién tenés las mejores charlas?",
      "¿Qué pregunta te ronda la cabeza?"
    ]
  },
  {
    id: 179,
    text: "¿Te animarías a vivir una experiencia en el extranjero? ¿Cuál?",
    followUps: [
      "¿Te irías para siempre o por un tiempo?",
      "¿Qué es lo que más extrañarías?",
      "¿Buscas aventura o estabilidad?"
    ]
  },
  {
    id: 180,
    text: "¿Te permitís mostrarte vulnerable? ¿Con quién?",
    followUps: [
      "¿Llorás frente a otros?",
      "¿Creés que la vulnerabilidad es debilidad?",
      "¿Quién te contiene cuando te quebrás?"
    ]
  },
  {
    id: 181,
    text: "Perdonar o pedir perdón. ¿Cuál te cuesta más?",
    followUps: [
      "¿Es por orgullo?",
      "¿Sentís que pedir perdón te rebaja?",
      "¿El rencor te pesa?"
    ]
  },
  {
    id: 182,
    text: "¿Creés que vamos camino a una sociedad sin estereotipos? ¿Considerás que es una señal de evolución?",
    followUps: [
      "¿Te cuesta deconstruirte a vos mismo/a?",
      "¿Qué estereotipo te parece más dañino?",
      "¿Sos optimista con el futuro social?"
    ]
  },
  {
    id: 183,
    text: "¿Se puede estar bien con los demás sin estar bien con uno/a mismo/a?",
    followUps: [
      "¿Es sostenible en el tiempo?",
      "¿Te pasó de fingir bienestar?",
      "¿Los demás notan tu malestar?"
    ]
  },
  {
    id: 184,
    text: "Esta semana me puse contento/a por ________.",
    followUps: [
      "¿Fue un logro propio o ajeno?",
      "¿Lo celebraste?",
      "¿Necesitás más de esos momentos?"
    ]
  },
  {
    id: 185,
    text: "¿Qué es el éxito para vos? ¿Evaluás diferentes formas de sentirte exitoso/a?",
    followUps: [
      "¿Es dinero, paz o vínculos?",
      "¿Te sentís exitoso/a hoy?",
      "¿Tu definición cambió con la edad?"
    ]
  },
  {
    id: 186,
    text: "¿Qué amás y la mayoría de la gente no?",
    followUps: [
      "¿Es una comida, un clima, una actividad?",
      "¿Te sentís raro/a o especial por eso?",
      "¿Defendés tu gusto a muerte?"
    ]
  },
  {
    id: 187,
    text: "¿Sos idealista o realista? ¿Cómo impacta en tu vida y en tus relaciones?",
    followUps: [
      "¿Te decepcionás seguido?",
      "¿Te dicen que bajés a tierra?",
      "¿Te sirve para soñar o para frenar?"
    ]
  },
  {
    id: 188,
    text: "¿Qué pensás sobre la demostración afectiva en público?",
    followUps: [
      "¿Te da pudor o te encanta?",
      "¿Depende de quién mire?",
      "¿Sos cariñoso/a o distante?"
    ]
  },
  {
    id: 189,
    text: "¿Qué diferencias creés que existen entre el amor y el enamoramiento?",
    followUps: [
      "¿Cuál preferís vivir?",
      "¿El enamoramiento te ciega?",
      "¿El amor real es aburrido o profundo?"
    ]
  },
  {
    id: 190,
    text: "¿Qué temas considerás tabú? ¿Por qué?",
    followUps: [
      "¿Muerte, dinero, sexo?",
      "¿En tu familia se hablaban?",
      "¿Te gustaría romper ese silencio?"
    ]
  },
  {
    id: 191,
    text: "¿Creés que hay alguna razón por la que naciste en tu familia?",
    followUps: [
      "¿Es karma o azar?",
      "¿Qué veniste a aprender de ellos?",
      "¿Qué veniste a sanar del linaje?"
    ]
  },
  {
    id: 192,
    text: "¿La educación escolar nos prepara para afrontar la adultez?",
    followUps: [
      "¿Qué materia vital faltó en tu escuela?",
      "¿Qué tuviste que aprender a los golpes?",
      "¿Sentís que hoy usás lo que aprendiste?"
    ]
  }
];

export const SPICY_QUESTIONS: Question[] = [
  {
    id: 1001,
    text: "¿Cuál es el lugar más extraño donde has tenido relaciones?",
    followUps: ["¿Te dio miedo que te descubrieran?", "¿Lo volverías a repetir en ese mismo lugar?", "¿Fue planeado o espontáneo?"]
  },
  {
    id: 1002,
    text: "¿Qué es lo más \"prohibido\" que has hecho por puro deseo?",
    followUps: ["¿Sentiste culpa después?", "¿Valió la pena el riesgo?", "¿Alguien más sabe de esto?"]
  },
  {
    id: 1003,
    text: "¿Cuál es tu fantasía sexual más recurrente cuando estás a solas?",
    followUps: ["¿Te animarías a cumplirla en la realidad?", "¿Involucra a alguien que conoces?", "¿Te da vergüenza admitirla?"]
  },
  {
    id: 1004,
    text: "¿Qué es lo primero que te hace sentir atracción física por alguien?",
    followUps: ["¿Es algo visual o de actitud?", "¿Suele ser siempre lo mismo?", "¿Te ha pasado con alguien que no esperabas?"]
  },
  {
    id: 1005,
    text: "¿Cuál es el mensaje más subido de tono que has enviado o recibido?",
    followUps: ["¿Fue correspondido?", "¿Te arrepentiste de enviarlo?", "¿Guardás ese chat?"]
  },
  {
    id: 1006,
    text: "¿Qué prenda de ropa te hace sentir más sexy de forma inmediata?",
    followUps: ["¿La usás seguido o en ocasiones especiales?", "¿Alguien te lo ha elogiado?", "¿Te cambia la actitud al usarla?"]
  },
  {
    id: 1007,
    text: "¿Has tenido alguna vez una aventura de una noche que nunca le contaste a nadie?",
    followUps: ["¿Por qué decidiste mantenerlo en secreto?", "¿Fue con alguien conocido?", "¿Te gustaría repetirlo?"]
  },
  {
    id: 1008,
    text: "¿Qué es lo que más te enciende que te hagan en el cuello?",
    followUps: ["¿Besos, mordiscos o susurros?", "¿Es tu zona más sensible?", "¿Te deja marcas?"]
  },
  {
    id: 1009,
    text: "¿Cuál es tu opinión personal sobre los tríos? ¿Te animarías o ya lo hiciste?",
    followUps: ["¿Preferirías dos hombres o dos mujeres?", "¿Te preocupa los celos?", "¿Crees que cambiaría la relación?"]
  },
  {
    id: 1010,
    text: "¿Qué importancia le das a la química sexual comparada con la conexión emocional?",
    followUps: ["¿Podrías estar con alguien solo por química?", "¿Has tenido una sin la otra?", "¿Cuál dura más tiempo?"]
  },
  {
    id: 1011,
    text: "¿Cuál ha sido tu experiencia sexual más memorable hasta ahora?",
    followUps: ["¿Qué la hizo tan especial?", "¿Fue con una pareja estable?", "¿Superó tus expectativas?"]
  },
  {
    id: 1012,
    text: "¿Qué es lo más raro que has buscado en internet relacionado al sexo?",
    followUps: ["¿Fue por curiosidad o para aprender?", "¿Borraste el historial inmediatamente?", "¿Encontraste lo que buscabas?"]
  },
  {
    id: 1013,
    text: "¿Alguna vez has tenido un encuentro en un lugar público con riesgo de que te vean?",
    followUps: ["¿El riesgo aumentó el placer?", "¿Estuvieron cerca de ser descubiertos?", "¿Quién propuso la idea?"]
  },
  {
    id: 1014,
    text: "¿Preferís ser quien lleva el ritmo o que te guíen totalmente?",
    followUps: ["¿Depende de la pareja?", "¿Te gusta cambiar de roles?", "¿Qué te hace disfrutar más?"]
  },
  {
    id: 1015,
    text: "¿Qué parte de tu cuerpo considerás que es tu mayor \"arma de seducción\"?",
    followUps: ["¿La mostrás intencionalmente?", "¿Recibís halagos por ella?", "¿Te sentís seguro/a con esa parte?"]
  },
  {
    id: 1016,
    text: "¿Cuál es el fetiche más extraño que te genera curiosidad probar?",
    followUps: ["¿Te animarías a proponerlo?", "¿Lo viste en algún lado?", "¿Te da miedo que te juzguen?"]
  },
  {
    id: 1017,
    text: "¿Has fingido alguna vez un orgasmo para no herir sentimientos o terminar rápido?",
    followUps: ["¿Se dieron cuenta?", "¿Te sentiste mal después?", "¿Fue con una pareja estable?"]
  },
  {
    id: 1018,
    text: "¿Qué palabra o frase te gusta que te digan al oído durante el acto?",
    followUps: ["¿Preferís algo romántico o sucio?", "¿Te excita el tono de voz?", "¿Lo pedís o esperás que salga?"]
  },
  {
    id: 1019,
    text: "¿Cuál es tu récord de tiempo (el más corto o el más largo) en un encuentro?",
    followUps: ["¿Fue por pasión o por aguante?", "¿Terminaron agotados?", "¿Lo considerás un logro?"]
  },
  {
    id: 1020,
    text: "¿Qué objeto cotidiano (que no sea un juguete) has usado alguna vez para darte placer?",
    followUps: ["¿Fue improvisado?", "¿Te sorprendió el resultado?", "¿Lo volverías a usar?"]
  },
  {
    id: 1021,
    text: "¿Qué es lo más atrevido que has hecho frente a una cámara?",
    followUps: ["¿Fue foto o video?", "¿Lo conservás todavía?", "¿Te dio nervios?"]
  },
  {
    id: 1022,
    text: "¿Cuál es tu posición favorita y por qué es la que más te hace disfrutar?",
    followUps: ["¿Es por la vista o la sensación?", "¿Siempre terminás así?", "¿Tu pareja la disfruta igual?"]
  },
  {
    id: 1023,
    text: "¿Has tenido alguna fantasía con alguien de este grupo?",
    followUps: ["¿Te animás a decir quién?", "¿Fue solo un pensamiento fugaz?", "¿Cambió tu forma de ver a esa persona?"]
  },
  {
    id: 1024,
    text: "¿Qué es lo más \"sucio\" que has hecho en la cama y que te encantó?",
    followUps: ["¿Te sorprendió que te gustara?", "¿Fue idea tuya?", "¿Se volvió algo habitual?"]
  },
  {
    id: 1025,
    text: "¿Sos de luces encendidas para ver todo o a oscuras para potenciar el tacto?",
    followUps: ["¿Te da inseguridad la luz?", "¿Qué te gusta ver específicamente?", "¿Cambia según el momento?"]
  },
  {
    id: 1026,
    text: "¿Cuál es el lugar de tu casa donde más te gusta hacerlo fuera de la cama?",
    followUps: ["¿Es cómodo o solo excitante?", "¿Tenés cuidado con los vecinos?", "¿Lo hacés seguido?"]
  },
  {
    id: 1027,
    text: "¿Qué es lo primero que hacés al quedarte solo/a y tener ganas de autosatisfacerte?",
    followUps: ["¿Tenés un ritual?", "¿Usás algún material visual?", "¿Te tomás tu tiempo?"]
  },
  {
    id: 1028,
    text: "¿Qué importancia le das a la lencería o a la estética en el encuentro?",
    followUps: ["¿Es para vos o para el otro?", "¿Te excita verlo en tu pareja?", "¿Es imprescindible?"]
  },
  {
    id: 1029,
    text: "¿Cuál es tu \"dirty talk\" favorito: qué palabras te encienden de verdad?",
    followUps: ["¿Te gusta decir o escuchar?", "¿Hay alguna palabra prohibida?", "¿Te sale natural?"]
  },
  {
    id: 1030,
    text: "¿Prefieres un encuentro rápido y salvaje o una sesión de horas con mucho preámbulo?",
    followUps: ["¿Depende del día?", "¿Qué te deja más satisfecho/a?", "¿Cuál tenés más seguido?"]
  },
  {
    id: 1031,
    text: "¿Qué sensación física te gusta más: besos, mordiscos o arañazos?",
    followUps: ["¿Te gusta dejar marcas?", "¿Es dolor placentero?", "¿En qué zona del cuerpo?"]
  },
  {
    id: 1032,
    text: "¿Has tenido alguna vez una experiencia sexual con alguien de tu mismo sexo?",
    followUps: ["¿Fue curiosidad o atracción?", "¿Lo repetirías?", "¿Qué descubriste de vos mismo/a?"]
  },
  {
    id: 1033,
    text: "¿Cuál es el límite o \"no\" rotundo que tenés en la intimidad?",
    followUps: ["¿Alguna vez intentaron cruzarlo?", "¿Es algo físico o moral?", "¿Podría cambiar con confianza?"]
  },
  {
    id: 1034,
    text: "¿Qué olor o perfume te despierta el deseo de forma inmediata?",
    followUps: ["¿Es una fragancia específica?", "¿Te recuerda a alguien?", "¿Lo usás como arma de seducción?"]
  },
  {
    id: 1035,
    text: "¿Cuál es la diferencia más grande entre tu personalidad diaria y cómo sos en la cama?",
    followUps: ["¿Sos más dominante o sumiso/a?", "¿Te transformás?", "¿Te sorprende ese cambio?"]
  },
  {
    id: 1036,
    text: "¿Qué técnica o movimiento aprendiste con el tiempo que sentís que es tu \"arma secreta\"?",
    followUps: ["¿Dónde lo aprendiste?", "¿Siempre funciona?", "¿Te lo han elogiado?"]
  },
  {
    id: 1037,
    text: "¿Cuál es el \"juguete\" que más te gusta usar o que más te llama la atención?",
    followUps: ["¿Lo usás solo/a o en pareja?", "¿Te da vergüenza comprarlo?", "¿Mejora mucho la experiencia?"]
  },
  {
    id: 1038,
    text: "¿Qué harías si te dieran un vale por 24 horas para cumplir cualquier deseo sin juzgarte?",
    followUps: ["¿Sería algo ilegal?", "¿Involucraría a mucha gente?", "¿Te animarías a todo?"]
  },
  {
    id: 1039,
    text: "¿Has tenido sexo en el agua (mar, pileta, ducha)? ¿Te gustó o te pareció incómodo?",
    followUps: ["¿Fue romántico o complicado?", "¿El agua ayudó o molestó?", "¿Repetirías el lugar?"]
  },
  {
    id: 1040,
    text: "¿Cuál es la parte de tu cuerpo que más te gusta que te besen?",
    followUps: ["¿Es una zona erógena común?", "¿Te hace estremecer?", "¿Lo pedís explícitamente?"]
  },
  {
    id: 1041,
    text: "¿Alguna vez te han descubierto teniendo relaciones?",
    followUps: ["¿Quién fue?", "¿Cómo reaccionaste?", "¿Te cortó el momento o siguieron?"]
  },
  {
    id: 1042,
    text: "¿Qué es lo más loco que aceptarías hacer por dinero?",
    followUps: ["¿Pondrías un precio alto?", "¿Sería algo sexual?", "¿Dónde está tu límite moral?"]
  },
  {
    id: 1043,
    text: "¿Cuál es la fantasía que cumpliste y resultó ser mejor de lo que imaginabas?",
    followUps: ["¿Superó tus expectativas?", "¿Fue difícil de concretar?", "¿Se convirtió en rutina?"]
  },
  {
    id: 1044,
    text: "¿Qué tan importante es para vos el contacto visual durante el sexo?",
    followUps: ["¿Te intimida o te excita?", "¿Lo mantenés todo el tiempo?", "¿Te dice algo sobre la conexión?"]
  },
  {
    id: 1045,
    text: "¿Cuál es el pensamiento más recurrente que tenés cuando te estás masturbando?",
    followUps: ["¿Es sobre alguien real o imaginario?", "¿Cambia seguido?", "¿Te da culpa pensarlo?"]
  },
  {
    id: 1046,
    text: "¿Qué prenda de ropa de la otra persona te parece la más difícil de resistir?",
    followUps: ["¿Te gusta quitársela?", "¿Es algo formal o casual?", "¿Por qué te atrae tanto?"]
  },
  {
    id: 1047,
    text: "¿Cuál es el lugar público más arriesgado donde has hecho \"jueguitos\" sin llegar al sexo?",
    followUps: ["¿Había gente cerca?", "¿Te puso nervioso/a?", "¿Fue excitante el riesgo?"]
  },
  {
    id: 1048,
    text: "¿Preferís que te aten o atar vos?",
    followUps: ["¿Te gusta el control o la entrega?", "¿Qué usarías para atar?", "¿Te da confianza hacerlo?"]
  },
  {
    id: 1049,
    text: "¿Cuál es tu opinión sobre el sexo anal? ¿Curiosidad, placer o rechazo?",
    followUps: ["¿Lo has probado?", "¿Es un tabú para vos?", "¿Crees que requiere mucha preparación?"]
  },
  {
    id: 1050,
    text: "¿Qué es lo último que pensás antes de dormir cuando estás excitado/a?",
    followUps: ["¿Te ayuda a dormir?", "¿Planeás el próximo encuentro?", "¿Es un recuerdo o una fantasía?"]
  },
  {
    id: 1051,
    text: "¿Cuál es la situación más ridícula que has vivido estando desnudo/a?",
    followUps: ["¿Fue en público o privado?", "¿Te reíste en el momento?", "¿Alguien más te vio?"]
  },
  {
    id: 1052,
    text: "¿Qué es lo más vergonzoso que te ha pasado en una primera cita?",
    followUps: ["¿Querías que la tierra te tragara?", "¿Hubo segunda cita?", "¿Ahora te parece gracioso?"]
  },
  {
    id: 1053,
    text: "Si tuvieras que describir tu vida sexual con el título de una película, ¿cuál sería?",
    followUps: ["¿Es comedia, drama o acción?", "¿Por qué elegiste ese título?", "¿Te gustaría cambiar el género?"]
  },
  {
    id: 1054,
    text: "¿Cuál es el hábito más extraño que tenés cuando nadie te ve en tu casa?",
    followUps: ["¿Te daría vergüenza que lo sepan?", "¿Desde cuándo lo hacés?", "¿Te relaja hacerlo?"]
  },
  {
    id: 1055,
    text: "¿Alguna vez te has olvidado el nombre de la persona con la que estabas intimando?",
    followUps: ["¿Cómo lo disimulaste?", "¿Se dio cuenta?", "¿Fue incómodo?"]
  },
  {
    id: 1056,
    text: "¿Cuál es la mentira más creativa que has dicho para zafar de una cita o encuentro?",
    followUps: ["¿Te creyeron?", "¿Te sentiste mal por mentir?", "¿Era alguien muy insistente?"]
  },
  {
    id: 1057,
    text: "¿Qué es lo primero que harías si te despertaras siendo del sexo opuesto por 24 horas?",
    followUps: ["¿Experimentarías con tu cuerpo?", "¿Saldrías a la calle?", "¿Buscarías a alguien?"]
  },
  {
    id: 1058,
    text: "¿Cuál es tu \"permitido\" famoso por el que dejarías todo?",
    followUps: ["¿Es un actor/actriz o músico?", "¿Tu pareja lo aceptaría?", "¿Fantaseás con eso?"]
  },
  {
    id: 1059,
    text: "¿Qué canción te cortaría el mambo si empezara a sonar en medio del sexo?",
    followUps: ["¿Te ha pasado?", "¿Te reirías o te enojarías?", "¿Apagarías la música?"]
  },
  {
    id: 1060,
    text: "¿Cuál ha sido tu peor experiencia usando una app de citas?",
    followUps: ["¿La persona era diferente a las fotos?", "¿Fue una charla incómoda?", "¿Te fuiste antes de tiempo?"]
  },
  {
    id: 1061,
    text: "¿Qué es lo más loco que has hecho por seguir un impulso del momento?",
    followUps: ["¿Te arrepentiste después?", "¿Fue una buena anécdota?", "¿Te metiste en problemas?"]
  },
  {
    id: 1062,
    text: "¿Cuál es el apodo más ridículo que te han puesto en la intimidad?",
    followUps: ["¿Te gustaba o lo odiabas?", "¿Duró mucho tiempo?", "¿Qué significaba?"]
  },
  {
    id: 1063,
    text: "Si pudieras borrar una experiencia de tu pasado para repetirla de nuevo, ¿cuál elegirías?",
    followUps: ["¿Fue tu primera vez?", "¿Un viaje especial?", "¿Un momento romántico?"]
  },
  {
    id: 1064,
    text: "¿Cuál es el objeto más raro que tenés guardado en tu mesa de luz?",
    followUps: ["¿Tiene alguna utilidad?", "¿Lo escondés cuando vienen visitas?", "¿Por qué lo guardás ahí?"]
  },
  {
    id: 1065,
    text: "¿Qué harías si por error le enviás una foto \"hot\" a un familiar?",
    followUps: ["¿Dirías que fue un virus?", "¿Te mudarías de país?", "¿Cómo los mirarías a la cara?"]
  },
  {
    id: 1066,
    text: "¿Cuál es tu búsqueda de Google más comprometedora de la última semana?",
    followUps: ["¿Te morirías si alguien la ve?", "¿Era una duda real?", "¿Usaste modo incógnito?"]
  },
  {
    id: 1067,
    text: "Si fueras un sabor de helado, ¿cuál serías según tu personalidad?",
    followUps: ["¿Dulce, ácido o exótico?", "¿Le gustarías a todos?", "¿Te derretirías fácil?"]
  },
  {
    id: 1068,
    text: "¿Cuál es el \"guilty pleasure\" (gusto culposo) que te da vergüenza admitir?",
    followUps: ["¿Es música, comida o TV?", "¿Lo disfrutás en secreto?", "¿Tus amigos te juzgarían?"]
  },
  {
    id: 1069,
    text: "¿Quién de este grupo crees que terminaría preso primero por una pavada?",
    followUps: ["¿Por qué razón sería?", "¿Pagarías su fianza?", "¿Te sorprendería?"]
  },
  {
    id: 1070,
    text: "Si pudieras tener un superpoder para usar solo en la cama, ¿cuál sería?",
    followUps: ["¿Flexibilidad, resistencia o lectura de mente?", "¿Lo usarías para el bien?", "¿Sería trampa?"]
  },
  {
    id: 1071,
    text: "¿Cuál es la ley más absurda que pondrías si fueras presidente?",
    followUps: ["¿Beneficiaría a todos?", "¿Sería obligatoria?", "¿Te odiarían por eso?"]
  },
  {
    id: 1072,
    text: "Si mañana ganaras la lotería, ¿qué es lo primero \"poco ético\" que comprarías?",
    followUps: ["¿Sería un capricho egoísta?", "¿Afectaría a alguien más?", "¿Lo contarías?"]
  },
  {
    id: 1073,
    text: "¿Cuál es tu anécdota de \"trágame tierra\" favorita?",
    followUps: ["¿Te pasó frente a mucha gente?", "¿Ya la superaste?", "¿Te ríes al contarla?"]
  },
  {
    id: 1074,
    text: "Si tuvieras que elegir una canción para que suene cada vez que entras a una habitación, ¿cuál sería?",
    followUps: ["¿Sería épica o graciosa?", "¿Te cansarías de ella?", "¿Qué diría de vos?"]
  },
  {
    id: 1075,
    text: "¿Qué animal serías según tu forma de seducir?",
    followUps: ["¿Un pavo real, un gato o un león?", "¿Sos directo o sutil?", "¿Te funciona esa estrategia?"]
  },
  {
    id: 1076,
    text: "¿Cuál es el objeto más inútil que has comprado y todavía guardás?",
    followUps: ["¿Por qué lo compraste?", "¿Te da pena tirarlo?", "¿Alguna vez lo usaste?"]
  },
  {
    id: 1077,
    text: "Si tuvieras que sobrevivir a un apocalipsis zombie, ¿qué tarea harías mejor?",
    followUps: ["¿Líder, cocinero o carnada?", "¿Cuánto durarías?", "¿Traicionarías para sobrevivir?"]
  },
  {
    id: 1078,
    text: "¿Cuál es el mensaje de texto más vergonzoso que mandaste por error?",
    followUps: ["¿A quién le llegó?", "¿Pudiste arreglarlo?", "¿Te bloquearon?"]
  },
  {
    id: 1079,
    text: "¿Qué harías si te encontrás a tu ex en una app de citas? ¿Le das like o swipe?",
    followUps: ["¿Sería por curiosidad o rencor?", "¿Te gustaría ver si hay match?", "¿Qué pensarías si te da like?"]
  },
  {
    id: 1080,
    text: "¿Cuál es tu técnica para fingir que estás escuchando cuando en realidad estás en otra?",
    followUps: ["¿Asentís o hacés preguntas genéricas?", "¿Te han descubierto?", "¿Te pasa seguido?"]
  },
  {
    id: 1081,
    text: "Si pudieras hablar con un animal, ¿cuál elegirías y qué le preguntarías?",
    followUps: ["¿Sería tu mascota?", "¿Esperás una respuesta profunda?", "¿Crees que te entendería?"]
  },
  {
    id: 1082,
    text: "¿Cuál es el baile más ridículo que hacés cuando estás solo/a y feliz?",
    followUps: ["¿Tenés una coreografía?", "¿Te filmarías haciéndolo?", "¿Te da energía?"]
  },
  {
    id: 1083,
    text: "¿Qué es lo más extraño que has comido por compromiso?",
    followUps: ["¿Te dio asco?", "¿Pudiste disimular?", "¿Quién te lo ofreció?"]
  },
  {
    id: 1084,
    text: "Si tuvieras que vivir en una película por una semana, ¿cuál elegirías?",
    followUps: ["¿Serías el protagonista?", "¿Es un mundo peligroso?", "¿Qué harías allí?"]
  },
  {
    id: 1085,
    text: "¿Cuál es el talento oculto más inútil que tenés?",
    followUps: ["¿Se lo mostrás a la gente?", "¿Te llevó tiempo aprenderlo?", "¿Te sirve para algo?"]
  },
  {
    id: 1086,
    text: "¿Qué harías si te quedás encerrado/a en un ascensor con tu crush?",
    followUps: ["¿Entrarías en pánico o aprovecharías?", "¿De qué hablarías?", "¿Sería el destino?"]
  },
  {
    id: 1087,
    text: "¿Cuál es el disfraz más ridículo que has usado?",
    followUps: ["¿Fue para una fiesta?", "¿Te sentías cómodo/a?", "¿Hay fotos de eso?"]
  },
  {
    id: 1088,
    text: "Si pudieras viajar al pasado solo para espiar a alguien, ¿a quién elegirías?",
    followUps: ["¿Sería alguien famoso o conocido?", "¿Qué querrías descubrir?", "¿Cambiaría tu opinión?"]
  },
  {
    id: 1089,
    text: "¿Cuál es tu mayor \"maña\" o TOC que nadie conoce?",
    followUps: ["¿Te pone nervioso/a si no lo hacés?", "¿Afecta tu convivencia?", "¿Trataste de cambiarlo?"]
  },
  {
    id: 1090,
    text: "¿Qué es lo que más te hace reír en el momento menos oportuno?",
    followUps: ["¿Te ha pasado en un funeral o reunión seria?", "¿Te tenés que morder la lengua?", "¿Contagiás a otros?"]
  },
  {
    id: 1091,
    text: "¿Cuál es el fondo de pantalla de tu celular ahora mismo?",
    followUps: ["¿Es una foto tuya, de alguien más o un paisaje?", "¿Lo cambiás seguido?", "¿Tiene un significado especial?"]
  },
  {
    id: 1092,
    text: "¿Qué harías si te encontrás un maletín lleno de dólares en la calle?",
    followUps: ["¿Lo devolverías o te lo quedarías?", "¿Te daría miedo?", "¿En qué gastarías el primer billete?"]
  },
  {
    id: 1093,
    text: "¿Cuál es la frase que más repetís cuando estás borracho/a?",
    followUps: ["¿Es algo cariñoso o agresivo?", "¿Te lo cuentan al día siguiente?", "¿Te da vergüenza?"]
  },
  {
    id: 1094,
    text: "Si pudieras cambiar tu nombre, ¿cuál te pondrías?",
    followUps: ["¿Sería algo exótico?", "¿Odias tu nombre actual?", "¿Te pegarían ese nombre?"]
  },
  {
    id: 1095,
    text: "¿Qué es lo que más te molesta que haga la gente en el cine?",
    followUps: ["¿El ruido, el celular o que hablen?", "¿Lo decís o te callás?", "¿Te arruina la película?"]
  },
  {
    id: 1096,
    text: "¿Cuál es tu placer visual favorito (videos de limpieza, cocina, etc)?",
    followUps: ["¿Te relaja verlo?", "¿Podés estar horas mirando?", "¿Es tu terapia?"]
  },
  {
    id: 1097,
    text: "Si fueras un postre, ¿cuál serías?",
    followUps: ["¿Empalagoso, ligero o con sorpresa?", "¿Por qué te representa?", "¿Le gustarías a todos?"]
  },
  {
    id: 1098,
    text: "¿Qué es lo más infantil que seguís haciendo a tu edad?",
    followUps: ["¿Ver dibujos animados, dormir con peluche?", "¿Te hace feliz?", "¿Lo ocultás?"]
  },
  {
    id: 1099,
    text: "¿Cuál es la red social en la que pasás más tiempo perdiendo el tiempo?",
    followUps: ["¿Te sentís culpable después?", "¿Qué contenido consumís?", "¿Podrías borrarla?"]
  },
  {
    id: 1100,
    text: "¿Qué harías si te despertás y sos invisible?",
    followUps: ["¿Espiarías a alguien?", "¿Harías bromas?", "¿Te asustarías?"]
  },
  {
    id: 1101,
    text: "¿Qué es lo que más te cuesta comunicar cuando estás conociendo a alguien?",
    followUps: ["¿Tus miedos o tus expectativas?", "¿Por qué te bloqueás?", "¿Esperás que lo adivinen?"]
  },
  {
    id: 1102,
    text: "¿Cuál es el miedo más grande que tenés respecto a la intimidad emocional?",
    followUps: ["¿Ser lastimado/a o perder tu libertad?", "¿Viene de una experiencia pasada?", "¿Te impide avanzar?"]
  },
  {
    id: 1103,
    text: "¿Qué parte de tu cuerpo te ha costado más aceptar y hoy amás?",
    followUps: ["¿Fue un proceso largo?", "¿Qué te hizo cambiar de opinión?", "¿Ahora la mostrás con orgullo?"]
  },
  {
    id: 1104,
    text: "¿Cómo te sentís después de un encuentro casual: vacío/a o renovado/a?",
    followUps: ["¿Depende de la persona?", "¿Buscás conexión o solo placer?", "¿Te arrepentís a veces?"]
  },
  {
    id: 1105,
    text: "¿Qué es lo que realmente te hace sentir conectado/a con otra persona?",
    followUps: ["¿Una charla profunda o el silencio compartido?", "¿Es algo instantáneo?", "¿Pasa pocas veces?"]
  },
  {
    id: 1106,
    text: "¿Cuál ha sido la lección más dolorosa que has aprendido en el amor?",
    followUps: ["¿Cambió tu forma de amar?", "¿Valió la pena el dolor?", "¿Se la enseñarías a alguien más?"]
  },
  {
    id: 1107,
    text: "¿Qué importancia le das al post-sexo (charla, mimos, dormir juntos)?",
    followUps: ["¿Es vital para vos?", "¿Te sentís usado/a si no hay nada?", "¿Te gusta tu espacio?"]
  },
  {
    id: 1108,
    text: "¿Te considerás una persona fácil de enamorar o sos más racional?",
    followUps: ["¿Te entregás rápido?", "¿Analizás todo antes?", "¿Sufrís más por eso?"]
  },
  {
    id: 1109,
    text: "¿Qué cualidad buscás hoy en alguien para que te resulte realmente interesante?",
    followUps: ["¿Inteligencia, humor o bondad?", "¿Cambió con los años?", "¿Es difícil de encontrar?"]
  },
  {
    id: 1110,
    text: "¿Cuál es el sueño que todavía no le has contado a nadie en este grupo?",
    followUps: ["¿Te da miedo que no se cumpla?", "¿Es muy personal?", "¿Por qué lo guardás?"]
  },
  {
    id: 1111,
    text: "¿Qué es lo que más agradecés de tu situación sentimental o personal actual?",
    followUps: ["¿La paz, la compañía o la libertad?", "¿Te costó llegar ahí?", "¿Lo valorás a diario?"]
  },
  {
    id: 1112,
    text: "¿Cómo manejás el rechazo cuando alguien no tiene interés en vos?",
    followUps: ["¿Te afecta el autoestima?", "¿Lo aceptás rápido?", "¿Insistís un poco?"]
  },
  {
    id: 1113,
    text: "¿Qué significa para vos \"vivir tu sexualidad con libertad\"?",
    followUps: ["¿Sentís que lo hacés?", "¿Qué prejuicios tuviste que romper?", "¿Te importa la opinión ajena?"]
  },
  {
    id: 1114,
    text: "¿Cuál es el recuerdo de tu infancia que más atesorás hoy?",
    followUps: ["¿Quién estaba con vos?", "¿Te da nostalgia?", "¿Te formó como persona?"]
  },
  {
    id: 1115,
    text: "¿Qué es lo que más te hace sentir orgulloso/a de quién sos ahora?",
    followUps: ["¿Tu resiliencia, tus logros o tu bondad?", "¿Te lo reconocés a vos mismo/a?", "¿Alguien te ayudó?"]
  },
  {
    id: 1116,
    text: "¿Qué herida de tu pasado sentís que todavía está cicatrizando?",
    followUps: ["¿Es reciente?", "¿Estás haciendo algo para sanar?", "¿Te define hoy?"]
  },
  {
    id: 1117,
    text: "¿Cuándo fue la última vez que lloraste y qué lo provocó?",
    followUps: ["¿Fue de tristeza o emoción?", "¿Estabas solo/a?", "¿Te alivió?"]
  },
  {
    id: 1118,
    text: "¿Qué es lo que más te asusta de envejecer?",
    followUps: ["¿La soledad, el cuerpo o la mente?", "¿Lo pensás seguido?", "¿Cómo te preparás?"]
  },
  {
    id: 1119,
    text: "¿Cuál es el lenguaje del amor que más te hace sentir valorado/a?",
    followUps: ["¿Palabras, actos o contacto físico?", "¿Lo comunicás a tu pareja?", "¿Te cuesta darlo?"]
  },
  {
    id: 1120,
    text: "¿Qué significa \"lealtad\" para vos en un vínculo?",
    followUps: ["¿Es fidelidad o apoyo incondicional?", "¿La has roto alguna vez?", "¿Es lo más importante?"]
  },
  {
    id: 1121,
    text: "Si pudieras pedir perdón a alguien de tu pasado, ¿a quién sería?",
    followUps: ["¿Por qué no lo hiciste antes?", "¿Te perdonarían?", "¿Te quitaría un peso?"]
  },
  {
    id: 1122,
    text: "¿Qué parte de tu personalidad te cuesta más aceptar?",
    followUps: ["¿Es algo que lastima a otros?", "¿Intentás cambiarlo?", "¿Es tu sombra?"]
  },
  {
    id: 1123,
    text: "¿Cómo manejás la vulnerabilidad: te abrís fácil o te ponés una armadura?",
    followUps: ["¿Te han lastimado por abrirte?", "¿Cuándo bajás la guardia?", "¿Te sentís débil o fuerte al hacerlo?"]
  },
  {
    id: 1124,
    text: "Si hoy fuera el último día de tu vida, ¿te irías en paz con tus decisiones?",
    followUps: ["¿Qué te faltó hacer?", "¿Te arrepentís de mucho?", "¿A quién llamarías?"]
  },
  {
    id: 1125,
    text: "¿Qué es lo que más te hace sentir \"en casa\" cuando estás con alguien?",
    followUps: ["¿La confianza, el olor o la risa?", "¿Lo sentís con mucha gente?", "¿Es difícil de encontrar?"]
  },
  {
    id: 1126,
    text: "¿Sentís que sos prioridad en tu propia vida hoy?",
    followUps: ["¿Te postergás por otros?", "¿Cuándo empezaste a priorizarte?", "¿Te sentís egoísta?"]
  },
  {
    id: 1127,
    text: "¿Qué es lo que más te dolió que alguien te dijera alguna vez?",
    followUps: ["¿Fue verdad?", "¿Pudiste olvidarlo?", "¿Cambió tu relación con esa persona?"]
  },
  {
    id: 1128,
    text: "¿Qué cualidad ajena te calma cuando estás muy estresado/a?",
    followUps: ["¿La escucha, el silencio o el humor?", "¿Buscás a esa persona?", "¿Funciona siempre?"]
  },
  {
    id: 1129,
    text: "¿Qué es lo que más te gusta de la persona que tenés a tu derecha?",
    followUps: ["¿Se lo decís seguido?", "¿Es algo físico o de personalidad?", "¿Te inspira?"]
  },
  {
    id: 1130,
    text: "¿Cuál es el mayor sacrificio que has hecho por otra persona?",
    followUps: ["¿Valió la pena?", "¿Te lo agradecieron?", "¿Lo volverías a hacer?"]
  },
  {
    id: 1131,
    text: "¿Qué es lo que más te hace sentir inseguro/a en una relación?",
    followUps: ["¿El silencio, la distancia o los celos?", "¿Lo hablás?", "¿Es un miedo real o imaginario?"]
  },
  {
    id: 1132,
    text: "¿Cuál es el valor que nunca negociarías con nadie?",
    followUps: ["¿Honestidad, respeto o libertad?", "¿Te ha costado relaciones?", "¿Es tu base?"]
  },
  {
    id: 1133,
    text: "¿Qué es lo que más te gusta de estar solo/a?",
    followUps: ["¿El silencio o hacer lo que querés?", "¿Te aburrís a veces?", "¿Es necesario para vos?"]
  },
  {
    id: 1134,
    text: "¿Cuál es el momento de tu vida en el que te sentiste más valiente?",
    followUps: ["¿Tuviste miedo?", "¿Fue una decisión difícil?", "¿Te cambió la vida?"]
  },
  {
    id: 1135,
    text: "¿Cómo te gustaría que te recordaran cuando ya no estés?",
    followUps: ["¿Por tu humor, tu amor o tus logros?", "¿Estás viviendo así hoy?", "¿Te importa el legado?"]
  },
  {
    id: 1136,
    text: "¿Qué es lo que más te hace reír de vos mismo/a?",
    followUps: ["¿Tus torpezas o tus miedos?", "¿Te tomás con humor tus errores?", "¿Es sano?"]
  },
  {
    id: 1137,
    text: "¿Cuál es tu mayor arrepentimiento hasta el día de hoy?",
    followUps: ["¿Se puede arreglar?", "¿Aprendiste de eso?", "¿Te pesa todavía?"]
  },
  {
    id: 1138,
    text: "¿Qué es lo que más te motiva a levantarte cada mañana?",
    followUps: ["¿Un proyecto, una persona o la rutina?", "¿Te cuesta encontrar motivación?", "¿Es suficiente?"]
  },
  {
    id: 1139,
    text: "¿Qué crees que es lo más difícil de convivir con vos?",
    followUps: ["¿Tu orden, tu humor o tus manías?", "¿Te lo han dicho?", "¿Intentás mejorarlo?"]
  },
  {
    id: 1140,
    text: "¿Cuál es el cumplido que más te gusta recibir?",
    followUps: ["¿Sobre tu inteligencia o tu físico?", "¿Te lo creés?", "¿Te da vergüenza?"]
  },
  {
    id: 1141,
    text: "¿Qué es lo que más te ha hecho cambiar de opinión en el último año?",
    followUps: ["¿Una experiencia o una persona?", "¿Eras muy terco/a antes?", "¿Te abrió la mente?"]
  },
  {
    id: 1142,
    text: "¿A qué persona de tu vida le confiás absolutamente todo?",
    followUps: ["¿Es familia o amigo/a?", "¿Nunca te falló?", "¿Sabe tus secretos más oscuros?"]
  },
  {
    id: 1143,
    text: "¿Cómo definirías la palabra \"felicidad\" en este momento de tu vida?",
    followUps: ["¿Es tranquilidad o euforia?", "¿La tenés?", "¿Es lo que esperabas?"]
  },
  {
    id: 1144,
    text: "¿Qué es lo más valioso que has aprendido de un fracaso?",
    followUps: ["¿Te hizo más fuerte?", "¿Volviste a intentar?", "¿Agradecés que pasó?"]
  },
  {
    id: 1145,
    text: "¿Cuál es la mayor locura que harías por un amigo?",
    followUps: ["¿Mentirías por él/ella?", "¿Le prestarías dinero?", "¿Lo acompañarías al fin del mundo?"]
  },
  {
    id: 1146,
    text: "¿Qué es lo que más te hace sentir libre?",
    followUps: ["¿Viajar, crear o estar solo/a?", "¿Te sentís atado/a a algo?", "¿Lo buscás seguido?"]
  },
  {
    id: 1147,
    text: "¿Qué pregunta te gustaría que te hicieran más seguido?",
    followUps: ["¿Nadie te la hace?", "¿Te gustaría desahogarte?", "¿Qué responderías?"]
  },
  {
    id: 1148,
    text: "¿Cómo te llevás con tu pasado: lo aceptás o lo evitás?",
    followUps: ["¿Te perseguís con errores?", "¿Estás en paz?", "¿Mirás mucho atrás?"]
  },
  {
    id: 1149,
    text: "¿Qué es lo que más te atrae de la mente de una persona?",
    followUps: ["¿Su cultura, su humor o su rapidez?", "¿Te enamora la inteligencia?", "¿Es más importante que el físico?"]
  },
  {
    id: 1150,
    text: "¿Cuál es tu mayor meta para este año?",
    followUps: ["¿Estás cerca de lograrla?", "¿Depende solo de vos?", "¿Te presiona?"]
  },
  {
    id: 1151,
    text: "¿Crees que es posible separar el sexo del amor al 100%?",
    followUps: ["¿Lo has logrado?", "¿Siempre alguien sale lastimado?", "¿Es cuestión de madurez?"]
  },
  {
    id: 1152,
    text: "¿Cuál es tu opinión sobre la monogamia en los tiempos que corren?",
    followUps: ["¿Es natural o impuesta?", "¿Te funciona a vos?", "¿Crees que está en crisis?"]
  },
  {
    id: 1153,
    text: "¿Qué es para vos una \"red flag\" (bandera roja) inmediata en una primera cita?",
    followUps: ["¿Cómo trata a los demás o cómo habla de sí mismo?", "¿Te vas enseguida?", "¿Soles ignorarlas?"]
  },
  {
    id: 1154,
    text: "¿Crees en las segundas oportunidades después de una infidelidad?",
    followUps: ["¿Perdonarías vos?", "¿La confianza se recupera?", "¿Depende del tipo de infidelidad?"]
  },
  {
    id: 1155,
    text: "¿Qué opinás sobre el ghosting? ¿Lo has hecho alguna vez?",
    followUps: ["¿Es cobardía o autocuidado?", "¿Te lo han hecho?", "¿Cómo te sentiste?"]
  },
  {
    id: 1156,
    text: "¿Cuál es el límite que nunca dejarías que alguien cruce en una relación?",
    followUps: ["¿El falta de respeto o el control?", "¿Lo dejaste claro?", "¿Lo has perdonado antes?"]
  },
  {
    id: 1157,
    text: "¿Crees que el tamaño realmente importa o es un mito social?",
    followUps: ["¿Importa más la técnica?", "¿Te ha condicionado?", "¿Se habla demasiado de eso?"]
  },
  {
    id: 1158,
    text: "¿Qué pensás de las relaciones a distancia: funcionan o son perder el tiempo?",
    followUps: ["¿Tendrías una?", "¿Necesitás el contacto físico?", "¿La confianza es la clave?"]
  },
  {
    id: 1159,
    text: "¿Cuál es el mejor consejo sobre sexo o amor que te han dado?",
    followUps: ["¿Lo aplicaste?", "¿Quién te lo dio?", "¿Te cambió la perspectiva?"]
  },
  {
    id: 1160,
    text: "¿Crees que los amigos con derechos siempre terminan con alguien enamorado?",
    followUps: ["¿Te ha pasado?", "¿Se puede mantener el equilibrio?", "¿Alguien siempre quiere más?"]
  },
  {
    id: 1161,
    text: "¿Qué valor le dan a la exclusividad en la etapa de \"conocerse\"?",
    followUps: ["¿La asumís o la hablás?", "¿Te molesta si ven a otros?", "¿Cuándo se vuelve serio?"]
  },
  {
    id: 1162,
    text: "¿Qué opinás sobre abrir la pareja después de muchos años de relación?",
    followUps: ["¿Salva la relación o la termina?", "¿Lo propondrías?", "¿Te daría celos?"]
  },
  {
    id: 1163,
    text: "¿Crees que el porno ayuda o arruina la percepción de la realidad sexual?",
    followUps: ["¿Crea expectativas falsas?", "¿Se puede disfrutar sin comparar?", "¿Educa o desinforma?"]
  },
  {
    id: 1164,
    text: "¿Qué es lo que hace que una persona sea \"inolvidable\" para vos?",
    followUps: ["¿Cómo te hizo sentir?", "¿La química o la charla?", "¿Todavía pensás en ella?"]
  },
  {
    id: 1165,
    text: "¿Crees que el primer amor marca el resto de tus relaciones para siempre?",
    followUps: ["¿Buscás patrones similares?", "¿Lo superaste?", "¿Fue una buena experiencia?"]
  },
  {
    id: 1166,
    text: "¿Cuál es tu opinión sobre compartir las contraseñas del celular en pareja?",
    followUps: ["¿Es confianza o control?", "¿Lo harías?", "¿Tenés algo que ocultar?"]
  },
  {
    id: 1167,
    text: "¿Crees que los opuestos se atraen o que solo los parecidos duran?",
    followUps: ["¿Qué te ha funcionado a vos?", "¿El conflicto cansa?", "¿Se complementan?"]
  },
  {
    id: 1168,
    text: "¿Qué opinás sobre vivir juntos antes de cualquier compromiso formal?",
    followUps: ["¿Es la prueba de fuego?", "¿Mata la magia?", "¿Es necesario para conocerse?"]
  },
  {
    id: 1169,
    text: "¿Quién crees que debe dar el primer paso hoy en día?",
    followUps: ["¿Sigue habiendo roles de género?", "¿Te gusta encarar o que te encaren?", "¿Se pierde espontaneidad?"]
  },
  {
    id: 1170,
    text: "¿Se puede estar enamorado de dos personas al mismo tiempo?",
    followUps: ["¿Es amor o deseo?", "¿Te ha pasado?", "¿Qué harías en esa situación?"]
  },
  {
    id: 1171,
    text: "¿Qué opinás de las personas que mantienen contacto frecuente con sus ex?",
    followUps: ["¿Es madurez o enganche?", "¿Te molestaría en tu pareja?", "¿Sos amigo/a de tus ex?"]
  },
  {
    id: 1172,
    text: "¿Qué es más importante: la química sexual o la estabilidad económica?",
    followUps: ["¿El amor paga las cuentas?", "¿Se puede vivir sin pasión?", "¿Qué priorizás hoy?"]
  },
  {
    id: 1173,
    text: "¿Crees en las almas gemelas o en que el amor se construye?",
    followUps: ["¿El destino existe?", "¿Requiere trabajo diario?", "¿Sentiste esa conexión mágica?"]
  },
  {
    id: 1174,
    text: "¿Hasta dónde llega la responsabilidad afectiva en algo casual?",
    followUps: ["¿Hay que aclarar todo?", "¿Se puede desaparecer sin más?", "¿Cuidás al otro aunque sea breve?"]
  },
  {
    id: 1175,
    text: "¿Qué pensás de la diferencia de edad en las parejas? ¿Importa?",
    followUps: ["¿El amor no tiene edad?", "¿Pesan las etapas de vida?", "¿Te ha pasado?"]
  },
  {
    id: 1176,
    text: "¿Crees que el matrimonio es un contrato necesario o algo obsoleto?",
    followUps: ["¿Te casarías?", "¿Cambia algo el papel?", "¿Es solo social?"]
  },
  {
    id: 1177,
    text: "¿Qué importancia tiene la opinión de tus amigos sobre tu pareja?",
    followUps: ["¿Si no les gusta, la dejás?", "¿Ven cosas que vos no?", "¿Es tu decisión final?"]
  },
  {
    id: 1178,
    text: "¿Es posible perdonar una mentira piadosa en la relación?",
    followUps: ["¿Daña la confianza igual?", "¿Depende de la intención?", "¿Preferís la verdad dolorosa?"]
  },
  {
    id: 1179,
    text: "¿Qué es lo que más te hace desconfiar de alguien que recién conocés?",
    followUps: ["¿Inconsistencias o intuición?", "¿Te cuesta confiar?", "¿Das el beneficio de la duda?"]
  },
  {
    id: 1180,
    text: "¿Crees que la convivencia mata el deseo sexual?",
    followUps: ["¿La rutina es enemiga?", "¿Cómo se mantiene la chispa?", "¿Es inevitable?"]
  },
  {
    id: 1181,
    text: "¿Qué opinás del poliamor: es libertad o falta de compromiso?",
    followUps: ["¿Podrías practicarlo?", "¿Requiere mucha gestión emocional?", "¿Es el futuro?"]
  },
  {
    id: 1182,
    text: "¿Qué valor le das a los detalles pequeños frente a los grandes gestos?",
    followUps: ["¿Un mensaje o un regalo caro?", "¿Qué te enamora más?", "¿La constancia importa?"]
  },
  {
    id: 1183,
    text: "¿Crees que es mejor saber todo sobre el pasado de tu pareja o ignorarlo?",
    followUps: ["¿El pasado condena?", "¿Te da celos retroactivos?", "¿Ayuda a entender?"]
  },
  {
    id: 1184,
    text: "¿Cuál es el límite entre \"ser honesto\" y \"ser cruel\" en una relación?",
    followUps: ["¿Hay que decir todo sin filtro?", "¿La empatía va primero?", "¿Te han herido con honestidad?"]
  },
  {
    id: 1185,
    text: "¿Qué opinás sobre tener hijos en la sociedad actual?",
    followUps: ["¿Es un deseo o mandato?", "¿Te preocupa el mundo?", "¿Te ves como padre/madre?"]
  },
  {
    id: 1186,
    text: "¿Crees que la tecnología alejó o acercó a las personas en el amor?",
    followUps: ["¿Hay demasiadas opciones?", "¿Facilita o complica?", "¿Se perdió el romance?"]
  },
  {
    id: 1187,
    text: "¿Qué importancia tiene para vos que tu pareja sea amiga de tu familia?",
    followUps: ["¿Es requisito excluyente?", "¿Pueden ir por carriles separados?", "¿Te alivia que se lleven bien?"]
  },
  {
    id: 1188,
    text: "¿Crees que el amor lo puede todo o hay cosas que el amor no cura?",
    followUps: ["¿La incompatibilidad gana?", "¿El amor alcanza?", "¿Has dejado de amar por realidad?"]
  },
  {
    id: 1189,
    text: "¿Qué opinás de los celos: son protección o inseguridad?",
    followUps: ["¿Un poco es sano?", "¿Te sentís halagado/a?", "¿Te asfixian?"]
  },
  {
    id: 1190,
    text: "¿Crees que la primera impresión siempre es la que cuenta?",
    followUps: ["¿Has cambiado de opinión?", "¿Te dejás llevar por el instinto?", "¿Das segundas oportunidades?"]
  },
  {
    id: 1191,
    text: "¿Qué pensás de las citas a ciegas?",
    followUps: ["¿Te animarías?", "¿Confias en quien te presenta?", "¿Te da ansiedad?"]
  },
  {
    id: 1192,
    text: "¿Cuál es tu postura sobre el aborto o los derechos reproductivos?",
    followUps: ["¿Es un tema que hablás en citas?", "¿Afectaría tu elección de pareja?", "¿Es un valor fundamental?"]
  },
  {
    id: 1193,
    text: "¿Crees que el feminismo cambió la forma en que nos relacionamos sexualmente?",
    followUps: ["¿Hay más igualdad?", "¿Confundió roles?", "¿Mejoró la comunicación?"]
  },
  {
    id: 1194,
    text: "¿Qué opinás de la gente que publica toda su relación en redes sociales?",
    followUps: ["¿Es real o apariencia?", "¿Vos lo hacés?", "¿Necesitan validación?"]
  },
  {
    id: 1195,
    text: "¿Crees que se puede amar a alguien sin admirarlo?",
    followUps: ["¿La admiración es base del amor?", "¿Qué admirás en una pareja?", "¿El amor es ciego?"]
  },
  {
    id: 1196,
    text: "¿Qué es para vos una \"relación sana\"?",
    followUps: ["¿Paz, confianza o libertad?", "¿La has tenido?", "¿Es difícil de construir?"]
  },
  {
    id: 1197,
    text: "¿Crees que el sexo mejora con el tiempo en una pareja estable?",
    followUps: ["¿Se pierde la novedad?", "¿La confianza ayuda?", "¿Hay que trabajar en ello?"]
  },
  {
    id: 1198,
    text: "¿Qué opinás de los \"permisos\" o \"libertades\" pactadas en la pareja?",
    followUps: ["¿Salidas solos?", "¿Viajes separados?", "¿Es necesario el aire?"]
  },
  {
    id: 1199,
    text: "¿Crees en el amor a primera vista?",
    followUps: ["¿Te pasó?", "¿Es solo atracción?", "¿Puede durar?"]
  },
  {
    id: 1200,
    text: "¿Qué es lo que más te asusta de comprometerte con alguien a largo plazo?",
    followUps: ["¿Perder tu identidad?", "¿El aburrimiento?", "¿Que se termine?"]
  }
];