/**
 * ==================================================================================
 * PROYECTO: GUÍA DE ESTUDIO DE INGLÉS (UNIDADES 1 - 5)
 * AUTOR: lincer0
 * FECHA: Noviembre 2025
 * DESCRIPCIÓN: 
 * Este script maneja la lógica interactiva para una aplicación web de estudio.
 * Incluye gestión de tarjetas de memoria (flashcards), ejercicios de rellenar huecos,
 * ordenamiento de palabras, juego de emparejamiento, un quiz de opción múltiple
 * y un sistema de colapso de secciones (Dashboard style).
 * * El contenido está alineado estrictamente con los "Learning Objectives" del libro.
 * ==================================================================================
 */

// ==================================================================================
// 1. BASE DE DATOS (DATA STORE)
// ==================================================================================

/**
 * cardsData
 * Tarjetas de estudio rápido (Flashcards).
 * CONTIENE: 65 Tarjetas (Versión Extendida).
 */
const cardsData = [
    // ==============================
    // WELCOME UNIT: Basics
    // ==============================
    { unit: 'welcome', question: 'Grammar: Routine actions / Facts?', answer: 'Simple Present (e.g., I live in Mexico).' },
    { unit: 'welcome', question: 'Vocabulary: Greetings for 8:00 PM?', answer: 'Good evening.' },
    { unit: 'welcome', question: 'Vocabulary: Farewell before sleeping?', answer: 'Good night.' },
    { unit: 'welcome', question: 'Verb "To Be": I ______', answer: 'Am (I am).' },
    { unit: 'welcome', question: 'Verb "To Be": She / He / It ______', answer: 'Is (She is).' },
    { unit: 'welcome', question: 'Verb "To Be": You / We / They ______', answer: 'Are (They are).' },
    { unit: 'welcome', question: 'Function: Introduce yourself', answer: 'Hi, my name is... / I am...' },
    { unit: 'welcome', question: 'Grammar: Negative of "I am"', answer: 'I am not / I\'m not.' },

    // ==============================
    // UNIT 1: What do you do? (Jobs & Routines)
    // ==============================
    { unit: 'unit1', question: 'Function: Ask about occupation', answer: 'What do you do?' },
    { unit: 'unit1', question: 'Grammar: 3rd Person Rule (He/She)', answer: 'Add -s or -es to the verb (Works, Goes).' },
    { unit: 'unit1', question: 'Grammar: Negative (He/She)', answer: 'Doesn\'t + Verb Base (He doesn\'t work).' },
    { unit: 'unit1', question: 'Grammar: Question Particle (You/We/They)', answer: 'DO (Do you work here?).' },
    { unit: 'unit1', question: 'Grammar: Question Particle (He/She)', answer: 'DOES (Does she like pizza?).' },
    { unit: 'unit1', question: 'Vocab: Person who helps sick people', answer: 'Nurse / Doctor.' },
    { unit: 'unit1', question: 'Vocab: Person who serves food', answer: 'Server / Waiter.' },
    { unit: 'unit1', question: 'Vocab: Travel to work by car', answer: 'Drive to work.' },
    { unit: 'unit1', question: 'Vocab: Travel using public transport', answer: 'Take the bus / Take the subway.' },
    { unit: 'unit1', question: 'Preposition: ______ the morning', answer: 'IN the morning.' },
    { unit: 'unit1', question: 'Preposition: ______ night', answer: 'AT night.' },

    // ==============================
    // UNIT 2: Who's that? (People & Abilities)
    // ==============================
    { unit: 'unit2', question: 'Vocab: Personality (Not shy)', answer: 'Outgoing / Friendly.' },
    { unit: 'unit2', question: 'Vocab: Personality (Makes jokes)', answer: 'Funny.' },
    { unit: 'unit2', question: 'Vocab: Appearance (Not tall)', answer: 'Short.' },
    { unit: 'unit2', question: 'Vocab: Appearance (Hair color)', answer: 'Blond, Brown, Black, Red.' },
    { unit: 'unit2', question: 'Grammar: Describe eyes/hair', answer: 'Use HAVE/HAS (She has blue eyes).' },
    { unit: 'unit2', question: 'Grammar: Describe height/weight', answer: 'Use BE (He is tall).' },
    { unit: 'unit2', question: 'Modal Verb: Ability', answer: 'Can (I can swim).' },
    { unit: 'unit2', question: 'Modal Verb: No Ability', answer: 'Can\'t (I can\'t sing).' },
    { unit: 'unit2', question: 'Grammar: Question with Can', answer: 'Can + Subject + Verb? (Can you cook?).' },
    { unit: 'unit2', question: 'Vocab: Family (Mother\'s sister)', answer: 'Aunt.' },
    { unit: 'unit2', question: 'Vocab: Family (Uncle\'s son)', answer: 'Cousin.' },

    // ==============================
    // UNIT 3: What are you doing? (Now & Chores)
    // ==============================
    { unit: 'unit3', question: 'Grammar: Actions happening NOW', answer: 'Present Continuous (am/is/are + -ing).' },
    { unit: 'unit3', question: 'Spelling: Run + ing', answer: 'Running (Double N).' },
    { unit: 'unit3', question: 'Spelling: Make + ing', answer: 'Making (Drop the E).' },
    { unit: 'unit3', question: 'Vocab: Chore (Cleaning clothes)', answer: 'Do the laundry.' },
    { unit: 'unit3', question: 'Vocab: Chore (Cleaning floor)', answer: 'Sweep / Vacuum / Mop.' },
    { unit: 'unit3', question: 'Vocab: Chore (After eating)', answer: 'Wash the dishes.' },
    { unit: 'unit3', question: 'Grammar: Verbs followed by Infinitive', answer: 'Want, Need, Hope, Would like (to go).' },
    { unit: 'unit3', question: 'Grammar: Verbs followed by Gerund', answer: 'Enjoy, Finish, Quit (doing).' },
    { unit: 'unit3', question: 'Function: Inviting someone', answer: 'Do you want to...? / Let\'s...' },
    { unit: 'unit3', question: 'Vocab: Free time activity', answer: 'Hang out with friends.' },

    // ==============================
    // UNIT 4: Whose phone is this? (Possessions)
    // ==============================
    { unit: 'unit4', question: 'Grammar: Asking owner', answer: 'Whose is this? / Whose book is this?' },
    { unit: 'unit4', question: 'Possessive Pronoun: My', answer: 'Mine.' },
    { unit: 'unit4', question: 'Possessive Pronoun: Your', answer: 'Yours.' },
    { unit: 'unit4', question: 'Possessive Pronoun: Her', answer: 'Hers.' },
    { unit: 'unit4', question: 'Possessive Pronoun: Our', answer: 'Ours.' },
    { unit: 'unit4', question: 'Possessive \'S rule', answer: 'John\'s car (The car of John).' },
    { unit: 'unit4', question: 'Vocab: Tech (Small computer)', answer: 'Tablet.' },
    { unit: 'unit4', question: 'Vocab: Tech (Portable computer)', answer: 'Laptop.' },
    { unit: 'unit4', question: 'Comparatives: Short adjectives', answer: 'Add -er (Fast -> Faster).' },
    { unit: 'unit4', question: 'Comparatives: Ends in Y', answer: 'Change Y to I + er (Heavy -> Heavier).' },
    { unit: 'unit4', question: 'Comparatives: Long adjectives', answer: 'More + Adjective (More expensive).' },
    { unit: 'unit4', question: 'Comparative: Good', answer: 'Better.' },
    { unit: 'unit4', question: 'Comparative: Bad', answer: 'Worse.' },

    // ==============================
    // UNIT 5: Any plans? (Future)
    // ==============================
    { unit: 'unit5', question: 'Grammar: Future Plans (Fixed)', answer: 'Present Continuous (I am leaving tomorrow).' },
    { unit: 'unit5', question: 'Grammar: Future Intentions', answer: 'Be going to (I am going to buy a car).' },
    { unit: 'unit5', question: 'Grammar: Spontaneous Offers', answer: 'Will (I\'ll help you).' },
    { unit: 'unit5', question: 'Vocab: Time (The day after today)', answer: 'Tomorrow.' },
    { unit: 'unit5', question: 'Vocab: Time (Saturday + Sunday)', answer: 'Weekend.' },
    { unit: 'unit5', question: 'Object Pronouns: I -> ?', answer: 'Me (Call me).' },
    { unit: 'unit5', question: 'Object Pronouns: He -> ?', answer: 'Him (Tell him).' },
    { unit: 'unit5', question: 'Object Pronouns: She -> ?', answer: 'Her (Ask her).' },
    { unit: 'unit5', question: 'Object Pronouns: They -> ?', answer: 'Them (Help them).' },
    { unit: 'unit5', question: 'Structure: Go + Activity', answer: 'Go shopping, Go dancing, Go swimming.' },

    // ==============================
    // EXTRAS: Verbs & Tips
    // ==============================
    { unit: 'verbs', question: 'Past: Go', answer: 'Went' },
    { unit: 'verbs', question: 'Past: See', answer: 'Saw' },
    { unit: 'verbs', question: 'Past: Eat', answer: 'Ate' },
    { unit: 'verbs', question: 'Past: Buy', answer: 'Bought' },
    { unit: 'verbs', question: 'Past: Think', answer: 'Thought' },
    { unit: 'tips', question: 'Listening Strategy', answer: 'Focus on keywords, not every single word.' },
    { unit: 'tips', question: 'Exam Tip', answer: 'Read instructions twice before answering.' }
];

