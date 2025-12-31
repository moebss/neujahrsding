// ===========================
// INTERNATIONALIZATION (i18n)
// ===========================

const translations = {
    de: {
        // Header
        'header-title': 'Dein persönlicher Neujahrsgruß 2026',
        'header-subtitle': 'Erstelle einzigartige, herzliche Neujahrswünsche in Sekunden',

        // Form
        'form-title': 'Erzähl mir mehr 🎊',
        'label-name': 'Name der Person',
        'placeholder-name': 'z.B. Anna, Michael, Familie Schmidt...',
        'label-relationship': 'Beziehung / Verhältnis',
        'option-select': 'Bitte wählen...',
        'option-friend': 'Freundschaft',
        'option-romantic': 'Romantisch / Partner',
        'option-family': 'Familie',
        'option-colleague': 'Arbeitskollege/in',
        'option-boss': 'Chef/in',
        'option-acquaintance': 'Bekannte/r',
        'option-mentor': 'Mentor/in',
        'label-info': 'Besondere Infos (optional)',
        'placeholder-info': 'z.B. Hobbys, gemeinsame Erlebnisse im Jahr, besondere Wünsche für 2026...',
        'label-tone': 'Stil / Tonalität',
        'tone-warm': 'Warm & Herzlich',
        'tone-funny': 'Humorvoll & Lustig',
        'tone-formal': 'Formell & Professionell',
        'tone-poetic': 'Poetisch & Kreativ',
        'tone-short': 'Kurz & Knackig',
        'btn-generate': '✨ Neujahrsgruß generieren ✨',

        // Output
        'output-title': 'Dein persönlicher Gruß 🎉',
        'btn-copy': 'Text kopieren',
        'btn-whatsapp': 'Per WhatsApp teilen',
        'btn-email': 'Per E-Mail senden',
        'btn-download': 'Als Bild speichern',
        'btn-new': '🎊 Neuen Gruß erstellen',

        // Footer
        'footer': 'Ein Projekt von Alexander Rheindorf | Frohes neues Jahr 2026! 🎆'
    },
    en: {
        'header-title': 'Your Personal New Year\'s Greeting 2026',
        'header-subtitle': 'Create unique, heartfelt New Year\'s wishes in seconds',
        'form-title': 'Tell me more 🎊',
        'label-name': 'Person\'s Name',
        'placeholder-name': 'e.g. Anna, Michael, Smith Family...',
        'label-relationship': 'Relationship',
        'option-select': 'Please select...',
        'option-friend': 'Friendship',
        'option-romantic': 'Romantic / Partner',
        'option-family': 'Family',
        'option-colleague': 'Colleague',
        'option-boss': 'Boss',
        'option-acquaintance': 'Acquaintance',
        'option-mentor': 'Mentor',
        'label-info': 'Special Info (optional)',
        'placeholder-info': 'e.g. hobbies, shared experiences this year, special wishes for 2026...',
        'label-tone': 'Style / Tone',
        'tone-warm': 'Warm & Heartfelt',
        'tone-funny': 'Humorous & Fun',
        'tone-formal': 'Formal & Professional',
        'tone-poetic': 'Poetic & Creative',
        'tone-short': 'Short & Sweet',
        'btn-generate': '✨ Generate New Year\'s Greeting ✨',
        'output-title': 'Your Personal Greeting 🎉',
        'btn-copy': 'Copy Text',
        'btn-whatsapp': 'Share via WhatsApp',
        'btn-email': 'Send via Email',
        'btn-download': 'Save as Image',
        'btn-new': '🎊 Create New Greeting',
        'footer': 'A project by Alexander Rheindorf | Happy New Year 2026! 🎆'
    },
    tr: {
        'header-title': 'Kişisel Yeni Yıl Kutlamanız 2026',
        'header-subtitle': 'Saniyeler içinde benzersiz, içten yeni yıl dileklerinizi oluşturun',
        'form-title': 'Bana daha fazla anlat 🎊',
        'label-name': 'Kişinin Adı',
        'placeholder-name': 'örn. Ayşe, Mehmet, Yılmaz Ailesi...',
        'label-relationship': 'İlişki',
        'option-select': 'Lütfen seçin...',
        'option-friend': 'Arkadaşlık',
        'option-romantic': 'Romantik / Partner',
        'option-family': 'Aile',
        'option-colleague': 'İş Arkadaşı',
        'option-boss': 'Patron',
        'option-acquaintance': 'Tanıdık',
        'option-mentor': 'Mentor',
        'label-info': 'Özel Bilgiler (isteğe bağlı)',
        'placeholder-info': 'örn. hobiler, bu yıl yaşananlar, 2026 için özel dilekler...',
        'label-tone': 'Stil / Ton',
        'tone-warm': 'Sıcak & İçten',
        'tone-funny': 'Esprili & Neşeli',
        'tone-formal': 'Resmi & Profesyonel',
        'tone-poetic': 'Şiirsel & Yaratıcı',
        'tone-short': 'Kısa & Öz',
        'btn-generate': '✨ Yeni Yıl Kutlaması Oluştur ✨',
        'output-title': 'Kişisel Kutlamanız 🎉',
        'btn-copy': 'Metni Kopyala',
        'btn-whatsapp': 'WhatsApp ile Paylaş',
        'btn-email': 'E-posta ile Gönder',
        'btn-download': 'Resim Olarak Kaydet',
        'btn-new': '🎊 Yeni Kutlama Oluştur',
        'footer': 'Alexander Rheindorf Projesi | Mutlu Yıllar 2026! 🎆'
    },
    es: {
        'header-title': 'Tu Saludo de Año Nuevo Personal 2026',
        'header-subtitle': 'Crea deseos únicos y sinceros de Año Nuevo en segundos',
        'form-title': 'Cuéntame más 🎊',
        'label-name': 'Nombre de la Persona',
        'placeholder-name': 'ej. Ana, Miguel, Familia García...',
        'label-relationship': 'Relación',
        'option-select': 'Por favor seleccione...',
        'option-friend': 'Amistad',
        'option-romantic': 'Romántico / Pareja',
        'option-family': 'Familia',
        'option-colleague': 'Colega',
        'option-boss': 'Jefe/a',
        'option-acquaintance': 'Conocido/a',
        'option-mentor': 'Mentor/a',
        'label-info': 'Información Especial (opcional)',
        'placeholder-info': 'ej. pasatiempos, experiencias compartidas este año, deseos especiales para 2026...',
        'label-tone': 'Estilo / Tono',
        'tone-warm': 'Cálido & Sincero',
        'tone-funny': 'Divertido & Gracioso',
        'tone-formal': 'Formal & Profesional',
        'tone-poetic': 'Poético & Creativo',
        'tone-short': 'Corto & Dulce',
        'btn-generate': '✨ Generar Saludo de Año Nuevo ✨',
        'output-title': 'Tu Saludo Personal 🎉',
        'btn-copy': 'Copiar Texto',
        'btn-whatsapp': 'Compartir por WhatsApp',
        'btn-email': 'Enviar por Correo',
        'btn-download': 'Guardar como Imagen',
        'btn-new': '🎊 Crear Nuevo Saludo',
        'footer': 'Un proyecto de Alexander Rheindorf | ¡Feliz Año Nuevo 2026! 🎆'
    },
    fr: {
        'header-title': 'Votre Vœu de Nouvel An Personnel 2026',
        'header-subtitle': 'Créez des vœux uniques et sincères pour le Nouvel An en quelques secondes',
        'form-title': 'Dites-m\'en plus 🎊',
        'label-name': 'Nom de la Personne',
        'placeholder-name': 'ex. Anne, Michel, Famille Dupont...',
        'label-relationship': 'Relation',
        'option-select': 'Veuillez sélectionner...',
        'option-friend': 'Amitié',
        'option-romantic': 'Romantique / Partenaire',
        'option-family': 'Famille',
        'option-colleague': 'Collègue',
        'option-boss': 'Chef/fe',
        'option-acquaintance': 'Connaissance',
        'option-mentor': 'Mentor',
        'label-info': 'Informations Spéciales (facultatif)',
        'placeholder-info': 'ex. loisirs, expériences partagées cette année, souhaits spéciaux pour 2026...',
        'label-tone': 'Style / Ton',
        'tone-warm': 'Chaleureux & Sincère',
        'tone-funny': 'Humoristique & Amusant',
        'tone-formal': 'Formel & Professionnel',
        'tone-poetic': 'Poétique & Créatif',
        'tone-short': 'Court & Simple',
        'btn-generate': '✨ Générer Vœu de Nouvel An ✨',
        'output-title': 'Votre Vœu Personnel 🎉',
        'btn-copy': 'Copier le Texte',
        'btn-whatsapp': 'Partager via WhatsApp',
        'btn-email': 'Envoyer par Email',
        'btn-download': 'Enregistrer comme Image',
        'btn-new': '🎊 Créer un Nouveau Vœu',
        'footer': 'Un projet d\'Alexander Rheindorf | Bonne Année 2026! 🎆'
    },
    it: {
        'header-title': 'Il Tuo Augurio di Capodanno Personale 2026',
        'header-subtitle': 'Crea auguri unici e sinceri di Capodanno in pochi secondi',
        'form-title': 'Dimmi di più 🎊',
        'label-name': 'Nome della Persona',
        'placeholder-name': 'es. Anna, Michele, Famiglia Rossi...',
        'label-relationship': 'Relazione',
        'option-select': 'Si prega di selezionare...',
        'option-friend': 'Amicizia',
        'option-romantic': 'Romantico / Partner',
        'option-family': 'Famiglia',
        'option-colleague': 'Collega',
        'option-boss': 'Capo',
        'option-acquaintance': 'Conoscente',
        'option-mentor': 'Mentore',
        'label-info': 'Informazioni Speciali (opzionale)',
        'placeholder-info': 'es. hobby, esperienze condivise quest\'anno, desideri speciali per il 2026...',
        'label-tone': 'Stile / Tono',
        'tone-warm': 'Caloroso & Sincero',
        'tone-funny': 'Divertente & Allegro',
        'tone-formal': 'Formale & Professionale',
        'tone-poetic': 'Poetico & Creativo',
        'tone-short': 'Breve & Dolce',
        'btn-generate': '✨ Genera Augurio di Capodanno ✨',
        'output-title': 'Il Tuo Augurio Personale 🎉',
        'btn-copy': 'Copia Testo',
        'btn-whatsapp': 'Condividi via WhatsApp',
        'btn-email': 'Invia via Email',
        'btn-download': 'Salva come Immagine',
        'btn-new': '🎊 Crea Nuovo Augurio',
        'footer': 'Un progetto di Alexander Rheindorf | Felice Anno Nuovo 2026! 🎆'
    },
    bg: {
        'header-title': 'Вашето Лично Новогодишно Пожелание 2026',
        'header-subtitle': 'Създайте уникални, сърдечни новогодишни пожелания за секунди',
        'form-title': 'Разкажи ми повече 🎊',
        'label-name': 'Име на Човека',
        'placeholder-name': 'напр. Ана, Михаил, Семейство Иванови...',
        'label-relationship': 'Отношение',
        'option-select': 'Моля изберете...',
        'option-friend': 'Приятелство',
        'option-romantic': 'Романтично / Партньор',
        'option-family': 'Семейство',
        'option-colleague': 'Колега',
        'option-boss': 'Шеф',
        'option-acquaintance': 'Познат',
        'option-mentor': 'Ментор',
        'label-info': 'Специална Информация (по избор)',
        'placeholder-info': 'напр. хобита, споделени преживявания тази година, специални желания за 2026...',
        'label-tone': 'Стил / Тон',
        'tone-warm': 'Топъл & Сърдечен',
        'tone-funny': 'Хумористичен & Забавен',
        'tone-formal': 'Официален & Професионален',
        'tone-poetic': 'Поетичен & Творчески',
        'tone-short': 'Кратък & Сладък',
        'btn-generate': '✨ Генерирай Новогодишно Пожелание ✨',
        'output-title': 'Вашето Лично Пожелание 🎉',
        'btn-copy': 'Копирай Текст',
        'btn-whatsapp': 'Сподели чрез WhatsApp',
        'btn-email': 'Изпрати чрез имейл',
        'btn-download': 'Запази като изображение',
        'btn-new': '🎊 Създай нов поздрав',
        'footer': 'Проект на Alexander Rheindorf | Честита Нова Година 2026! 🎆'
    }
};

