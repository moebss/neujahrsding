// ===========================
// MULTILINGUAL MESSAGE TEMPLATES
// Templates for generating New Year's greetings in multiple languages
// ===========================

const messageTemplates = {
    de: {
        // ... German templates (already in script.js, keeping for reference)
    },
    en: {
        greetings: {
            warm: (name) => [`Dear ${name},`, `My dear ${name},`, `Hello ${name}, my dear,`],
            funny: (name) => [`Hey ${name}, you rockstar! 🚀`, `Yo ${name}!`, `Hey ${name}, ready for 2026?`],
            formal: (name) => [`Dear ${name},`, `Good day ${name},`],
            poetic: (name) => [`${name}, like the stars in the sky,`, `To ${name}, with best wishes from my heart,`],
            short: (name) => [`Hey ${name}!`, `Hi ${name},`, `${name}!`]
        },
        wishes: {
            warm: [
                `For 2026, I wish you from the bottom of my heart: health, happiness, and the fulfillment of all your dreams. May the new year bring you many wonderful moments!`,
                `I wish you all the best for 2026. May all your wishes come true and every day be a small adventure!`
            ],
            funny: [
                `2026 wishes: More pizza, less stress, same amount of fun! And maybe finally use that gym membership... or not! 😄`,
                `I wish you for 2026: Fast Wi-Fi, good coffee, and lots of good vibes! And may all green lights wait for you!`
            ],
            formal: [
                `For 2026, I wish you health, professional success, and personal happiness. May the new year fulfill all your expectations.`
            ],
            poetic: [
                `Like fireworks lighting up the night sky, may 2026 illuminate your life. With each spark a new dream, with each light a new hope.`
            ],
            short: [
                `All the best for 2026! Health, happiness & success! ✨`,
                `Here's to an amazing 2026! 🎉`
            ]
        },
        closings: {
            friend: {
                warm: [`With best wishes and warm regards`, `All the best`, `From the heart`],
                funny: [`Your crazy friend`, `See you soon, rockstar! 🚀`, `Cheers!`],
                formal: [`Kind regards`, `Best wishes`],
                poetic: [`Connected in friendship`, `With luminous thoughts`],
                short: [`Cheers`, `See ya!`, `✌️`]
            },
            romantic: {
                warm: [`With love, yours...`, `Forever yours`, `With all my love`],
                funny: [`Your sweetheart 💕`, `Forever yours! ❤️`],
                formal: [`With warm regards`],
                poetic: [`Until the stars fade, yours...`, `In eternal affection`],
                short: [`Love you! ❤️`, `💕`]
            }
        }
    },
    tr: {
        greetings: {
            warm: (name) => [`Sevgili ${name},`, `Canım ${name},`],
            funny: (name) => [`Selam ${name}, süpersin! 🚀`, `Yo ${name}!`],
            formal: (name) => [`Sayın ${name},`, `İyi günler ${name},`],
            poetic: (name) => [`${name}, gökyüzündeki yıldızlar gibi,`],
            short: (name) => [`Selam ${name}!`, `Merhaba ${name},`]
        },
        wishes: {
            warm: [
                `2026 için sana içtenlikle diliyorum: Sağlık, mutluluk ve tüm hayallerinin gerçekleşmesi. Yeni yıl sana birçok harika an getirsin!`
            ],
            funny: [
                `2026 dilekleri: Daha fazla pizza, daha az stres, aynı keyif! 😄`
            ],
            formal: [
                `2026 için size sağlık, mesleki başarı ve kişisel mutluluk diliyorum.`
            ],
            poetic: [
                `Gökyüzündeki havai fişekler gibi, 2026 senin hayatını aydınlatsın.`
            ],
            short: [
                `2026'da her şey gönlünce olsun! ✨`
            ]
        },
        closings: {
            friend: {
                warm: [`En iyi dileklerimle`, `Sevgilerle`],
                funny: [`Çılgın arkadaşın`, `Görüşürüz! 🚀`],
                formal: [`Saygılarımla`],
                poetic: [`Dostlukla bağlı`],
                short: [`Hoşça kal`, `✌️`]
            },
            romantic: {
                warm: [`Sevgiyle, senin...`, `Sonsuza dek senin`],
                funny: [`Aşkınla 💕`],
                formal: [`Sıcak selamlarla`],
                poetic: [`Yıldızlar solar kadar, senin...`],
                short: [`Seni seviyorum! ❤️`]
            }
        }
    },
    es: {
        greetings: {
            warm: (name) => [`Querido/a ${name},`, `Mi querido/a ${name},`],
            funny: (name) => [`¡Hola ${name}, eres increíble! 🚀`, `¡Ey ${name}!`],
            formal: (name) => [`Estimado/a ${name},`, `Buenos días ${name},`],
            poetic: (name) => [`${name}, como las estrellas en el cielo,`],
            short: (name) => [`¡Hola ${name}!`, `¡${name}!`]
        },
        wishes: {
            warm: [
                `Para 2026 te deseo de corazón: salud, felicidad y el cumplimiento de todos tus sueños. ¡Que el nuevo año te traiga muchos momentos maravillosos!`
            ],
            funny: [
                `Deseos para 2026: ¡Más pizza, menos estrés, la misma diversión! 😄`
            ],
            formal: [
                `Para 2026 le deseo salud, éxito profesional y felicidad personal.`
            ],
            poetic: [
                `Como fuegos artificiales iluminando el cielo nocturno, que 2026 ilumine tu vida.`
            ],
            short: [
                `¡Todo lo mejor para 2026! ✨`
            ]
        },
        closings: {
            friend: {
                warm: [`Con los mejores deseos`, `Todo mi cariño`],
                funny: [`Tu amigo/a loco/a`, `¡Hasta pronto! 🚀`],
                formal: [`Cordiales saludos`],
                poetic: [`Unidos en amistad`],
                short: [`¡Saludos!`, `✌️`]
            },
            romantic: {
                warm: [`Con amor, tuyo/a...`, `Siempre tuyo/a`],
                funny: [`Tu amor 💕`],
                formal: [`Con cariño`],
                poetic: [`Hasta que las estrellas se apaguen, tuyo/a...`],
                short: [`¡Te amo! ❤️`]
            }
        }
    },
    fr: {
        greetings: {
            warm: (name) => [`Cher/Chère ${name},`, `Mon/Ma cher/chère ${name},`],
            funny: (name) => [`Salut ${name}, tu es incroyable! 🚀`, `Coucou ${name}!`],
            formal: (name) => [`Cher/Chère ${name},`, `Bonjour ${name},`],
            poetic: (name) => [`${name}, comme les étoiles dans le ciel,`],
            short: (name) => [`Salut ${name}!`, `${name}!`]
        },
        wishes: {
            warm: [
                `Pour 2026, je te souhaite du fond du cœur: santé, bonheur et la réalisation de tous tes rêves. Que la nouvelle année t'apporte de nombreux moments merveilleux!`
            ],
            funny: [
                `Vœux pour 2026: Plus de pizza, moins de stress, le même plaisir! 😄`
            ],
            formal: [
                `Pour 2026, je vous souhaite santé, succès professionnel et bonheur personnel.`
            ],
            poetic: [
                `Comme un feu d'artifice illuminant le ciel nocturne, que 2026 illumine ta vie.`
            ],
            short: [
                `Tous mes vœux pour 2026! ✨`
            ]
        },
        closings: {
            friend: {
                warm: [`Avec mes meilleurs vœux`, `Affectueusement`],
                funny: [`Ton ami/e fou/folle`, `À bientôt! 🚀`],
                formal: [`Cordialement`],
                poetic: [`Unis par l'amitié`],
                short: [`Bisous`, `✌️`]
            },
            romantic: {
                warm: [`Avec amour, ton/ta...`, `Pour toujours tien/ne`],
                funny: [`Ton amour 💕`],
                formal: [`Affectueusement`],
                poetic: [`Jusqu'à ce que les étoiles s'éteignent, ton/ta...`],
                short: [`Je t'aime! ❤️`]
            }
        }
    },
    it: {
        greetings: {
            warm: (name) => [`Caro/a ${name},`, `Mio/a caro/a ${name},`],
            funny: (name) => [`Ciao ${name}, sei fantastico/a! 🚀`, `Ehi ${name}!`],
            formal: (name) => [`Gentile ${name},`, `Buongiorno ${name},`],
            poetic: (name) => [`${name}, come le stelle nel cielo,`],
            short: (name) => [`Ciao ${name}!`, `${name}!`]
        },
        wishes: {
            warm: [
                `Per il 2026 ti auguro di cuore: salute, felicità e la realizzazione di tutti i tuoi sogni. Che il nuovo anno ti porti tanti momenti meravigliosi!`
            ],
            funny: [
                `Auguri per il 2026: Più pizza, meno stress, stesso divertimento! 😄`
            ],
            formal: [
                `Per il 2026 le auguro salute, successo professionale e felicità personale.`
            ],
            poetic: [
                `Come fuochi d'artificio che illuminano il cielo notturno, che il 2026 illumini la tua vita.`
            ],
            short: [
                `Tanti auguri per il 2026! ✨`
            ]
        },
        closings: {
            friend: {
                warm: [`Con i migliori auguri`, `Con affetto`],
                funny: [`Il/La tuo/a amico/a pazzo/a`, `A presto! 🚀`],
                formal: [`Cordiali saluti`],
                poetic: [`Uniti nell'amicizia`],
                short: [`Ciao!`, `✌️`]
            },
            romantic: {
                warm: [`Con amore, tuo/a...`, `Per sempre tuo/a`],
                funny: [`Il tuo amore 💕`],
                formal: [`Con affetto`],
                poetic: [`Fino a quando le stelle svaniscono, tuo/a...`],
                short: [`Ti amo! ❤️`]
            }
        }
    },
    bg: {
        greetings: {
            warm: (name) => [`Скъпи/а ${name},`, `Мой/Моя скъпи${name},`],
            funny: (name) => [`Хей ${name}, страхотен/на си! 🚀`, `Ей ${name}!`],
            formal: (name) => [`Уважаеми/а ${name},`, `Добър ден ${name},`],
            poetic: (name) => [`${name}, като звездите в небето,`],
            short: (name) => [`Здрасти ${name}!`, `${name}!`]
        },
        wishes: {
            warm: [
                `За 2026 ти пожелавам от сърце: здраве, щастие и изпълнение на всичките ти мечти. Нека новата година ти донесе много прекрасни моменти!`
            ],
            funny: [
                `Желания за 2026: Повече пица, по-малко стрес, същото удоволствие! 😄`
            ],
            formal: [
                `За 2026 Ви пожелавам здраве, професионален успех и лично щастие.`
            ],
            poetic: [
                `Както фойерверки осветяват нощното небе, нека 2026 осветява твоя живот.`
            ],
            short: [
                `Всичко най-добро за 2026! ✨`
            ]
        },
        closings: {
            friend: {
                warm: [`С най-добри пожелания`, `С любов`],
                funny: [`Твоят/та луд/а приятел/ка`, `Довиждане! 🚀`],
                formal: [`С уважение`],
                poetic: [`Свързани в приятелство`],
                short: [`Поздрави!`, `✌️`]
            },
            romantic: {
                warm: [`С любов, твоят/та...`, `Завинаги твой/твоя`],
                funny: [`Твоята любов 💕`],
                formal: [`С топлина`],
                poetic: [`Докато звездите избледнеят, твоя/т...`],
                short: [`Обичам те! ❤️`]
            }
        }
    }
};

// Note: This file contains simplified templates.
// The main script.js contains comprehensive German templates.
// For production use, expand all language templates to match German complexity.