/**
 * legendData
 * Definición de la leyenda de colores para la interfaz.
 */
const legendData = [
    { unit: 'welcome', name: 'Welcome Unit' },
    { unit: 'unit1', name: 'Unit 1: Jobs' },
    { unit: 'unit2', name: 'Unit 2: People' },
    { unit: 'unit3', name: 'Unit 3: Activities' },
    { unit: 'unit4', name: 'Unit 4: Possessions' },
    { unit: 'unit5', name: 'Unit 5: Future' },
    { unit: 'verbs', name: 'Irregular Verbs' },
    { unit: 'tips', name: 'Study Tips' }
];

/**
 * fillBlanksData
 * Ejercicios de completar la oración.
 */
const fillBlanksData = [
    { q: "She ______ (work) in a hospital.", a: "works" },
    { q: "They ______ (not/take) the bus to work.", a: "don't take" },
    { q: "______ (do) you like your job?", a: "do" },
    { q: "He ______ (have) a beard and glasses.", a: "has" },
    { q: "I ______ (not/can) speak German.", a: "can't" },
    { q: "She ______ (be) very smart and funny.", a: "is" },
    { q: "Right now, we ______ (study) English.", a: "are studying" },
    { q: "He ______ (wash) the dishes at the moment.", a: "is washing" },
    { q: "I enjoy ______ (read) books.", a: "reading" },
    { q: "This phone is not mine, it is ______ (her).", a: "hers" },
    { q: "A car is ______ (fast) than a bicycle.", a: "faster" },
    { q: "My house is ______ (big) than yours.", a: "bigger" },
    { q: "We ______ (visit) grandma tomorrow.", a: "are visiting" },
    { q: "I ______ (buy) a new laptop next week.", a: "am going to buy" },
    { q: "Don't worry, I ______ (help) you tomorrow.", a: "will help" },
    { q: "Yesterday I ______ (go) to the cinema.", a: "went" },
    { q: "______ (whose) shoes are these?", a: "whose" },
    { q: "Can you ______ (play) the guitar?", a: "play" },
    { q: "They ______ (be) at the party last night.", a: "were" },
    { q: "He ______ (love) watching movies.", a: "loves" }
];