let currentLanguage = 'de';

/**
 * Change the current language
 */
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateUILanguage();
}

/**
 * Update all UI elements with current language
 */
function updateUILanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            el.textContent = translations[currentLanguage][key];
        }
    });

    // Update placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            el.placeholder = translations[currentLanguage][key];
        }
    });

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLanguage);
    });
}

// ===========================
// TEXT GENERATION LOGIC
// ===========================


/**
 * Main function to generate a personalized New Year message using the SECURE BACKEND
 */
async function generateNewYearMessage(name, relation, info, tone) {
    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                relation,
                info,
                tone,
                lang: currentLanguage
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.warn('API Warning:', data.error || response.statusText);
            throw new Error('API Request failed');
        }

        // Clean up Markdown-style formatting (e.g. **bold**)
        let cleanText = data.text.replace(/\*\*(.*?)\*\*/g, '$1').replace(/\*(.*?)\*/g, '$1');

        // Remove generic signatures if AI adds them despite instructions
        cleanText = cleanText.replace(/\n\s*[-–]?\s*(Dein Name|Dein Absender|Ihr Name|Your Name|\[.*?\])\s*$/i, '').trim();

        // Save to History (if function exists)
        if (typeof saveToHistory === 'function') {
            saveToHistory(cleanText, name, currentLanguage);
        }

        return cleanText;
    } catch (error) {
        return getLocalFallbackMessage(name, relation, info, tone);
    }
}


