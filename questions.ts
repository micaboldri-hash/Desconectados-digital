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