/**
 * wordOrderData
 * Ejercicios de sintaxis.
 */
const wordOrderData = [
    { q: "do - What - do - you?", a: "What do you do?" },
    { q: "bus - take - I - the - work - to", a: "I take the bus to work" },
    { q: "doesn't - She - chocolate - like", a: "She doesn't like chocolate" },
    { q: "eyes - She - blue - has", a: "She has blue eyes" },
    { q: "well - swim - very - can - He", a: "He can swim very well" },
    { q: "your - What - like - is - teacher?", a: "What is your teacher like?" },
    { q: "the - sweeping - is - He - floor", a: "He is sweeping the floor" },
    { q: "watching - They - TV - are - now", a: "They are watching TV now" },
    { q: "you - Do - to - want - come?", a: "Do you want to come?" },
    { q: "is - Whose - tablet - this?", a: "Whose tablet is this?" },
    { q: "mine - book - That - is - not", a: "That book is not mine" },
    { q: "than - is - faster - plane - A - car - a", a: "A plane is faster than a car" },
    { q: "going - I - to - am - study", a: "I am going to study" },
    { q: "meeting - friends - are - We - tomorrow", a: "We are meeting friends tomorrow" },
    { q: "call - will - I - later - you", a: "I will call you later" },
    { q: "old - How - are - you?", a: "How old are you?" },
    { q: "yesterday - Where - were - you?", a: "Where were you yesterday?" },
    { q: "favorite - What - is - color - your?", a: "What is your favorite color?" }
];

/**
 * matchingData
 * Pares para el juego de memoria (Match Game).
 */
const matchingData = [
    { q: "Teacher", a: "School", id: "m1" },
    { q: "Doctor", a: "Hospital", id: "m2" },
    { q: "Commute", a: "Travel to work", id: "m3" },
    { q: "Funny", a: "Serious (Opposite)", id: "m4" },
    { q: "Tall", a: "Short (Opposite)", id: "m5" },
    { q: "Shy", a: "Outgoing (Opposite)", id: "m6" },
    { q: "Laundry", a: "Clothes", id: "m7" },
    { q: "Dishes", a: "Kitchen", id: "m8" },
    { q: "Sweep", a: "Broom", id: "m9" },
    { q: "Whose", a: "Possession", id: "m10" },
    { q: "Cheap", a: "Expensive (Opposite)", id: "m11" },
    { q: "Mine", a: "My object", id: "m12" },
    { q: "Tomorrow", a: "Future", id: "m13" },
    { q: "Yesterday", a: "Past", id: "m14" },
    { q: "Weekend", a: "Saturday & Sunday", id: "m15" },
    { q: "Go (Past)", a: "Went", id: "m16" },
    { q: "See (Past)", a: "Saw", id: "m17" },
    { q: "Buy (Past)", a: "Bought", id: "m18" }
];

/**
 * quizData
 * Preguntas de opción múltiple.
 */
const quizData = [
    { q: "U1: Which sentence is correct?", opts: [{t:"She work at a bank.", v:"a"}, {t:"She works at a bank.", v:"b"}, {t:"She is work at a bank.", v:"c"}], ans: "b" },
    { q: "U1: How do you go to work?", opts: [{t:"I take the bus.", v:"a"}, {t:"I am walking.", v:"b"}, {t:"I go by foot.", v:"c"}], ans: "a" },
    { q: "U2: Describe personality:", opts: [{t:"He has tall.", v:"a"}, {t:"He is tall.", v:"b"}, {t:"He are tall.", v:"c"}], ans: "b" },
    { q: "U2: Correct use of CAN:", opts: [{t:"She cans swim.", v:"a"}, {t:"She can swims.", v:"b"}, {t:"She can swim.", v:"c"}], ans: "c" },
    { q: "U3: What are you doing NOW?", opts: [{t:"I watch TV.", v:"a"}, {t:"I am watching TV.", v:"b"}, {t:"I watched TV.", v:"c"}], ans: "b" },
    { q: "U3: Which is a household chore?", opts: [{t:"Playing soccer.", v:"a"}, {t:"Sweeping the floor.", v:"b"}, {t:"Going to the cinema.", v:"c"}], ans: "b" },
    { q: "U3: Verb + Gerund rule:", opts: [{t:"I enjoy reading.", v:"a"}, {t:"I enjoy to read.", v:"b"}, {t:"I enjoy read.", v:"c"}], ans: "a" },
    { q: "U4: ______ phone is this?", opts: [{t:"Who", v:"a"}, {t:"Who's", v:"b"}, {t:"Whose", v:"c"}], ans: "c" },
    { q: "U4: Comparative form of 'Good':", opts: [{t:"Gooder", v:"a"}, {t:"More good", v:"b"}, {t:"Better", v:"c"}], ans: "c" },
    { q: "U4: Comparative form of 'Expensive':", opts: [{t:"Expensiver", v:"a"}, {t:"More expensive", v:"b"}, {t:"Most expensive", v:"c"}], ans: "b" },
    { q: "U5: Future plan (arrangement):", opts: [{t:"I meeting friends tomorrow.", v:"a"}, {t:"I meet friends tomorrow.", v:"b"}, {t:"I am meeting friends tomorrow.", v:"c"}], ans: "c" },
    { q: "U5: Object pronoun: 'She called ___ (I)'?", opts: [{t:"me", v:"a"}, {t:"my", v:"b"}, {t:"I", v:"c"}], ans: "a" },
    { q: "Verbs: Past participle of 'Be'?", opts: [{t:"Was", v:"a"}, {t:"Were", v:"b"}, {t:"Been", v:"c"}], ans: "c" },
    { q: "Vocab: Opposite of 'Smart'?", opts: [{t:"Intelligent", v:"a"}, {t:"Stupid / Silly", v:"b"}, {t:"Funny", v:"c"}], ans: "b" },
    { q: "Structure: Would you like ______?", opts: [{t:"to come", v:"a"}, {t:"coming", v:"b"}, {t:"come", v:"c"}], ans: "a" }
];