/**
 * Fallback function using original local logic
 */
function getLocalFallbackMessage(name, relation, info, tone) {
    const message = {
        greeting: getGreeting(name, relation, tone),
        body: getMessageBody(relation, info, tone),
        wishes: getWishes(relation, tone),
        closing: getClosing(relation, tone)
    };
    return `${message.greeting}\n\n${message.body}\n\n${message.wishes}\n\n${message.closing}`;
}


// ===========================
// GREETING GENERATORS
// ===========================
function getGreeting(name, relation, tone) {
    const greetings = {
        warm: [
            `Liebe/r ${name},`,
            `Mein/e liebe/r ${name},`,
            `Hallo ${name}, mein/e Liebe/r,`
        ],
        funny: [
            `Hey ${name}, du Rakete! 🚀`,
            `Yo ${name}!`,
            `Na ${name}, bereit für 2026?`
        ],
        formal: [
            `Sehr geehrte/r ${name},`,
            `Liebe/r ${name},`,
            `Guten Tag ${name},`
        ],
        poetic: [
            `${name}, wie die Sterne am Himmelszelt,`,
            `An ${name}, mit den besten Wünschen der Welt,`,
            `Für ${name}, zum Jahreswechsel gedacht,`
        ],
        short: [
            `Hey ${name}!`,
            `Hi ${name},`,
            `${name}!`
        ]
    };

    return randomChoice(greetings[tone]);
}

