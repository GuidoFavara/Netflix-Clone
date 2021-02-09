export function seedDatabase(firebase) {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const piece = (Math.random() * 16) | 0;
        const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
        return elem.toString(16);
    });
    /* eslint-enable */
  }

  /* Series
    ============================================ */
  // Documentales
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Rey Tigre',
    description:
      'Una exploración de la cría de grandes felinos y su extraño inframundo, poblado por personajes excéntricos.',
    genero: 'documentales',
    maturity: '18',
    slug: 'tiger-king',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Amanda Knox',
    description: 'Amanda Marie Knox es una mujer estadounidense que pasó casi cuatro años en una prisión Italiana.',
    genero: 'documentales',
    maturity: '12',
    slug: 'amanda-knox',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Ciudadano',
    description:
      'Citizenfour es una película documental de 2014 dirigida por Laura Poitras, sobre Edward Snowden y el escándalo de espionaje de la NSA.',
    genero: 'documentales',
    maturity: '12',
    slug: 'citizenfour',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Super engórdame',
    description:
      'El experimento social del director Morgan Spurlock en gastronomía de comida rápida lo ve intentando subsistir únicamente con la comida de McDonalds.',
    genero: 'documentales',
    maturity: '12',
    slug: 'super-size-me',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'En la cuerda floja',
    description:
      'El cineasta James Marsh recrea magistralmente el truco de 1974 del temerario Philippe Petit caminando sobre un cable a través de las Torres Gemelas.',
    genero: 'documentales',
    maturity: '12',
    slug: 'man-on-wire',
  });

  // Comedias
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'The Office',
    description:
      'Un variopinto grupo de oficinistas atraviesa divertidísimas desventuras en la sucursal de Scranton, Pensilvania, de Dunder Mifflin Paper Company.',
    genero: 'comedias',
    maturity: '15',
    slug: 'the-office',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Sacrificios de familia',
    description:
      'La familia Bluth, que alguna vez fue un nombre prominente en el negocio, pierde todo después de que el patriarca principal es condenado por fraude.',
    genero: 'comedias',
    maturity: '15',
    slug: 'arrested-development',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Controle su entusiasmo',
    description:
      'Larry David, un famoso escritor y productor de televisión, se mete en varias desventuras con sus amigos y colegas famosos en Los Ángeles.',
    genero: 'comedias',
    maturity: '15',
    slug: 'curb-your-enthusiasm',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Padre de Familia',
    description:
      'Peter Griffin y su familia de dos adolescentes, un perro inteligente, un bebé diabólico y su esposa se encuentran en algunos de los escenarios más divertidos.',
    genero: 'comedias',
    maturity: '15',
    slug: 'family-guy',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'South Park',
    description:
      'Cuatro chicos jóvenes que van a la escuela, Stan Marsh, Kyle Broflovski, Eric Cartman y Kenny McCormick, que viven en South Park, se embarcan en varias aventuras.',
    genero: 'comedias',
    maturity: '15',
    slug: 'south-park',
  });

  // Infantiles
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Peppa Pig',
    description:
      'Peppa, una cerdita preescolar extrovertida, participa en muchas actividades enérgicas. Ella aprende algo nuevo todos los días y se divierte mucho con su familia y amigos.',
    genero: 'infantiles',
    maturity: '0',
    slug: 'peppa-pig',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Dora la exploradora',
    description:
      'Dora, una niña de siete años de ascendencia latinoamericana, se embarca en numerosas aventuras en el desierto con su amiga Boots, un mono y una variedad de herramientas divertidas y útiles.',
    genero: 'infantiles',
    maturity: '0',
    slug: 'dora-the-explorer',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'PAW Patrol',
    description:
      'Seis valientes cachorros, capitaneados por Ryder, un niño de diez años experto en tecnología, trabajan juntos para cumplir misiones de rescate de alto riesgo para proteger a los residentes de la comunidad de Adventure Bay.',
    genero: 'infantiles',
    maturity: '0',
    slug: 'paw-patrol',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Arthur',
    description:
      'El oso hormiguero con anteojos Arthur Read demuestra a los niños cómo lidiar con traumas y desafíos de la niñez como la tarea, los maestros y los matones.',
    genero: 'infantiles',
    maturity: '0',
    slug: 'arthur',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Bob Esponja',
    description:
      'Una esponja de mar amarilla llamada SpongeBob SquarePants vive en la ciudad de Fondo de Bikini en las profundidades del Océano Pacífico.',
    genero: 'infantiles',
    maturity: '0',
    slug: 'spongebob',
  });

  // crimen
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Fabricando un asesino',
    description:
      'Exonerado después de pasar casi dos décadas en prisión por un crimenn que no cometió, Steven Avery presentó una demanda contra el condado de Manitowoc, Wisconsin, y varias personas involucradas en su arresto.',
    genero: 'crimen',
    maturity: '18',
    slug: 'making-a-murderer',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Ni en tus sueños',
    description:
      'Un hombre inocente es acusado de asesinato, lo que lleva a su abogado a una persecución salvaje para confirmar su coartada utilizando imágenes sin procesar de un programa de televisión.',
    genero: 'crimen',
    maturity: '18',
    slug: 'long-shot',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Asesino confieso',
    description:
      'Henry Lee Lucas fue un asesino en serie convicto estadounidense cuyos crímenes abarcaron desde 1960 hasta 1983. Fue declarado culpable de asesinar a once personas y condenado a muerte por el asesinato de Debra Jackson, aunque su sentencia sería conmutada por cadena perpetua en 1998.',
    genero: 'crimen',
    maturity: '18',
    slug: 'the-confession-killer',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'El hombre inocente',
    description:
      'Henry Lee Lucas fue un asesino en serie convicto estadounidense cuyos crímenes abarcaron desde 1960 hasta 1983. Fue declarado culpable de asesinar a una vez personas y condenado a muerte por el asesinato de Debra Jackson.',
    genero: 'crimen',
    maturity: '18',
    slug: 'the-innocent-man',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'El crimenn de la escalera',
    description:
      'En 2001 murió la esposa del novelista Michael Peterson, quien afirmó que ella falleció después de caer por las escaleras en su casa. Sin embargo, el médico forense determinó que la habían golpeado con un arma.',
    genero: 'crimen',
    maturity: '18',
    slug: 'the-staircase',
  });

  // Sentise bien
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'En busca del destino',
    description:
      'Will Hunting, un genio de las matemáticas, resuelve todos los problemas matemáticos difíciles. Cuando se enfrenta a una crisis emocional, recibe la ayuda del psiquiatra Dr. Sean Maguireto, que lo ayuda a recuperarse.',
    genero: 'sentirse-bien',
    maturity: '12',
    slug: 'good-will-hunting',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Forrest Gump',
    description:
      'Forrest Gump, un hombre con un coeficiente intelectual bajo, se une al ejército para el servicio donde conoce a Dan y Bubba. Sin embargo, no puede dejar de pensar en su novia de la infancia Jenny Curran, cuya vida está arruinada.',
    genero: 'sentirse-bien',
    maturity: '12',
    slug: 'forrest-gump',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Juno',
    description:
      'La inadaptada social Juno se protege a sí misma con un ingenio cáustico, pero su embarazo no planeado hace que la adolescente se involucre más en la vida de los padres adoptivos de su bebé de lo que esperaba.',
    genero: 'sentirse-bien',
    maturity: '12',
    slug: 'juno',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Medianoche en París',
    description:
      'Gil llega con su prometida y su familia a París de vacaciones, mientras intenta terminar su primera novela. La ciudad lo seduce, lo que lo lleva a un tiempo pasado, lejos de su prometida.',
    genero: 'sentirse-bien',
    maturity: '12',
    slug: 'midnight-in-paris',
  });
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Escuela de Rock',
    description:
      'Dewey Finn, un entusiasta del rock aficionado, astutamente asume el trabajo de maestro suplente de su amigo. Al no tener calificaciones para ello, en cambio comienza a entrenar a los estudiantes para formar una banda.',
    genero: 'sentirse-bien',
    maturity: '12',
    slug: 'school-of-rock',
  });

  /* Películas
    ============================================ */
  // Drama
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'El Gran Truco',
    description:
      'Dos amigos y compañeros magos se convierten en enemigos acérrimos después de una tragedia repentina. Al dedicarse a esta rivalidad, hacen sacrificios que les dan fama pero con terribles consecuencias.',
    genero: 'drama',
    maturity: '15',
    slug: 'the-prestige',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'El Club de la Pelea',
    description:
      'Descontento con su estilo de vida capitalista, un insomne de cuello blanco forma un club de lucha clandestino con Tyler, un descuidado vendedor de jabón. El proyecto pronto se convierte en algo siniestro.',
    genero: 'drama',
    maturity: '15',
    slug: 'fight-club',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'El discurso del Rey',
    description:
      'El rey Jorge VI intenta superar su problema de tartamudeo con la ayuda del logopeda Lionel Logue y se hace lo suficientemente digno para guiar a su país a través de la Segunda Guerra Mundial.',
    genero: 'drama',
    maturity: '15',
    slug: 'kings-speech',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'El Renacido',
    description:
      'Hugh Glass, un legendario hombre de la frontera, resulta gravemente herido en el ataque de un oso y es abandonado por su equipo de caza. Utiliza sus habilidades para sobrevivir y vengarse de su compañero, que lo traicionó.',
    genero: 'drama',
    maturity: '15',
    slug: 'the-revenant',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Red Social',
    description:
      'Mark Zuckerberg crea un sitio de redes sociales, Facebook, con la ayuda de su amigo Eduardo Saverin. Pero pronto, una serie de mentiras destroza su relación incluso cuando Facebook conecta a las personas.',
    genero: 'drama',
    maturity: '12',
    slug: 'the-social-network',
  });

  // Suspenso
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'La Isla Siniestra',
    description:
      'Teddy Daniels y Chuck Aule, dos alguaciles estadounidenses, son enviados a un asilo en una isla remota para investigar la desaparición de un paciente, donde Teddy descubre una verdad impactante sobre el lugar.',
    genero: 'suspenso',
    maturity: '15',
    slug: 'shutter-island',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Perdida',
    description:
      'Nick Dunne descubre que todo el enfoque de los medios se ha centrado en él cuando su esposa Amy Dunne desaparece el día de su quinto aniversario de bodas.',
    genero: 'suspenso',
    maturity: '15',
    slug: 'gone-girl',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'La Sospecha',
    description:
      'Cuando la policía se toma un tiempo para encontrar a la hija de Keller Dover y a su amiga, él decide ir él mismo a buscar. Su desesperación lo lleva más cerca de encontrar la verdad y también pone en peligro su propia vida.',
    genero: 'suspenso',
    maturity: '15',
    slug: 'prisoners',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Seven',
    description:
      'Un asesino en serie comienza a asesinar a personas de acuerdo con los siete pecados capitales. Dos detectives, uno nuevo en la ciudad y el otro a punto de jubilarse, tienen la tarea de detener al criminal.',
    genero: 'suspenso',
    maturity: '15',
    slug: 'seven',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Zodiaco',
    description:
      'Robert Graysmith, caricaturista de profesión, se encuentra pensando obsesivamente en el asesino del Zodíaco. Utiliza sus habilidades para resolver acertijos para acercarse a revelar la identidad del asesino.',
    genero: 'suspenso',
    maturity: '15',
    slug: 'zodiac',
  });

  // Infantiles
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Hotel Transylvania',
    description:
      'Drácula, dueño de un resort de lujo para monstruos, intenta evitar que su hija se enamore de Jonathan, un humano.',
    genero: 'infantiles',
    maturity: '0',
    slug: 'hotel-transylvania',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Mi Villano Favorito',
    description:
      'Gru, un genio criminal, adopta a tres huérfanos como peones para llevar a cabo el mayor atraco de la historia. Su vida da un giro inesperado cuando las niñas lo ven como su padre potencial.',
    genero: 'infantiles',
    maturity: '0',
    slug: 'despicable-me',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Frozen',
    description:
      'Anna emprende un viaje con un hombre de hielo, Kristoff, y su reno, Sven, para encontrar a su hermana, Elsa, que tiene el poder de convertir cualquier objeto o persona en hielo.',
    genero: 'infantiles',
    maturity: '0',
    slug: 'frozen',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'El viaje de Chihiro',
    description:
      'En esta película animada del destacado director japonés Hayao Miyazaki, Chihiro (Rumi Hiiragi) de 10 años y sus padres (Takashi Naitô, Yasuko Sawaguchi) se topan con un parque de atracciones aparentemente abandonado.',
    genero: 'infantiles',
    maturity: '0',
    slug: 'spirited-away',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Up',
    description:
      'Carl, un anciano viudo, emprende una aventura en su casa voladora en busca de Paradise Falls, el destino soñado de su esposa.',
    genero: 'infantiles',
    maturity: '0',
    slug: 'up',
  });

  // Thriller
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Guasón',
    description:
      'Siempre solo entre una multitud, el fracasado comediante Arthur Fleck busca la conexión mientras camina por las calles de Gotham City.',
    genero: 'thriller',
    maturity: '15',
    slug: 'joker',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Un Lugar en silencio',
    description:
      'La familia Abbott ahora debe enfrentar los terrores del mundo exterior mientras luchan por sobrevivir en silencio. Obligados a aventurarse en lo desconocido, se dan cuenta de que las criaturas que cazan por el sonido no son las únicas amenazas que acechan más allá del camino de arena.',
    genero: 'thriller',
    maturity: '15',
    slug: 'a-quiet-place',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'El Cisne Negro',
    description:
      'Nina, una bailarina, tiene la oportunidad de interpretar al cisne blanco, la princesa Odette. Pero se encuentra cayendo en la locura cuando Thomas, el director artístico, decide que Lily podría encajar mejor en el papel.',
    genero: 'thriller',
    maturity: '15',
    slug: 'black-swan',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Primicia mortal',
    description:
      'Louis Bloom, un pequeño ladrón, se da cuenta de que puede ganar dinero capturando fotografías de actividades delictivas y comienza a recurrir a tácticas extremas para conseguirlas.',
    genero: 'thriller',
    maturity: '15',
    slug: 'nightcrawler',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'El silencio de los inocentes',
    description:
      'Clarice Starling, una agente del FBI, busca la ayuda de Hannibal Lecter, un asesino en serie psicópata y ex psiquiatra, para detener a otro asesino en serie que ha estado reclamando víctimas femeninas.',
    genero: 'thriller',
    maturity: '15',
    slug: 'the-silence-of-the-lambs',
  });

  // Romance
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Nace una estrella',
    description:
      'Después de enamorarse de la artista en apuros Ally, Jackson, un músico, la convence para que siga sus sueños, mientras él lucha contra el alcoholismo y sus demonios personales.',
    genero: 'romance',
    maturity: '15',
    slug: 'a-star-is-born',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Triste San Valentin',
    description:
      'Dean y Cynthia están casados y tienen una hija y su matrimonio está a punto de desmoronarse. Ambos provienen de familias disfuncionales y luchan por darle sentido a su relación.',
    genero: 'romance',
    maturity: '15',
    slug: 'blue-valentine',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'La La Land',
    description:
      'Sebastian (Ryan Gosling) y Mia (Emma Stone) se sienten atraídos por su deseo común de hacer lo que aman. Pero a medida que aumenta el éxito, se enfrentan a decisiones que comienzan ...',
    genero: 'romance',
    maturity: '15',
    slug: 'la-la-land',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Diario de una pasión',
    description:
      'Duke lee la historia de Allie y Noah, dos amantes que fueron separados por el destino, a la Sra. Hamilton, una anciana que sufre de Alzheimer, a diario en su cuaderno.',
    genero: 'romance',
    maturity: '15',
    slug: 'the-notebook',
  });
  firebase.firestore().collection('films').add({
    id: getUUID(),
    title: 'Titanic',
    description:
      'Rose, de diecisiete años, proviene de una familia aristocrática y está lista para casarse. Cuando sube al Titanic, conoce a Jack Dawson, un artista, y se enamora de él.',
    genero: 'romance',
    maturity: '15',
    slug: 'titanic',
  });
}