/**
 * verbsData
 * Lista completa de verbos regulares e irregulares.
 */
const verbsData = [
    { base: 'be', past: 'was/were', participle: 'been', translation: 'ser/estar', type: 'irregular' },
    { base: 'become', past: 'became', participle: 'become', translation: 'convertirse', type: 'irregular' },
    { base: 'begin', past: 'began', participle: 'begun', translation: 'empezar', type: 'irregular' },
    { base: 'break', past: 'broke', participle: 'broken', translation: 'romper', type: 'irregular' },
    { base: 'bring', past: 'brought', participle: 'brought', translation: 'traer', type: 'irregular' },
    { base: 'buy', past: 'bought', participle: 'bought', translation: 'comprar', type: 'irregular' },
    { base: 'can', past: 'could', participle: 'been able', translation: 'poder', type: 'irregular' },
    { base: 'catch', past: 'caught', participle: 'caught', translation: 'atrapar', type: 'irregular' },
    { base: 'choose', past: 'chose', participle: 'chosen', translation: 'elegir', type: 'irregular' },
    { base: 'come', past: 'came', participle: 'come', translation: 'venir', type: 'irregular' },
    { base: 'cost', past: 'cost', participle: 'cost', translation: 'costar', type: 'irregular' },
    { base: 'do', past: 'did', participle: 'done', translation: 'hacer', type: 'irregular' },
    { base: 'drink', past: 'drank', participle: 'drunk', translation: 'beber', type: 'irregular' },
    { base: 'drive', past: 'drove', participle: 'driven', translation: 'conducir', type: 'irregular' },
    { base: 'eat', past: 'ate', participle: 'eaten', translation: 'comer', type: 'irregular' },
    { base: 'fall', past: 'fell', participle: 'fallen', translation: 'caer', type: 'irregular' },
    { base: 'feel', past: 'felt', participle: 'felt', translation: 'sentir', type: 'irregular' },
    { base: 'find', past: 'found', participle: 'found', translation: 'encontrar', type: 'irregular' },
    { base: 'fly', past: 'flew', participle: 'flown', translation: 'volar', type: 'irregular' },
    { base: 'forget', past: 'forgot', participle: 'forgotten', translation: 'olvidar', type: 'irregular' },
    { base: 'get', past: 'got', participle: 'gotten', translation: 'obtener', type: 'irregular' },
    { base: 'give', past: 'gave', participle: 'given', translation: 'dar', type: 'irregular' },
    { base: 'go', past: 'went', participle: 'gone', translation: 'ir', type: 'irregular' },
    { base: 'have', past: 'had', participle: 'had', translation: 'tener', type: 'irregular' },
    { base: 'hear', past: 'heard', participle: 'heard', translation: 'oír', type: 'irregular' },
    { base: 'know', past: 'knew', participle: 'known', translation: 'saber', type: 'irregular' },
    { base: 'leave', past: 'left', participle: 'left', translation: 'salir/dejar', type: 'irregular' },
    { base: 'lose', past: 'lost', participle: 'lost', translation: 'perder', type: 'irregular' },
    { base: 'make', past: 'made', participle: 'made', translation: 'hacer (crear)', type: 'irregular' },
    { base: 'meet', past: 'met', participle: 'met', translation: 'conocer/reunir', type: 'irregular' },
    { base: 'pay', past: 'paid', participle: 'paid', translation: 'pagar', type: 'irregular' },
    { base: 'put', past: 'put', participle: 'put', translation: 'poner', type: 'irregular' },
    { base: 'read', past: 'read', participle: 'read', translation: 'leer', type: 'irregular' },
    { base: 'run', past: 'ran', participle: 'run', translation: 'correr', type: 'irregular' },
    { base: 'say', past: 'said', participle: 'said', translation: 'decir', type: 'irregular' },
    { base: 'see', past: 'saw', participle: 'seen', translation: 'ver', type: 'irregular' },
    { base: 'sell', past: 'sold', participle: 'sold', translation: 'vender', type: 'irregular' },
    { base: 'send', past: 'sent', participle: 'sent', translation: 'enviar', type: 'irregular' },
    { base: 'sing', past: 'sang', participle: 'sung', translation: 'cantar', type: 'irregular' },
    { base: 'sit', past: 'sat', participle: 'sat', translation: 'sentarse', type: 'irregular' },
    { base: 'sleep', past: 'slept', participle: 'slept', translation: 'dormir', type: 'irregular' },
    { base: 'speak', past: 'spoke', participle: 'spoken', translation: 'hablar', type: 'irregular' },
    { base: 'spend', past: 'spent', participle: 'spent', translation: 'gastar', type: 'irregular' },
    { base: 'swim', past: 'swam', participle: 'swum', translation: 'nadar', type: 'irregular' },
    { base: 'take', past: 'took', participle: 'taken', translation: 'tomar', type: 'irregular' },
    { base: 'teach', past: 'taught', participle: 'taught', translation: 'enseñar', type: 'irregular' },
    { base: 'tell', past: 'told', participle: 'told', translation: 'contar/decir', type: 'irregular' },
    { base: 'think', past: 'thought', participle: 'thought', translation: 'pensar', type: 'irregular' },
    { base: 'understand', past: 'understood', participle: 'understood', translation: 'entender', type: 'irregular' },
    { base: 'wear', past: 'wore', participle: 'worn', translation: 'usar (ropa)', type: 'irregular' },
    { base: 'win', past: 'won', participle: 'won', translation: 'ganar', type: 'irregular' },
    { base: 'write', past: 'wrote', participle: 'written', translation: 'escribir', type: 'irregular' },
    { base: 'ask', past: 'asked', participle: 'asked', translation: 'preguntar', type: 'regular' },
    { base: 'call', past: 'called', participle: 'called', translation: 'llamar', type: 'regular' },
    { base: 'clean', past: 'cleaned', participle: 'cleaned', translation: 'limpiar', type: 'regular' },
    { base: 'commute', past: 'commuted', participle: 'commuted', translation: 'viajar al trabajo', type: 'regular' },
    { base: 'cook', past: 'cooked', participle: 'cooked', translation: 'cocinar', type: 'regular' },
    { base: 'dance', past: 'danced', participle: 'danced', translation: 'bailar', type: 'regular' },
    { base: 'describe', past: 'described', participle: 'described', translation: 'describir', type: 'regular' },
    { base: 'enjoy', past: 'enjoyed', participle: 'enjoyed', translation: 'disfrutar', type: 'regular' },
    { base: 'finish', past: 'finished', participle: 'finished', translation: 'terminar', type: 'regular' },
    { base: 'help', past: 'helped', participle: 'helped', translation: 'ayudar', type: 'regular' },
    { base: 'hope', past: 'hoped', participle: 'hoped', translation: 'esperar (deseo)', type: 'regular' },
    { base: 'like', past: 'liked', participle: 'liked', translation: 'gustar', type: 'regular' },
    { base: 'listen', past: 'listened', participle: 'listened', translation: 'escuchar', type: 'regular' },
    { base: 'live', past: 'lived', participle: 'lived', translation: 'vivir', type: 'regular' },
    { base: 'look', past: 'looked', participle: 'looked', translation: 'mirar', type: 'regular' },
    { base: 'love', past: 'loved', participle: 'loved', translation: 'amar', type: 'regular' },
    { base: 'need', past: 'needed', participle: 'needed', translation: 'necesitar', type: 'regular' },
    { base: 'open', past: 'opened', participle: 'opened', translation: 'abrir', type: 'regular' },
    { base: 'plan', past: 'planned', participle: 'planned', translation: 'planear', type: 'regular' },
    { base: 'play', past: 'played', participle: 'played', translation: 'jugar', type: 'regular' },
    { base: 'start', past: 'started', participle: 'started', translation: 'comenzar', type: 'regular' },
    { base: 'stay', past: 'stayed', participle: 'stayed', translation: 'quedarse', type: 'regular' },
    { base: 'stop', past: 'stopped', participle: 'stopped', translation: 'parar', type: 'regular' },
    { base: 'study', past: 'studied', participle: 'studied', translation: 'estudiar', type: 'regular' },
    { base: 'talk', past: 'talked', participle: 'talked', translation: 'hablar', type: 'regular' },
    { base: 'travel', past: 'traveled', participle: 'traveled', translation: 'viajar', type: 'regular' },
    { base: 'visit', past: 'visited', participle: 'visited', translation: 'visitar', type: 'regular' },
    { base: 'wait', past: 'waited', participle: 'waited', translation: 'esperar (tiempo)', type: 'regular' },
    { base: 'walk', past: 'walked', participle: 'walked', translation: 'caminar', type: 'regular' },
    { base: 'want', past: 'wanted', participle: 'wanted', translation: 'querer', type: 'regular' },
    { base: 'wash', past: 'washed', participle: 'washed', translation: 'lavar', type: 'regular' },
    { base: 'watch', past: 'watched', participle: 'watched', translation: 'ver/observar', type: 'regular' },
    { base: 'work', past: 'worked', participle: 'worked', translation: 'trabajar', type: 'regular' }
];