// ===========================
// MESSAGE BODY GENERATORS
// ===========================
function getMessageBody(relation, info, tone) {
    const bodies = {
        friend: {
            warm: [
                `Ein weiteres Jahr neigt sich dem Ende zu, und ich wollte Dir einfach sagen, wie dankbar ich bin, Dich in meinem Leben zu haben. ${info ? `Besonders ${info.toLowerCase()} wird mir immer in Erinnerung bleiben.` : 'Unsere Freundschaft bedeutet mir unglaublich viel.'} Auf ein fantastisches 2026 voller gemeinsamer Abenteuer!`,
                `Was für ein Jahr das war! ${info ? info + ' – ' : ''}Und ich bin so froh, dass wir es gemeinsam erlebt haben. Lass uns 2026 noch unvergesslicher machen!`
            ],
            funny: [
                `2025 ist vorbei, und wir haben es überlebt! 🎉 ${info ? `Vor allem ${info.toLowerCase()} war ja wild.` : 'Das allein ist schon ein Grund zum Feiern!'} Auf ein 2026, in dem wir noch mehr Unsinn zusammen anstellen!`,
                `Neues Jahr, neue Chancen, gleich tolle Freundschaft! ${info ? `${info} war legendär – ` : ''}Lass uns 2026 noch mehr Chaos und Spaß kreieren!`
            ],
            formal: [
                `Das Jahr 2025 geht zu Ende, und ich möchte die Gelegenheit nutzen, Dir für Deine Freundschaft zu danken. ${info ? info : 'Ich schätze unsere gemeinsame Zeit sehr.'} Auf ein erfolgreiches 2026!`
            ],
            poetic: [
                `Wie Funken im Silvesternacht-Wind, so tanzten unsere Wege durchs Jahr. ${info ? info + ' – ' : ''}Ein Leuchten, das niemals vergeht. Möge 2026 uns neue Sterne schenken.`,
                `In der Stille zwischen den Jahren, zwischen Gestern und Morgen, möchte ich Dir danken. ${info ? 'Für ' + info.toLowerCase() + ', ' : ''}Für Deine Freundschaft, für jeden Moment.`
            ],
            short: [
                `2025 war großartig mit Dir! ${info ? info : ''} Auf 2026! 🎊`,
                `Danke für 2025! ${info ? info + ' ' : ''}Freu mich auf 2026 mit Dir!`
            ]
        },
        romantic: {
            warm: [
                `Ein Jahr geht zu Ende, und mit Dir an meiner Seite war jeder Tag besonders. ${info ? info + ' – ' : ''}Du bist mein größtes Glück. Ich freue mich auf alles, was 2026 für uns bereithält.`,
                `365 Tage mit Dir, und jeder einzelne war ein Geschenk. ${info ? 'Besonders ' + info.toLowerCase() + ' zeigt mir immer wieder, ' : ''}Wie besonders Du bist. Auf unser gemeinsames 2026, mein Schatz!`
            ],
            funny: [
                `Ein Jahr älter, aber Du wirst nur besser! 😏 ${info ? info + ' ' : ''}2026 wird unser Jahr – mehr Liebe, mehr Lachen, mehr von uns!`,
                `Wir haben 2025 gemeistert! ${info ? info + ' – ' : ''}Und rate mal? 2026 wird noch besser, weil Du dabei bist!`
            ],
            formal: [
                `Zum Jahreswechsel möchte ich Dir von Herzen danken. ${info ? info : 'Unsere gemeinsame Zeit'} bedeutet mir mehr, als Worte ausdrücken können. Auf ein wundervolles 2026 zu zweit.`
            ],
            poetic: [
                `Die Sterne tanzen in der Silvesternacht, und mein Herz tanzt mit ihnen – für Dich. ${info ? info + ' – ' : ''}Wie ein Gedicht, das niemals endet. Möge 2026 unser schönstes Kapitel werden.`,
                `Zwischen Feuerwerk und Champagner, zwischen Wünschen und Träumen, bist Du mein größter. ${info ? 'Du schenktest mir ' + info.toLowerCase() + ', ' : ''}Du schenkst mir jeden Tag das Gefühl von Zuhause.`
            ],
            short: [
                `Mit Dir war 2025 perfekt! ${info ? info : ''} Ich liebe Dich! Auf 2026! ❤️`,
                `Mein Schatz, auf uns in 2026! ${info ? info + ' ' : ''}Love you! 💕`
            ]
        },
        family: {
            warm: [
                `Liebe Familie, ein weiteres Jahr geht zu Ende, und ich bin unendlich dankbar, Euch zu haben. ${info ? info : 'Unsere gemeinsamen Momente'} bedeuten mir die Welt. Auf ein gesundes, glückliches 2026 zusammen!`,
                `Das Jahr neigt sich dem Ende, und ich denke an all die schönen Augenblicke mit Euch. ${info ? 'Besonders ' + info.toLowerCase() + ' ' : ''}Familie ist das Wichtigste. Frohes neues Jahr!`
            ],
            funny: [
                `Wir sind ein Jahr älter, aber noch lange nicht erwachsen! 😄 ${info ? info + ' ' : ''}Auf ein 2026 mit noch mehr Familien-Action!`,
                `Überlebt! Wieder ein Jahr geschafft! ${info ? info + ' – ' : ''}2026, wir sind bereit für Dich!`
            ],
            formal: [
                `Zum Jahreswechsel möchte ich meiner Familie von Herzen danken. ${info ? info : 'Eure Unterstützung und Liebe'} sind unbezahlbar. Auf ein gesegnetes 2026!`
            ],
            poetic: [
                `Wie Wurzeln eines alten Baums, so tief verbunden sind wir. ${info ? info + ' – ' : ''}Durch Stürme und Sonnenschein. Möge 2026 uns noch mehr zusammenschweißen.`
            ],
            short: [
                `Danke für 2025, Familie! ${info ? info : ''} Auf 2026! 🎉`,
                `Familie ist alles! ${info ? info + ' ' : ''}Frohes neues Jahr! ❤️`
            ]
        },
        colleague: {
            warm: [
                `Liebe/r ${name}, ein arbeitsreiches Jahr liegt hinter uns. ${info ? info : 'Die Zusammenarbeit mit Dir'} war großartig. Auf ein erfolgreiches und angenehmes 2026!`,
                `Das Jahr neigt sich dem Ende, und ich wollte mich für die tolle Zusammenarbeit bedanken. ${info ? 'Besonders ' + info.toLowerCase() + ' ' : ''}Auf ein produktives 2026!`
            ],
            funny: [
                `Ein Jahr voller Meetings, Kaffee und Deadlines! 😅 ${info ? info + ' ' : ''}Aber mit Dir im Team macht's Spaß. Auf 2026 – hoffentlich mit mehr Kaffee!`,
                `Wir haben's geschafft! ${info ? info + ' – ' : ''}2026, hier kommen wir!`
            ],
            formal: [
                `Zum Jahreswechsel möchte ich mich für die hervorragende Zusammenarbeit bedanken. ${info ? info : 'Ihre Professionalität und Ihr Engagement'} schätze ich sehr. Auf ein erfolgreiches 2026!`
            ],
            poetic: [
                `Im gemeinsamen Schaffen wächst Vertrauen. ${info ? info + ' ' : ''}Jahr für Jahr, Erfolg für Erfolg. Möge 2026 uns neue Möglichkeiten eröffnen.`
            ],
            short: [
                `Danke für 2025! ${info ? info : ''} Auf ein gutes 2026! 💼`,
                `Super Jahr! ${info ? info + ' ' : ''}Frohes neues Jahr!`
            ]
        },
        boss: {
            warm: [
                `Sehr geehrte/r ${name}, ich möchte mich für Ihre Unterstützung im vergangenen Jahr bedanken. ${info ? info : 'Ihre Führung'} hat mich inspiriert. Auf ein erfolgreiches 2026!`
            ],
            funny: [
                `Chef/in, wir haben ein Jahr überlebt! 🎊 ${info ? info + ' ' : ''}Danke für die Geduld. Auf 2026!`
            ],
            formal: [
                `Zum Jahreswechsel möchte ich Ihnen für Ihre exzellente Führung danken. ${info ? info : 'Ihre Vision und Ihr Engagement'} sind beispielhaft. Ich freue mich auf ein erfolgreiches 2026 unter Ihrer Leitung.`
            ],
            poetic: [
                `Unter Ihrer Führung wachsen wir. ${info ? info + ' ' : ''}Jahr für Jahr, gemeinsam stark.`
            ],
            short: [
                `Vielen Dank für 2025! ${info ? info : ''} Frohes neues Jahr! 👔`
            ]
        },
        acquaintance: {
            warm: [
                `Hallo ${name}, zum Jahreswechsel wollte ich Dir einfach alles Gute wünschen. ${info ? info : 'Es war schön, Dich kennenzulernen.'} Auf ein tolles 2026!`
            ],
            funny: [
                `Hey ${name}! Neues Jahr, neue Möglichkeiten! ${info ? info + ' ' : ''}Lass uns 2026 rocken!`
            ],
            formal: [
                `Sehr geehrte/r ${name}, zum Jahreswechsel möchte ich Ihnen alles Gute wünschen. ${info ? info : ''} Auf ein erfolgreiches 2026!`
            ],
            poetic: [
                `Begegnungen wie Sternschnuppen am Himmel. ${info ? info + ' ' : ''}Kurz, aber leuchtend.`
            ],
            short: [
                `Hi ${name}! ${info ? info : ''} Frohes neues Jahr! 🎊`
            ]
        },
        mentor: {
            warm: [
                `Liebe/r ${name}, ich möchte mich für Ihre Mentorschaft und Unterstützung bedanken. ${info ? info : 'Ihre Weisheit und Geduld'} haben mir sehr geholfen. Auf ein inspirierendes 2026!`
            ],
            funny: [
                `Bester Mentor ever! ${info ? info + ' ' : ''}Danke für alles. Auf 2026! 🌟`
            ],
            formal: [
                `Sehr geehrte/r ${name}, zum Jahreswechsel möchte ich Ihnen für Ihre wertvolle Mentorschaft danken. ${info ? info : 'Ihre Anleitung'} war von unschätzbarem Wert. Auf ein erfolgreiches 2026!`
            ],
            poetic: [
                `Wie ein Leuchtturm im Sturm, so waren Sie für mich. ${info ? info + ' ' : ''}Dankbar folge ich Ihrem Licht ins neue Jahr.`
            ],
            short: [
                `Danke für alles, ${name}! ${info ? info : ''} Frohes neues Jahr! 🙏`
            ]
        }
    };

    const relationBodies = bodies[relation] || bodies.friend;
    const toneBodies = relationBodies[tone] || relationBodies.warm;

    return randomChoice(toneBodies).replace('${name}', name);
}