// ==================================================================================
// 2. CONFIGURACIÓN DE ESTADO Y UTILERÍAS
// ==================================================================================

/**
 * Estado global para el juego de emparejar (Matching Game).
 * Almacena la selección actual para compararla con el siguiente clic.
 */
let gameState = {
    matching: {
        selectedElement: null,
        selectedType: null, // 'q' (pregunta) o 'a' (respuesta)
        selectedId: null,
        matchesFound: 0
    }
};

/**
 * util_shuffleArray
 * Algoritmo de Fisher-Yates para mezclar arrays.
 * Se utiliza para que las preguntas no aparezcan siempre en el mismo orden.
 * @param {Array} array - El array a mezclar.
 * @returns {Array} - El array mezclado.
 */
function util_shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * util_cleanString
 * Normaliza cadenas de texto para comparaciones flexibles.
 * Elimina puntuación, espacios extra y convierte a minúsculas.
 * @param {String} str - La cadena a limpiar.
 * @returns {String} - Cadena limpia.
 */
function util_cleanString(str) {
    if (!str) return '';
    return str.toString()
              .trim()
              .toLowerCase()
              .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "") // Elimina puntuación
              .replace(/\s{2,}/g, " "); // Elimina espacios dobles
}

// ==================================================================================
// 3. FUNCIONES DE INICIALIZACIÓN (CORE)
// ==================================================================================

/**
 * initAll
 * Función maestra que se ejecuta cuando el DOM está listo.
 * Orquesta la renderización de todos los componentes.
 */
function initAll() {
    console.log("Sistema de aprendizaje iniciado...");
    console.log(`Cargados: ${cardsData.length} Flashcards, ${verbsData.length} Verbos.`);

    // 1. Renderizado Estático / Informativo
    renderLegend();
    renderCards(); // Flashcards
    renderVerbs('all'); // Tabla de verbos completa por defecto

    // 2. Renderizado de Actividades Interactivas
    // Mezclamos los datos antes de renderizar para variedad
    renderFillBlanks(util_shuffleArray([...fillBlanksData]).slice(0, 15)); 
    renderWordOrder(util_shuffleArray([...wordOrderData]).slice(0, 15));
    renderQuiz(util_shuffleArray([...quizData]).slice(0, 15));
    
    // 3. Inicialización de Juegos
    initMatchingGame(); 
    
    // 4. Actualización de contadores de UI
    updateCardCount();
}

// ==================================================================================
// 4. RENDERIZADO DE COMPONENTES UI
// ==================================================================================

/**
 * renderLegend
 * Crea la leyenda de colores en la parte superior basada en `legendData`.
 */
function renderLegend() {
    const container = document.getElementById('legend');
    if(!container) return;
    
    container.innerHTML = '';
    legendData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'legend-item';
        div.onclick = () => filterByUnit(item.unit);
        
        // HTML interno
        div.innerHTML = `
            <div class="color-box ${item.unit}-color"></div>
            <span>${item.name}</span>
        `;
        container.appendChild(div);
    });
}

/**
 * renderCards
 * Genera las tarjetas de memoria (Flashcards) en el grid.
 */
function renderCards() {
    const container = document.getElementById('cardContainer');
    if(!container) return;
    
    container.innerHTML = '';
    
    // Procesamos todas las tarjetas
    cardsData.forEach((card, index) => {
        // Crear estructura HTML de la tarjeta
        const cardHTML = `
        <div class="card unit-${card.unit}" id="card-${index}" onclick="this.classList.toggle('flipped')">
            <div class="card-inner">
                <div class="card-front ${card.unit}-color">
                    <div class="question">${card.question}</div>
                    <div class="unit-badge">${getUnitName(card.unit)}</div>
                </div>
                <div class="card-back ${card.unit}-back">
                    <div class="answer">${card.answer}</div>
                </div>
            </div>
        </div>`;
        
        container.innerHTML += cardHTML;
    });
}

/**
 * getUnitName
 * Helper para obtener nombre legible de la unidad.
 */
function getUnitName(unitCode) {
    const found = legendData.find(l => l.unit === unitCode);
    return found ? found.name : 'General';
}

/**
 * renderVerbs
 * Renderiza la tabla de verbos, filtrando por tipo si es necesario.
 * @param {String} type - 'all', 'regular', o 'irregular'.
 */