// ===========================
// WISHES GENERATORS
// ===========================
function getWishes(relation, tone) {
    const wishes = {
        warm: [
            `Ich wünsche Dir für 2026 von Herzen: Gesundheit, Glück und die Erfüllung all Deiner Träume. Möge das neue Jahr Dir viele wunderbare Momente schenken!`,
            `Für 2026 wünsche ich Dir alles erdenklich Gute. Mögen all Deine Wünsche in Erfüllung gehen und jeder Tag ein kleines Abenteuer sein!`,
            `Auf ein Jahr voller Freude, Erfolg und magischer Augenblicke. Möge 2026 Dir alles bringen, was Dein Herz begehrt!`
        ],
        funny: [
            `2026-Wünsche: Mehr Pizza, weniger Stress, gleich viel Spaß! Und vielleicht endlich dieses Fitness-Abo nutzen... oder auch nicht! 😄`,
            `Ich wünsche Dir für 2026: Schnelles WLAN, guten Kaffee und jede Menge gute Vibes! Und dass alle grünen Ampeln auf Dich warten!`,
            `Möge 2026 Dir bringen: Erfolg ohne Stress, Freude ohne Ende und Pizza immer dann, wenn Du sie brauchst! 🍕`
        ],
        formal: [
            `Für das Jahr 2026 wünsche ich Ihnen Gesundheit, beruflichen Erfolg und persönliches Glück. Möge das neue Jahr all Ihre Erwartungen erfüllen.`,
            `Ich wünsche Ihnen ein erfolgreiches und erfüllendes Jahr 2026. Mögen all Ihre Vorhaben gelingen.`,
            `Auf ein Jahr 2026 voller Erfolg, Zufriedenheit und positiver Entwicklungen.`
        ],
        poetic: [
            `Wie Feuerwerk am Nachthimmel erleuchtet, so möge 2026 Dein Leben erhellen. Mit jedem Funken ein neuer Traum, mit jedem Licht eine neue Hoffnung.`,
            `Das neue Jahr wie eine leere Leinwand, bereit für Deine Farben. Male es bunt, male es kühn, male es wie Du es träumst.`,
            `Mögen die Sterne Dir den Weg weisen, der Wind Dich tragen und das Jahr Dir schenken, was Dein Herz ersehnt.`
        ],
        short: [
            `Alles Gute für 2026! Gesundheit, Glück & Erfolg! ✨`,
            `Auf ein mega 2026 voller toller Momente! 🎉`,
            `2026 wird Dein Jahr! Glaub dran! 🌟`
        ]
    };

    return randomChoice(wishes[tone]);
}

// ===========================
// CLOSING GENERATORS
// ===========================
function getClosing(relation, tone) {
    const closings = {
        friend: {
            warm: [`Mit den besten Wünschen und herzlichen Grüßen`, `Alles Liebe`, `Von Herzen`],
            funny: [`Dein/e verrückte/r Freund/in`, `Bis bald, Rakete! 🚀`, `Cheers!`],
            formal: [`Mit freundlichen Grüßen`, `Beste Grüße`],
            poetic: [`In Freundschaft verbunden`, `Mit leuchtenden Gedanken`],
            short: [`LG`, `Bis dann!`, `✌️`]
        },
        romantic: {
            warm: [`In Liebe, Dein/e...`, `Für immer Dein/e`, `Mit all meiner Liebe`],
            funny: [`Dein Schatz 💕`, `Forever yours! ❤️`],
            formal: [`Mit herzlichen Grüßen`],
            poetic: [`Bis die Sterne verblassen, Dein/e...`, `In ewiger Zuneigung`],
            short: [`Love you! ❤️`, `💕`]
        },
        family: {
            warm: [`Mit Liebe, Eure/r...`, `Von Herzen, Eure/r...`, `Alles Liebe`],
            funny: [`Euer verrücktes Familienmitglied`, `Family forever! 👨‍👩‍👧‍👦`],
            formal: [`Mit herzlichen Grüßen`],
            poetic: [`In Familienliebe verbunden`],
            short: [`LG Familie! ❤️`, `❤️`]
        },
        colleague: {
            warm: [`Mit kollegialen Grüßen`, `Beste Grüße`],
            funny: [`Dein Büro-Buddy`, `Bis Montag! 😅`],
            formal: [`Mit freundlichen Grüßen`, `Hochachtungsvoll`],
            poetic: [`Mit Wertschätzung`],
            short: [`Grüße!`, `👋`]
        },
        boss: {
            warm: [`Mit bestem Dank und freundlichen Grüßen`],
            funny: [`Ihr/e treue/r Mitarbeiter/in`],
            formal: [`Mit vorzüglicher Hochachtung`, `Mit freundlichen Grüßen`],
            poetic: [`Mit Respekt und Dankbarkeit`],
            short: [`Beste Grüße`]
        },
        acquaintance: {
            warm: [`Alles Gute`, `Beste Wünsche`],
            funny: [`Bis bald!`, `Cheers! 🎊`],
            formal: [`Mit freundlichen Grüßen`],
            poetic: [`Mit besten Gedanken`],
            short: [`LG`, `👋`]
        },
        mentor: {
            warm: [`Mit Dankbarkeit und besten Grüßen`],
            funny: [`Ihr dankbarer Schüler`],
            formal: [`Mit vorzüglicher Hochachtung`],
            poetic: [`In tiefer Wertschätzung`],
            short: [`Danke & LG! 🙏`]
        }
    };

    const relationClosings = closings[relation] || closings.friend;
    const toneClosings = relationClosings[tone] || relationClosings.warm;

    return randomChoice(toneClosings);
}

// ===========================
// UTILITY FUNCTIONS
// ===========================
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// ===========================
// INTERACTIVE CURSOR FIREWORKS
// ===========================
class CursorFirework {
    constructor() {
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.colors = ['#ffd700', '#ff006e', '#00d9ff', '#c77dff', '#ff9500', '#fff', '#ffe55c'];
        this.container = document.getElementById('fireworksContainer');
        this.lastEmit = 0;
        this.emitInterval = 30; // milliseconds between particle emissions

        this.init();
    }