function renderVerbs(type) {
    const tbody = document.getElementById('verbsTableBody');
    if(!tbody) return;
    
    tbody.innerHTML = '';
    
    // Filtrar datos
    const filteredVerbs = type === 'all' 
        ? verbsData 
        : verbsData.filter(v => v.type === type);
    
    // Ordenar alfabéticamente
    filteredVerbs.sort((a, b) => a.base.localeCompare(b.base));

    // Generar filas
    filteredVerbs.forEach(verb => {
        const row = `
            <tr>
                <td style="font-weight:bold; color:var(--primary);">${verb.base}</td>
                <td>${verb.past}</td>
                <td>${verb.participle}</td>
                <td>${verb.translation}</td>
                <td><span class="tag-${verb.type}">${verb.type}</span></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

/**
 * renderFillBlanks
 * Genera los ejercicios de rellenar huecos.
 * @param {Array} data - Array de ejercicios a renderizar.
 */
function renderFillBlanks(data) {
    const container = document.getElementById('fillBlanksContainer');
    if(!container) return;
    
    let htmlContent = '';
    data.forEach((item, i) => {
        const inputId = `fb-input-${i}`;
        const resultId = `fb-res-${i}`;
        
        htmlContent += `
        <div class="exercise">
            <p><strong>${i+1}.</strong> ${item.q}</p>
            <div class="input-group">
                <input type="text" id="${inputId}" placeholder="Respuesta..." data-correct="${item.a}" autocomplete="off">
            </div>
            <button class="btn btn-check" onclick="validateFillBlank('${inputId}', '${resultId}')">Verificar</button>
            <div class="result" id="${resultId}"></div>
        </div>`;
    });
    
    container.innerHTML = htmlContent;
}

/**
 * renderWordOrder
 * Genera los ejercicios de ordenar palabras.
 * @param {Array} data - Array de ejercicios.
 */
function renderWordOrder(data) {
    const container = document.getElementById('wordOrderContainer');
    if(!container) return;
    
    let htmlContent = '';
    data.forEach((item, i) => {
        const inputId = `wo-input-${i}`;
        const resultId = `wo-res-${i}`;
        
        htmlContent += `
        <div class="exercise">
            <p><strong>${i+1}.</strong> ${item.q}</p>
            <div class="input-group">
                <input type="text" id="${inputId}" placeholder="Ordena..." data-correct="${item.a}" autocomplete="off">
            </div>
            <button class="btn btn-check" onclick="validateWordOrder('${inputId}', '${resultId}')">Verificar</button>
            <div class="result" id="${resultId}"></div>
        </div>`;
    });
    
    container.innerHTML = htmlContent;
}

/**
 * renderQuiz
 * Genera las preguntas de opción múltiple.
 * @param {Array} data - Array de preguntas.
 */
function renderQuiz(data) {
    const container = document.getElementById('quizContainer');
    if(!container) return;
    
    let htmlContent = '';
    data.forEach((item, i) => {
        let optsHTML = '';
        item.opts.forEach(opt => {
            optsHTML += `
            <div class="quiz-option" onclick="selectQuizOption(this)">
                <input type="radio" name="quiz-q-${i}" value="${opt.v}" style="display:none;"> 
                <span class="opt-letter">${opt.v.toUpperCase()})</span> ${opt.t}
            </div>`;
        });
        htmlContent += `
        <div class="exercise quiz-item" data-correct="${item.ans}" id="quiz-box-${i}">
            <p><strong>${i+1}.</strong> ${item.q}</p>
            <div class="quiz-options">${optsHTML}</div>
            <div class="result" id="quiz-res-${i}" style="margin-top:10px;"></div>
        </div>`;
    });
    
    container.innerHTML = htmlContent;
}

// ==================================================================================
// 5. LÓGICA DEL JUEGO DE EMPAREJAR (MATCHING GAME)
// ==================================================================================

/**
 * initMatchingGame
 * Prepara e inicia el juego de memoria.
 */
function initMatchingGame() {
    gameState.matching = { selectedElement: null, selectedType: null, selectedId: null, matchesFound: 0 };
    const container = document.getElementById('matchingGameContainer');
    const resultDiv = document.getElementById('resultMatching');
    
    if(!container) return;
    
    container.innerHTML = '';
    if(resultDiv) {
        resultDiv.style.display = 'none';
        resultDiv.textContent = '';
        resultDiv.className = 'result';
    }

    const gameSubset = util_shuffleArray([...matchingData]).slice(0, 8);
    const colLeft = document.createElement('div'); colLeft.className = 'match-column';
    const colRight = document.createElement('div'); colRight.className = 'match-column';

    const leftItems = [...gameSubset];
    const rightItems = util_shuffleArray([...gameSubset]);

    leftItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'match-card';
        card.textContent = item.q;
        card.dataset.type = 'q';
        card.dataset.id = item.id;
        card.onclick = () => handleMatchClick(card);
        colLeft.appendChild(card);
    });

    rightItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'match-card';
        card.textContent = item.a;
        card.dataset.type = 'a';
        card.dataset.id = item.id;
        card.onclick = () => handleMatchClick(card);
        colRight.appendChild(card);
    });

    container.appendChild(colLeft);
    container.appendChild(colRight);
}

function renderMatchingGame() {
    initMatchingGame();
}

function handleMatchClick(element) {
    if (element.classList.contains('matched')) return;
    if (!gameState.matching.selectedElement) {
        element.classList.add('selected');
        gameState.matching.selectedElement = element;
        gameState.matching.selectedType = element.dataset.type;
        gameState.matching.selectedId = element.dataset.id;
        return;
    }

    const first = gameState.matching.selectedElement;
    const second = element;

    if (first === second) {
        first.classList.remove('selected');
        gameState.matching.selectedElement = null;
        return;
    }

    if (gameState.matching.selectedType === second.dataset.type) {
        first.classList.remove('selected');
        second.classList.add('selected');
        gameState.matching.selectedElement = second;
        gameState.matching.selectedId = second.dataset.id;
        return;
    }

    if (gameState.matching.selectedId === second.dataset.id) {
        // Match Correcto
        first.classList.remove('selected'); second.classList.remove('selected');
        first.classList.add('matched'); second.classList.add('matched');
        gameState.matching.selectedElement = null;
        
        // Verificar victoria
        if (document.querySelectorAll('.match-card:not(.matched)').length === 0) {
            const r = document.getElementById('resultMatching');
            r.textContent = "¡Excelente! Has completado todas las parejas.";
            r.className = "result correct";
            r.style.display = "block";
        }
    } else {
        // Match Incorrecto
        first.classList.add('error'); second.classList.add('error');
        setTimeout(() => {
            first.classList.remove('selected', 'error');
            second.classList.remove('selected', 'error');
            gameState.matching.selectedElement = null;
        }, 800);
    }
}

// ==================================================================================
// 6. FUNCIONES DE VALIDACIÓN (EJERCICIOS INDIVIDUALES)
// ==================================================================================

function validateFillBlank(inputId, resultId) {
    const input = document.getElementById(inputId);
    const resultDiv = document.getElementById(resultId);
    const userAnswer = util_cleanString(input.value);
    const correctAnswer = util_cleanString(input.dataset.correct);
    
    resultDiv.style.display = 'block';
    
    if (userAnswer === correctAnswer) {
        resultDiv.textContent = "¡Correcto!";
        resultDiv.className = "result correct";
        input.style.borderColor = "var(--accent)";
    } else {
        resultDiv.innerHTML = `Incorrecto. La respuesta era: <strong>${input.dataset.correct}</strong>`;
        resultDiv.className = "result incorrect";
        input.style.borderColor = "#EF4444";
    }
}

function validateWordOrder(inputId, resultId) {
    const input = document.getElementById(inputId);
    const resultDiv = document.getElementById(resultId);
    const userAnswer = util_cleanString(input.value);
    const correctAnswer = util_cleanString(input.dataset.correct);
    
    resultDiv.style.display = 'block';
    
    if (userAnswer === correctAnswer) {
        resultDiv.textContent = "¡Perfecto!";
        resultDiv.className = "result correct";
    } else {
        resultDiv.innerHTML = `Orden correcto: <br><em>${input.dataset.correct}</em>`;
        resultDiv.className = "result incorrect";
    }
}

// ==================================================================================
// 7. LÓGICA DE UI PARA EL QUIZ
// ==================================================================================

function selectQuizOption(optionElement) {
    const exerciseContainer = optionElement.closest('.quiz-item');
    const siblings = exerciseContainer.querySelectorAll('.quiz-option');
    siblings.forEach(sib => sib.classList.remove('selected'));
    optionElement.classList.add('selected');
    const radio = optionElement.querySelector('input[type="radio"]');
    if(radio) radio.checked = true;
}

function checkQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    const questions = quizContainer.querySelectorAll('.quiz-item');
    let correctCount = 0;
    let answeredCount = 0;
    
    questions.forEach((qDiv, index) => {
        const resultDiv = document.getElementById(`quiz-res-${index}`);
        const selectedRadio = qDiv.querySelector('input[type="radio"]:checked');
        const correctVal = qDiv.dataset.correct;
        
        resultDiv.style.display = 'block';
        
        if (!selectedRadio) {
            resultDiv.textContent = "Sin responder";
            resultDiv.className = "result incorrect";
            return;
        }
        
        answeredCount++;
        
        if (selectedRadio.value === correctVal) {
            correctCount++;
            resultDiv.textContent = "Correcto";
            resultDiv.className = "result correct";
        } else {
            resultDiv.textContent = `Incorrecto`;
            resultDiv.className = "result incorrect";
        }
    });
    
    const globalRes = document.getElementById('resultQuiz');
    globalRes.style.display = 'block';
    
    if (answeredCount < questions.length) {
        globalRes.textContent = `Por favor responde todas (${answeredCount}/${questions.length})`;
        globalRes.className = "result incorrect";
    } else {
        const percentage = Math.round((correctCount / questions.length) * 100);
        globalRes.textContent = `Resultado: ${correctCount}/${questions.length} (${percentage}%)`;
        globalRes.className = percentage >= 70 ? "result correct" : "result incorrect";
    }
}

// ==================================================================================
// 8. CÁLCULO FINAL DE PUNTUACIÓN
// ==================================================================================

function calculateGlobalScore() {
    let points = 0;
    let totalItems = 0;
    
    // Fill
    document.querySelectorAll('#fillBlanksContainer input').forEach(inp => {
        totalItems++;
        if (util_cleanString(inp.value) === util_cleanString(inp.dataset.correct)) points++;
    });

    // Order
    document.querySelectorAll('#wordOrderContainer input').forEach(inp => {
        totalItems++;
        if (util_cleanString(inp.value) === util_cleanString(inp.dataset.correct)) points++;
    });

    // Match (0.5 por pareja)
    points += (document.querySelectorAll('.match-card.matched').length / 2); 
    totalItems += (document.querySelectorAll('.match-card').length / 2);

    // Quiz
    document.querySelectorAll('.quiz-item').forEach(item => {
        totalItems++;
        const selected = item.querySelector('input:checked');
        if (selected && selected.value === item.dataset.correct) points++;
    });

    // UI
    const finalDiv = document.getElementById('globalScoreResult');
    finalDiv.classList.remove('hidden');
    finalDiv.style.display = 'block';
    
    const percentage = totalItems > 0 ? Math.round((points / totalItems) * 100) : 0;
    let cssClass = percentage >= 90 ? 'score-high' : (percentage >= 70 ? 'score-mid' : 'score-low');
    
    finalDiv.className = `global-result ${cssClass}`;
    finalDiv.innerHTML = `
        <h3>Calificación Final</h3>
        <div style="font-size: 3rem; margin: 10px 0;">${percentage}%</div>
        <p>Puntos: ${points} / ${totalItems}</p>
    `;
    finalDiv.scrollIntoView({ behavior: 'smooth' });
}

// ==================================================================================
// 9. UTILERÍAS UI & EVENTOS
// ==================================================================================

/**
 * toggleSection
 * Función genérica para colapsar/expandir secciones.
 * ESENCIAL PARA EL HTML NUEVO.
 */
function toggleSection(contentId, btnElement) {
    const content = document.getElementById(contentId);
    if (!content) return;
    
    // Toggle clase CSS
    const isHidden = content.classList.toggle('collapsed-content');
    
    // Rotar icono
    const icon = btnElement.querySelector('i');
    if (icon) {
        icon.className = isHidden ? 'fas fa-chevron-down' : 'fas fa-chevron-up';
    }
}

let currentUnitFilter = null;

function filterByUnit(unit) {
    currentUnitFilter = currentUnitFilter === unit ? null : unit;
    
    // Actualizar opacidad de la leyenda
    document.querySelectorAll('.legend-item').forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
        if (currentUnitFilter && !item.innerHTML.includes(`${unit}-color`)) {
            item.style.opacity = '0.4';
        } else if (currentUnitFilter) {
            item.style.transform = 'scale(1.05)';
        }
    });

    // Filtrar tarjetas
    const allCards = document.querySelectorAll('.card');
    let visibleCount = 0;
    
    allCards.forEach(card => {
        if (!currentUnitFilter || card.classList.contains(`unit-${currentUnitFilter}`)) {
            card.classList.remove('hidden');
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.classList.add('hidden');
            card.style.display = 'none';
        }
    });

    updateCardCount(visibleCount);
}

function updateCardCount(count = null) {
    const display = document.getElementById('cardCount');
    if (!display) return;
    
    if (count === null) count = document.querySelectorAll('.card').length;
    const total = cardsData.length;
    
    display.textContent = currentUnitFilter ? `Mostrando: ${count} (Filtro Activo)` : `Mostrando todas (${total})`;
}

function filterVerbs(type, btnElement) {
    document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
    if(btnElement) btnElement.classList.add('active');
    renderVerbs(type);
}

// Listeners de carga del documento
document.addEventListener('DOMContentLoaded', () => {
    initAll();

    document.getElementById('flipAllBtn').addEventListener('click', () => {
        document.querySelectorAll('.card').forEach(c => {
            if(c.style.display !== 'none') c.classList.add('flipped');
        });
    });

    document.getElementById('resetAllBtn').addEventListener('click', () => {
        document.querySelectorAll('.card').forEach(c => c.classList.remove('flipped'));
    });

    document.getElementById('shuffleBtn').addEventListener('click', () => {
        const container = document.getElementById('cardContainer');
        for (let i = container.children.length; i >= 0; i--) {
            container.appendChild(container.children[Math.random() * i | 0]);
        }
    });

    document.getElementById('toggleTipsBtn').addEventListener('click', function() {
        const tipCards = document.querySelectorAll('.unit-tips');
        let isHidden = false;
        tipCards.forEach(c => {
            if (c.style.display === 'none') {
                c.style.display = 'block';
                isHidden = false;
            } else {
                c.style.display = 'none';
                isHidden = true;
            }
        });
        this.innerHTML = isHidden ? '<i class="fas fa-eye"></i> Mostrar Consejos' : '<i class="fas fa-eye-slash"></i> Ocultar Consejos';
        updateCardCount();
    });
});