    init() {
        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;

            const now = Date.now();
            if (now - this.lastEmit > this.emitInterval) {
                this.createParticle(e.clientX, e.clientY);
                this.lastEmit = now;
            }
        });

        // Start animation loop
        this.animate();

        // Also create random ambient fireworks
        setInterval(() => this.createRandomBurst(), 1500);
    }

    createParticle(x, y) {
        const count = Math.random() * 3 + 2;
        for (let i = 0; i < count; i++) {
            const particle = {
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4 - 2,
                life: 1,
                decay: Math.random() * 0.015 + 0.01,
                size: Math.random() * 4 + 2,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                element: this.createParticleElement()
            };

            this.particles.push(particle);
            this.container.appendChild(particle.element);
        }
    }

    createRandomBurst() {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight * 0.6; // Upper part of screen

        const count = Math.random() * 20 + 15;
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count;
            const speed = Math.random() * 3 + 2;

            const particle = {
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1,
                decay: Math.random() * 0.01 + 0.008,
                size: Math.random() * 3 + 1,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                element: this.createParticleElement()
            };

            this.particles.push(particle);
            this.container.appendChild(particle.element);
        }
    }

    createParticleElement() {
        const el = document.createElement('div');
        el.style.position = 'absolute';
        el.style.borderRadius = '50%';
        el.style.pointerEvents = 'none';
        return el;
    }

    animate() {
        // Update all particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];

            // Update physics
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.15; // gravity
            p.vx *= 0.98; // air resistance
            p.life -= p.decay;

            // Update DOM
            if (p.life > 0) {
                p.element.style.left = p.x + 'px';
                p.element.style.top = p.y + 'px';
                p.element.style.width = p.size + 'px';
                p.element.style.height = p.size + 'px';
                p.element.style.backgroundColor = p.color;
                p.element.style.opacity = p.life;
                p.element.style.boxShadow = `0 0 ${p.size * 2}px ${p.color}`;
            } else {
                // Remove dead particles
                p.element.remove();
                this.particles.splice(i, 1);
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

// ===========================
// SPARKLES ANIMATION
// ===========================
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.fontSize = Math.random() * 20 + 10 + 'px';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animation = 'sparkle-float 3s ease-in-out infinite';
    sparkle.style.opacity = '0';
    sparkle.style.pointerEvents = 'none';

    return sparkle;
}

function startSparkles() {
    const container = document.getElementById('sparkles');

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const sparkle = createSparkle();
            container.appendChild(sparkle);
        }, i * 300);
    }
}

// ===========================
// FORM HANDLING
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('greetingForm');
    const inputSection = document.getElementById('inputSection');
    const outputSection = document.getElementById('outputSection');
    const generatedMessage = document.getElementById('generatedMessage');
    const copyBtn = document.getElementById('copyBtn');
    const whatsappBtn = document.getElementById('whatsappBtn');
    const emailBtn = document.getElementById('emailBtn');
    const newGreetingBtn = document.getElementById('newGreetingBtn');

    let currentMessage = '';

    // Start interactive animations
    new CursorFirework();
    startSparkles();

    // Initialize language from localStorage or default to 'de'
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'de';
    currentLanguage = savedLanguage;
    updateUILanguage();

    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });


    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('recipientName').value.trim();
        const relationship = document.getElementById('relationship').value;
        const additionalInfo = document.getElementById('additionalInfo').value.trim();
        const tone = document.getElementById('tone').value;

        // Visual loading state
        const originalBtnText = document.querySelector('.btn-text').textContent;
        const submitBtn = document.getElementById('generateBtn');
        submitBtn.disabled = true;
        document.querySelector('.btn-text').textContent = currentLanguage === 'de' ? '🪄 Generiere Wunder...' : '🪄 Generating Magic...';

        try {
            // Generate message with AI
            currentMessage = await generateNewYearMessage(name, relationship, additionalInfo, tone);

            // Display message
            generatedMessage.textContent = currentMessage;

            // Show output section with animation
            inputSection.style.display = 'none';
            outputSection.classList.remove('hidden');

            // Scroll to output
            outputSection.scrollIntoView({ behavior: 'smooth' });
        } catch (err) {
            alert('Ups! Etwas ist schief gelaufen. Bitte versuch es nochmal.');
        } finally {
            // Restore button
            submitBtn.disabled = false;
            document.querySelector('.btn-text').textContent = originalBtnText;
        }
    });

    // Copy to clipboard
    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(currentMessage);
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<span class="icon">✓</span> Kopiert!';
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        } catch (err) {
            alert('Fehler beim Kopieren. Bitte manuell kopieren.');
        }
    });

    // Share via WhatsApp
    whatsappBtn.addEventListener('click', () => {
        const encodedMessage = encodeURIComponent(currentMessage);
        window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    });

    // Share via Email
    emailBtn.addEventListener('click', () => {
        const subject = encodeURIComponent('Neujahrsgrüße 2026 🎉');
        const body = encodeURIComponent(currentMessage);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    });

    // Download as Image (Robust "Ghost Container" Method)
    document.getElementById('downloadBtn').addEventListener('click', async () => {
        let messageText = document.getElementById('generatedMessage').innerText;

        // AGGRESSIVE CLEANER: Kill typical placeholders before image generation
        // Removes: "Dein Name", "[Dein Name]", "Ihr Name", "Name", "Absender" at the end of the text
        const badEndings = [
            /Dein Name\s*$/i,
            /\[Dein Name\]\s*$/i,
            /Ihr Name\s*$/i,
            /\[Ihr Name\]\s*$/i,
            /Your Name\s*$/i,
            /\[Your Name\]\s*$/i,
            /Name\s*$/i,
            /\[Name\]\s*$/i,
            /Dein Absender\s*$/i
        ];

        // Apply regex to cut off the end
        badEndings.forEach(regex => {
            messageText = messageText.replace(regex, '');
        });

        // Also clean generic trailing newlines/dashes
        messageText = messageText.replace(/[\n\r\s]+[-–]*[\n\r\s]*$/, '').trim();

        const btnText = document.querySelector('#downloadBtn span[data-i18n]');
        const originalText = btnText ? btnText.textContent : 'Als Bild speichern';

        // Show loading state
        if (btnText) btnText.textContent = '🎨 Generiere Bild...';

        // 1. Create a dedicated export container (off-screen)
        // This ensures consistent width/look regardless of mobile/desktop view
        const exportContainer = document.createElement('div');
        exportContainer.style.position = 'fixed';
        exportContainer.style.left = '-9999px';
        exportContainer.style.top = '0';
        exportContainer.style.width = '800px'; // Fixed width for high quality
        exportContainer.style.padding = '80px 60px';
        exportContainer.style.borderRadius = '40px';
        exportContainer.style.display = 'flex';
        exportContainer.style.flexDirection = 'column';
        exportContainer.style.alignItems = 'center';
        exportContainer.style.justifyContent = 'center';

        // VIBRANT GRADIENT BACKGROUND
        // Radial gradients render much more reliably in html2canvas than linear ones
        exportContainer.style.background = 'radial-gradient(circle at center, #4a0a69 0%, #240046 50%, #120024 100%)';
        exportContainer.style.backgroundColor = '#120024';

        exportContainer.style.color = '#ffffff';
        exportContainer.style.fontFamily = "'Outfit', sans-serif";
        exportContainer.style.textAlign = 'center';
        exportContainer.style.boxShadow = '0 30px 80px rgba(0,0,0,0.6)';
        exportContainer.style.border = '6px solid #ffd700';

        // 2. Build the content
        exportContainer.innerHTML = `
            <div style="font-size: 48px; margin-bottom: 50px; color: #ffd700; text-shadow: 0 0 25px rgba(255, 215, 0, 0.6); font-weight: bold;">
                🎆 ✨ Neujahrsgruß 2026 ✨ 🎆
            </div>
            
            <div style="font-size: 32px; line-height: 1.6; text-shadow: 0 2px 5px rgba(0,0,0,0.4); margin-bottom: 60px; white-space: pre-wrap; width: 100%;">
                ${messageText}
            </div>
            
            <div style="
                font-size: 18px; 
                color: rgba(255, 255, 255, 0.9); 
                text-transform: uppercase; 
                letter-spacing: 4px; 
                font-weight: 600; 
                border-top: 1px solid rgba(255,255,255,0.3); 
                padding-top: 30px; 
                margin-top: auto;
                width: 50%;">
                ✨ Erstellt auf neujahrsgruss2026.de ✨
                <br>
                <span style="font-size: 12px; opacity: 0.6; text-transform: none; letter-spacing: 1px; display: block; margin-top: 10px;">
                    Ein Projekt von Alexander Rheindorf
                </span>
            </div>
        `;

        document.body.appendChild(exportContainer);

        try {
            // 3. Render the ghost container
            const canvas = await html2canvas(exportContainer, {
                scale: 2, // 1600px width final image (Retina quality)
                backgroundColor: null,
                logging: false,
                useCORS: true,
                allowTaint: true
            });

            // 4. Trigger download
            const link = document.createElement('a');
            link.download = 'neujahrsgruss-2026.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (err) {
            console.error('Image export failed:', err);
            alert('Fehler beim Speichern des Bildes.');
        } finally {
            // 5. Cleanup
            document.body.removeChild(exportContainer);
            if (btnText) btnText.textContent = originalText;
        }
    });


    // ===========================
    // HISTORY FUNCTIONALITY
    // ===========================

    const HISTORY_KEY = 'greeting_history';
    const MAX_HISTORY_ITEMS = 5;

    function loadHistory() {
        const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
        renderHistory(history);
    }

    function saveToHistory(text, name, lang) {
        let history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');

        // Add new item to the beginning
        history.unshift({
            text: text,
            name: name,
            lang: lang,
            date: new Date().toISOString()
        });

        // Limit to max items
        if (history.length > MAX_HISTORY_ITEMS) {
            history = history.slice(0, MAX_HISTORY_ITEMS);
        }

        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
        renderHistory(history);
    }

    function renderHistory(history) {
        const historyList = document.getElementById('historyList');
        const sidebar = document.getElementById('historySidebar');

        if (!historyList || !sidebar) return;

        if (history.length === 0) {
            const emptyMsg = translations[currentLanguage]['history-empty'] || 'Noch keine Grüße erstellt.';
            historyList.innerHTML = `<p class="empty-history" data-i18n="history-empty">${emptyMsg}</p>`;
            sidebar.classList.remove('hidden');
            return;
        }

        sidebar.classList.remove('hidden');
        sidebar.classList.add('fade-in');

        historyList.innerHTML = '';

        history.forEach((item) => {
            const div = document.createElement('div');
            div.className = 'history-item';

            const flagUrl = getFlagForLang(item.lang);

            div.innerHTML = `
            <div class="history-header">
                <span class="history-name">${item.name}</span>
                <img src="${flagUrl}" width="16" height="12" style="border-radius: 2px;">
            </div>
            <div class="history-text" style="font-family: inherit;">${item.text}</div>
        `;

            div.addEventListener('click', () => {
                const messageContainer = document.querySelector('.message-text');
                messageContainer.innerText = item.text;
                document.getElementById('recipientName').value = item.name;

                document.getElementById('outputSection').classList.remove('hidden');
                document.getElementById('inputSection').classList.add('hidden');

                // Scroll to result on mobile
                document.getElementById('outputSection').scrollIntoView({ behavior: 'smooth' });
            });

            historyList.appendChild(div);
        });
    }

    function getFlagForLang(langCode) {
        const map = {
            'de': 'de', 'en': 'gb', 'tr': 'tr', 'es': 'es', 'fr': 'fr', 'it': 'it', 'bg': 'bg'
        };
        return `https://flagcdn.com/w20/${map[langCode] || 'de'}.png`;
    }

    // Clear history
    // Create new greeting
    newGreetingBtn.addEventListener('click', () => {
        outputSection.classList.add('hidden');
        inputSection.style.display = 'block';
        form.reset();
        inputSection.scrollIntoView({ behavior: 'smooth' });
    });
});
