/* ============================================================
   translations.js — Massive Multi-Language Support
   Covers 60+ of the world's most spoken languages.
   ============================================================ */

const translations = {
  en: {
    langLabel: 'English',
    prompt: 'What is bothering you?',
    placeholder: 'Type your thought...',
    done: 'Done',
    enterHint: 'or press enter',
    resolution: 'Hope you feel a little better.',
    restart: 'Try Again',
    phrases: ['Take a deep breath...', 'Watch your thought get smaller...', "See how small it's becoming...", "It's just a speck now...", 'In the vastness of the universe,\nyour worry is so small...', 'It is insignificant...', 'Let it go...']
  },
  es: {
    langLabel: 'Español',
    prompt: '¿Qué te está molestando?',
    placeholder: 'Escribe tu pensamiento...',
    done: 'Listo',
    enterHint: 'o presiona enter',
    resolution: 'Esperamos que te sientas un poco mejor.',
    restart: 'Intentar de nuevo',
    phrases: ['Respira profundamente...', 'Observa cómo tu pensamiento se hace más pequeño...', 'Mira qué pequeño se está volviendo...', 'Ahora es solo una mota...', 'En la inmensidad del universo,\ntu preocupación es tan pequeña...', 'Es insignificante...', 'Déjalo ir...']
  },
  fr: {
    langLabel: 'Français',
    prompt: 'Qu\'est-ce qui vous dérange ?',
    placeholder: 'Écrivez votre pensée...',
    done: 'Terminé',
    enterHint: 'ou appuyez sur entrée',
    resolution: 'Nous espérons que vous vous sentez un peu mieux.',
    restart: 'Réessayer',
    phrases: ['Respirez profondément...', 'Regardez votre pensée devenir plus petite...', 'Voyez comme elle devient petite...', 'Ce n\'est plus qu\'un point maintenant...', 'Dans l\'immensité de l\'univers,\nvotre souci est si petit...', 'C\'est insignifiant...', 'Laissez-le partir...']
  },
  de: {
    langLabel: 'Deutsch',
    prompt: 'Was belastet dich?',
    placeholder: 'Schreibe deinen Gedanken...',
    done: 'Fertig',
    enterHint: 'oder drücke Enter',
    resolution: 'Wir hoffen, du fühlst dich etwas besser.',
    restart: 'Nochmal versuchen',
    phrases: ['Atme tief ein...', 'Beobachte, wie dein Gedanke kleiner wird...', 'Sieh, wie klein er wird...', 'Er ist jetzt nur noch ein Punkt...', 'In der Weite des Universums\nist deine Sorge so klein...', 'Es ist unbedeutend...', 'Lass es los...']
  },
  it: {
    langLabel: 'Italiano',
    prompt: 'Cosa ti preoccupa?',
    placeholder: 'Scrivi il tuo pensiero...',
    done: 'Fatto',
    enterHint: 'o premi invio',
    resolution: 'Speriamo che tu ti senta un po\' meglio.',
    restart: 'Riprova',
    phrases: ['Fai un respiro profondo...', 'Guarda il tuo pensiero diventare più piccolo...', 'Vedi come sta diventando piccolo...', 'Ora è solo un puntino...', 'Nella vastità dell\'universo,\nla tua preoccupazione è così piccola...', 'È insignificante...', 'Lascialo andare...']
  },
  pt: {
    langLabel: 'Português',
    prompt: 'O que está te incomodando?',
    placeholder: 'Digite seu pensamento...',
    done: 'Pronto',
    enterHint: 'ou pressione enter',
    resolution: 'Esperamos que você se sinta um pouco melhor.',
    restart: 'Tentar novamente',
    phrases: ['Respire fundo...', 'Veja seu pensamento ficando menor...', 'Veja como está ficando pequeno...', 'Agora é apenas um ponto...', 'Na vastidão do universo,\nsua preocupação é tão pequena...', 'É insignificante...', 'Deixe ir...']
  },
  ru: {
    langLabel: 'Русский',
    prompt: 'Что вас беспокоит?',
    placeholder: 'Напишите свою мысль...',
    done: 'Готово',
    enterHint: 'или нажмите Enter',
    resolution: 'Надеемся, вам стало немного лучше.',
    restart: 'Попробовать снова',
    phrases: ['Сделайте глубокий вдох...', 'Смотрите, как ваша мысль уменьшается...', 'Видите, какой маленькой она становится...', 'Теперь это лишь точка...', 'В бескрайности вселенной\nваше беспокойство так мало...', 'Это незначительно...', 'Отпустите это...']
  },
  ja: {
    langLabel: '日本語',
    prompt: '何があなたを悩ませていますか？',
    placeholder: 'あなたの考えを入力...',
    done: '完了',
    enterHint: 'またはEnter',
    resolution: '少し気分が良くなりましたか。',
    restart: 'もう一度',
    phrases: ['深呼吸をしてください...', 'あなたの考えが小さくなるのを見て...', 'ほら、こんなに小さくなっている...', 'もう点にすぎません...', '広大な宇宙の中で、\nあなたの心配はとても小さい...', 'それは取るに足らないもの...', '手放しましょう...']
  },
  zh: {
    langLabel: '中文',
    prompt: '什么在困扰着你？',
    placeholder: '写下你的想法...',
    done: '完成',
    enterHint: '或按回车键',
    resolution: '希望你感觉好一点了。',
    restart: '再试一次',
    phrases: ['深呼吸...', '看着你的烦恼变小...', '看它变得多么渺小...', '现在它只是一个小点...', '在浩瀚的宇宙中，\n你的烦恼是如此渺小...', '它微不足道...', '放手吧...']
  },
  ko: {
    langLabel: '한국어',
    prompt: '무엇이 당신을 괴롭히고 있나요?',
    placeholder: '생각을 적어보세요...',
    done: '완료',
    enterHint: '또는 Enter',
    resolution: '조금이나마 기분이 나아지셨길 바랍니다.',
    restart: '다시 시도',
    phrases: ['깊은 숨을 쉬세요...', '당신의 생각이 작아지는 걸 지켜보세요...', '얼마나 작아지고 있는지 보세요...', '이제 그것은 단지 점일 뿐...', '광활한 우주 속에서\n당신의 걱정은 너무나 작습니다...', '그것은 하찮은 것입니다...', '놓아주세요...']
  },
  hi: {
    langLabel: 'हिन्दी',
    prompt: 'आपको क्या परेशान कर रहा है?',
    placeholder: 'अपना विचार लिखें...',
    done: 'ठीक है',
    enterHint: 'या एंटर दबाएं',
    resolution: 'उम्मीद है आप थोड़ा बेहतर महसूस कर रहे हैं।',
    restart: 'फिर से कोशिश करें',
    phrases: ['गहरी सांस लें...', 'अपने विचार को छोटा होते देखें...', 'देखिए यह कितना छोटा हो रहा है...', 'अब यह बस एक बिंदु है...', 'इस विशाल ब्रह्मांड में,\nआपकी चिंता कितनी छोटी है...', 'यह महत्वहीन है...', 'इसे जाने दें...']
  },
  ar: {
    langLabel: 'العربية',
    prompt: 'ما الذي يزعجك؟',
    placeholder: 'اكتب فكرتك...',
    done: 'تم',
    enterHint: 'أو اضغط إدخال',
    resolution: 'نأمل أن تشعر بتحسن قليل.',
    restart: 'حاول مرة أخرى',
    phrases: ['خذ نفساً عميقاً...', 'شاهد فكرتك تصبح أصغر...', 'انظر كم أصبحت صغيرة...', 'إنها مجرد نقطة الآن...', 'في اتساع الكون،\nقلقك صغير جداً...', 'إنها غير مهمة...', 'دعها تذهب...']
  },
  bn: {
    langLabel: 'বাংলা',
    prompt: 'কী আপনাকে বিরক্ত করছে?',
    placeholder: 'আপনার চিন্তা লিখুন...',
    done: 'সম্পন্ন',
    enterHint: 'অথবা এন্টার চাপুন',
    resolution: 'আশা করি আপনি একটু ভালো অনুভব করছেন।',
    restart: 'আবার চেষ্টা করুন',
    phrases: ['গভীর শ্বাস নিন...', 'আপনার চিন্তাটি ছোট হচ্ছে দেখুন...', 'দেখুন এটা কত ছোট হয়ে যাচ্ছে...', 'এখন এটা শুধু একটা বিন্দু...', 'এই বিশাল মহাবিশ্বে,\nআপনার দুশ্চিন্তা কতটুকু...', 'এটা তুচ্ছ...', 'ছেড়ে দিন...']
  },
  ur: {
    langLabel: 'اردو',
    prompt: 'آپ کو کیا پریشان کر رہا ہے؟',
    placeholder: 'اپنا خیال لکھیں...',
    done: 'ٹھیک ہے',
    enterHint: 'یا انٹر دبائیں',
    resolution: 'امید ہے آپ تھوڑا بہتر محسوس کر رہے ہیں۔',
    restart: 'دوبارہ کوشش کریں',
    phrases: ['گہری سانس لیں...', 'اپنے خیال کو چھوٹا ہوتے دیکھیں...', 'دیکھیں یہ کتنا چھوٹا ہو رہا ہے...', 'اب یہ صرف ایک نقطہ ہے...', 'اس وسیع کائنات میں\nآپ کی فکر کتنی چھوٹی ہے...', 'یہ غیر اہم ہے...', 'اسے جانے دیں...']
  },
  id: {
    langLabel: 'Bahasa Indonesia',
    prompt: 'Apa yang mengganggumu?',
    placeholder: 'Ketik pikiranmu...',
    done: 'Selesai',
    enterHint: 'atau tekan enter',
    resolution: 'Semoga kamu merasa sedikit lebih baik.',
    restart: 'Coba Lagi',
    phrases: ['Tarik napas dalam-dalam...', 'Lihatlah pikiranmu semakin mengecil...', 'Lihat betapa kecilnya itu...', 'Sekarang hanya sebuah titik...', 'Di alam semesta yang luas ini,\nkekhawatiranmu sangat kecil...', 'Itu tidak berarti...', 'Lepaskanlah...']
  },
  tr: {
    langLabel: 'Türkçe',
    prompt: 'Seni ne rahatsız ediyor?',
    placeholder: 'Düşünceni yaz...',
    done: 'Tamam',
    enterHint: 'veya enter\'a basın',
    resolution: 'Umarız biraz daha iyi hissediyorsundur.',
    restart: 'Tekrar dene',
    phrases: ['Derin bir nefes al...', 'Düşüncenin küçüldüğünü izle...', 'Ne kadar küçüldüğünü gör...', 'Şimdi sadece bir nokta...', 'Evrenin enginliğinde,\nsenin endişen çok küçük...', 'Önemsiz...', 'Bırak gitsin...']
  },
  vi: {
    langLabel: 'Tiếng Việt',
    prompt: 'Điều gì đang làm phiền bạn?',
    placeholder: 'Viết suy nghĩ của bạn...',
    done: 'Xong',
    enterHint: 'hoặc nhấn Enter',
    resolution: 'Hy vọng bạn cảm thấy tốt hơn một chút.',
    restart: 'Thử lại',
    phrases: ['Hít thở thật sâu...', 'Hãy nhìn suy nghĩ của bạn nhỏ dần...', 'Xem nó đang nhỏ đi thế nào...', 'Giờ nó chỉ là một chấm nhỏ...', 'Trong sự bao la của vũ trụ,\nnỗi lo của bạn thật nhỏ bé...', 'Nó không đáng kể...', 'Hãy buông bỏ...']
  },
  th: {
    langLabel: 'ไทย',
    prompt: 'อะไรทำให้คุณกังวล?',
    placeholder: 'พิมพ์ความคิดของคุณ...',
    done: 'เสร็จ',
    enterHint: 'หรือกด Enter',
    resolution: 'หวังว่าคุณจะรู้สึกดีขึ้นบ้าง',
    restart: 'ลองอีกครั้ง',
    phrases: ['หายใจลึกๆ...', 'มองดูความคิดของคุณเล็กลง...', 'ดูสิว่ามันเล็กแค่ไหนแล้ว...', 'ตอนนี้มันเป็นแค่จุดเล็กๆ...', 'ในความกว้างใหญ่ของจักรวาล\nความกังวลของคุณเล็กนิดเดียว...', 'มันไม่สำคัญ...', 'ปล่อยมันไป...']
  },
  pl: {
    langLabel: 'Polski',
    prompt: 'Co Cię martwi?',
    placeholder: 'Wpisz swoją myśl...',
    done: 'Gotowe',
    enterHint: 'lub naciśnij enter',
    resolution: 'Mamy nadzieję, że czujesz się trochę lepiej.',
    restart: 'Spróbuj ponownie',
    phrases: ['Weź głęboki oddech...', 'Obserwuj jak Twoja myśl się zmniejsza...', 'Zobacz jak mała się staje...', 'Teraz to tylko punkt...', 'W ogromie wszechświata,\nTwój niepokój jest tak mały...', 'Jest nieistotny...', 'Puść to...']
  },
  nl: {
    langLabel: 'Nederlands',
    prompt: 'Wat houdt je bezig?',
    placeholder: 'Typ je gedachte...',
    done: 'Klaar',
    enterHint: 'of druk op enter',
    resolution: 'We hopen dat je je iets beter voelt.',
    restart: 'Probeer opnieuw',
    phrases: ['Haal diep adem...', 'Kijk hoe je gedachte kleiner wordt...', 'Zie je hoe klein het wordt...', 'Het is nu slechts een stipje...', 'In de oneindigheid van het universum\nis jouw zorg zo klein...', 'Het is onbeduidend...', 'Laat het los...']
  },
  sv: {
    langLabel: 'Svenska',
    prompt: 'Vad bekymrar dig?',
    placeholder: 'Skriv din tanke...',
    done: 'Klar',
    enterHint: 'eller tryck på enter',
    resolution: 'Hoppas du mår lite bättre.',
    restart: 'Försök igen',
    phrases: ['Ta ett djupt andetag...', 'Se din tanke bli mindre...', 'Se hur liten den blir...', 'Det är bara en prick nu...', 'I universums vidsträckthet,\när din oro så liten...', 'Den är obetydlig...', 'Släpp den...']
  },
  no: {
    langLabel: 'Norsk',
    prompt: 'Hva bekymrer deg?',
    placeholder: 'Skriv tanken din...',
    done: 'Ferdig',
    enterHint: 'eller trykk enter',
    resolution: 'Håper du føler deg litt bedre.',
    restart: 'Prøv igjen',
    phrases: ['Ta et dypt pust...', 'Se tanken din bli mindre...', 'Se hvor liten den blir...', 'Det er bare en prikk nå...', 'I universets enorme vidstrakthet,\ner bekymringen din så liten...', 'Den er ubetydelig...', 'La den gå...']
  },
  da: {
    langLabel: 'Dansk',
    prompt: 'Hvad bekymrer dig?',
    placeholder: 'Skriv din tanke...',
    done: 'Færdig',
    enterHint: 'eller tryk enter',
    resolution: 'Håber du har det lidt bedre.',
    restart: 'Prøv igen',
    phrases: ['Tag en dyb indånding...', 'Se din tanke blive mindre...', 'Se hvor lille den bliver...', 'Det er kun en prik nu...', 'I universets uendelighed,\ner din bekymring så lille...', 'Den er ubetydelig...', 'Giv slip på den...']
  },
  fi: {
    langLabel: 'Suomi',
    prompt: 'Mikä sinua vaivaa?',
    placeholder: 'Kirjoita ajatuksesi...',
    done: 'Valmis',
    enterHint: 'tai paina enter',
    resolution: 'Toivottavasti olosi on hieman parempi.',
    restart: 'Yritä uudelleen',
    phrases: ['Hengitä syvään...', 'Katso kuinka ajatuksesi pienenee...', 'Katso kuinka pieneksi se muuttuu...', 'Se on nyt vain piste...', 'Maailmankaikkeuden laajuudessa,\nhuolesi on niin pieni...', 'Se on merkityksetön...', 'Anna sen mennä...']
  },
  el: {
    langLabel: 'Ελληνικά',
    prompt: 'Τι σε απασχολεί;',
    placeholder: 'Γράψε τη σκέψη σου...',
    done: 'Έτοιμο',
    enterHint: 'ή πάτα enter',
    resolution: 'Ελπίζουμε να νιώθεις λίγο καλύτερα.',
    restart: 'Προσπάθησε ξανά',
    phrases: ['Πάρε μια βαθιά ανάσα...', 'Δες τη σκέψη σου να μικραίνει...', 'Δες πόσο μικρή γίνεται...', 'Είναι απλώς μια κουκκίδα τώρα...', 'Στην απεραντοσύνη του σύμπαντος,\nη ανησυχία σου είναι τόσο μικρή...', 'Είναι ασήμαντη...', 'Άφησέ την να φύγει...']
  },
  he: {
    langLabel: 'עברית',
    prompt: 'מה מטריד אותך?',
    placeholder: 'כתוב את המחשבה שלך...',
    done: 'סיום',
    enterHint: 'או לחץ אנטר',
    resolution: 'מקווים שאתה מרגיש קצת יותר טוב.',
    restart: 'נסה שוב',
    phrases: ['קח נשימה עמוקה...', 'תראה איך המחשבה שלך נהיית קטנה יותר...', 'תראה כמה קטנה היא נהיית...', 'עכשיו זה רק כתם...', 'במרחבי היקום,\nהדאגה שלך כל כך קטנה...', 'היא חסרת משמעות...', 'שחרר אותה...']
  },
  cs: {
    langLabel: 'Čeština',
    prompt: 'Co tě trápí?',
    placeholder: 'Napiš svou myšlenku...',
    done: 'Hotovo',
    enterHint: 'nebo stiskni enter',
    resolution: 'Doufáme, že se cítíš trochu lépe.',
    restart: 'Zkus to znovu',
    phrases: ['Zhluboka se nadechni...', 'Sleduj, jak se tvá myšlenka zmenšuje...', 'Podívej, jak je malá...', 'Teď je to jen tečka...', 'V rozlehlosti vesmíru,\nje tvá starost tak malá...', 'Je bezvýznamná...', 'Nech to plavat...']
  },
  hu: {
    langLabel: 'Magyar',
    prompt: 'Mi bánt?',
    placeholder: 'Írd le a gondolatod...',
    done: 'Kész',
    enterHint: 'vagy nyomj entert',
    resolution: 'Reméljük, kicsit jobban érzed magad.',
    restart: 'Újra',
    phrases: ['Vegyél egy mély lélegzetet...', 'Nézd, ahogy a gondolatod egyre kisebb lesz...', 'Nézd, milyen kicsi lesz...', 'Már csak egy pont...', 'A világegyetem hatalmasságában\na te aggodalmad olyan kicsi...', 'Jelentéktelen...', 'Engedd el...']
  },
  ro: {
    langLabel: 'Română',
    prompt: 'Ce te deranjează?',
    placeholder: 'Scrie gândul tău...',
    done: 'Gata',
    enterHint: 'sau apasă enter',
    resolution: 'Sperăm că te simți puțin mai bine.',
    restart: 'Încearcă din nou',
    phrases: ['Trage aer adânc în piept...', 'Privește cum gândul tău devine mai mic...', 'Vezi cât de mic devine...', 'Acum este doar un punct...', 'În imensitatea universului,\nîngrijorarea ta este atât de mică...', 'Este nesemnificativă...', 'Las-o să plece...']
  },
  uk: {
    langLabel: 'Українська',
    prompt: 'Що вас турбує?',
    placeholder: 'Напишіть свою думку...',
    done: 'Готово',
    enterHint: 'або натисніть Enter',
    resolution: 'Сподіваємось, вам стало трохи краще.',
    restart: 'Спробувати знову',
    phrases: ['Зробіть глибокий вдих...', 'Дивіться, як ваша думка зменшується...', 'Бачите, якою маленькою вона стає...', 'Тепер це лише крапка...', 'У безмежності всесвіту\nваше занепокоєння таке мале...', 'Воно незначне...', 'Відпустіть це...']
  },
  ms: {
    langLabel: 'Bahasa Melayu',
    prompt: 'Apa yang mengganggu anda?',
    placeholder: 'Taipkan fikiran anda...',
    done: 'Selesai',
    enterHint: 'atau tekan enter',
    resolution: 'Harap anda berasa sedikit lebih baik.',
    restart: 'Cuba Lagi',
    phrases: ['Tarik nafas dalam-dalam...', 'Lihatlah fikiran anda semakin mengecil...', 'Lihat betapa kecilnya ia...', 'Sekarang ia hanya satu titik...', 'Di alam semesta yang luas ini,\nkebimbangan anda sangat kecil...', 'Ia tidak bermakna...', 'Lepaskannya...']
  },
  tl: {
    langLabel: 'Tagalog',
    prompt: 'Ano ang bumabagabag sa iyo?',
    placeholder: 'Isulat ang iyong iniisip...',
    done: 'Tapos na',
    enterHint: 'o pindutin ang enter',
    resolution: 'Sana ay gumaan ang pakiramdam mo.',
    restart: 'Ulitin',
    phrases: ['Huminga ng malalim...', 'Panoorin ang iyong iniisip na lumiliit...', 'Tingnan kung gaano ito kaliit...', 'Isa na lamang itong tuldok ngayon...', 'Sa lawak ng uniberso,\nang iyong problema ay napakaliit...', 'Ito ay walang halaga...', 'Hayaan mo na ito...']
  },
  sw: {
    langLabel: 'Kiswahili',
    prompt: 'Nini kinakusumbua?',
    placeholder: 'Andika wazo lako...',
    done: 'Tayari',
    enterHint: 'au bonyeza enter',
    resolution: 'Tunatumai unajisikia vizuri kidogo.',
    restart: 'Jaribu Tena',
    phrases: ['Vuta pumzi ndani kabisa...', 'Tazama wazo lako likizidi kuwa dogo...', 'Ona jinsi linavyokuwa dogo...', 'Sasa ni nukta tu...', 'Katika ukubwa wa ulimwengu,\nwasiwasi wako ni mdogo sana...', 'Haina maana...', 'Acha ipite...']
  },
  am: {
    langLabel: 'አማርኛ',
    prompt: 'ምን እያስጨነቀዎት ነው?',
    placeholder: 'ሀሳብዎን ይፃፉ...',
    done: 'ተከናውኗል',
    enterHint: 'ወይም አስገባን ይጫኑ',
    resolution: 'ጥቂት የተሻለ ስሜት እንደሚሰማዎት ተስፋ እናደርጋለን።',
    restart: 'እንደገና ይሞክሩ',
    phrases: ['ጥልቅ ትንፋሽ ይውሰዱ...', 'ሀሳብዎ ሲያንስ ይመልከቱ...', 'ምን ያህል ትንሽ እየሆነ እንደሆነ ይመልከቱ...', 'አሁን ትንሽ ነጥብ ብቻ ነው...', 'በአጽናፈ ሰማይ ሰፊነት ውስጥ፣\nጭንቀትዎ በጣም ትንሽ ነው...', 'ትርጉም የለሽ ነው...', 'ይሂድ...']
  },
  yo: {
    langLabel: 'Yorùbá',
    prompt: 'Kini n yọ ọ lẹnu?',
    placeholder: 'Tẹ ero rẹ...',
    done: 'Ti ṣetan',
    enterHint: 'tabi tẹ tẹ',
    resolution: 'Mo nireti pe o lero dara diẹ.',
    restart: 'Gbiyanju lẹẹkansi',
    phrases: ['Gba ẹmi jinlẹ...', 'Wo ero rẹ ti n dinku...', 'Wo bi o ti kere to...', 'O kan jẹ aami kekere ni bayi...', 'Ni inu agbaye ti o tobi,\nibalẹ ọkan rẹ kere pupọ...', 'Ko ṣe pataki...', 'Jẹ ki o lọ...']
  },
  zu: {
    langLabel: 'isiZulu',
    prompt: 'Yini ekukhathazayo?',
    placeholder: 'Bhala umcabango wakho...',
    done: 'Kwenziwe',
    enterHint: 'noma cindezela enter',
    resolution: 'Ngithemba ukuthi uzizwa ungcono kancane.',
    restart: 'Zama Futhi',
    phrases: ['Thatha umoya ojulile...', 'Buka umcabango wakho uba mncane...', 'Bheka ukuthi uba mncane kanjani...', 'Sekuyichashaza nje manje...', 'Ebukhulwini bomhlaba,\nukukhathazeka kwakho kuncane kakhulu...', 'Akubalulekile...', 'Kuyeke kuhambe...']
  },
  ta: {
    langLabel: 'தமிழ்',
    prompt: 'உங்களை என்ன தொந்தரவு செய்கிறது?',
    placeholder: 'உங்கள் எண்ணத்தை எழுதுங்கள்...',
    done: 'முடிந்தது',
    enterHint: 'அல்லது Enter அழுத்தவும்',
    resolution: 'நீங்கள் கொஞ்சம் நிம்மதியாக உணர்கிறீர்கள் என்று நம்புகிறேன்.',
    restart: 'மீண்டும் முயற்சிக்க',
    phrases: ['ஆழமாக மூச்சு விடுங்கள்...', 'உங்கள் எண்ணம் சிறியதாவதைப் பாருங்கள்...', 'பாருங்கள் அது எவ்வளவு சிறியதாகிறது...', 'இப்போது அது ஒரு புள்ளி மட்டுமே...', 'இந்த பிரபஞ்சத்தின் பரந்த வெளியில்,\nஉங்கள் கவலை மிகச் சிறியது...', 'அது அற்பமானது...', 'விட்டுவிடுங்கள்...']
  },
  te: {
    langLabel: 'తెలుగు',
    prompt: 'మిమ్మల్ని ఏది ఇబ్బంది పెడుతోంది?',
    placeholder: 'మీ ఆలోచన రాయండి...',
    done: 'పూర్తయింది',
    enterHint: 'లేదా Enter నొక్కండి',
    resolution: 'మీరు కొంచెం మెరుగ్గా అనిపిస్తుందని ఆశిస్తున్నాను.',
    restart: 'మళ్ళీ ప్రయత్నించండి',
    phrases: ['లోతుగా శ్వాస తీసుకోండి...', 'మీ ఆలోచన చిన్నదవుతోంది చూడండి...', 'ఎంత చిన్నదవుతోందో చూడండి...', 'ఇప్పుడు అది ఒక చుక్క మాత్రమే...', 'విశ్వం యొక్క విశాలతలో,\nమీ ఆందోళన చాలా చిన్నది...', 'అది అల్పమైనది...', 'వదిలేయండి...']
  },
  mr: {
    langLabel: 'मराठी',
    prompt: 'तुम्हाला काय त्रास देत आहे?',
    placeholder: 'तुमचा विचार लिहा...',
    done: 'पूर्ण झाले',
    enterHint: 'किंवा enter दाबा',
    resolution: 'आशा आहे तुम्हाला थोडे बरे वाटत असेल.',
    restart: 'पुन्हा प्रयत्न करा',
    phrases: ['दीर्घ श्वास घ्या...', 'तुमचा विचार लहान होताना पहा...', 'पहा तो किती लहान होत आहे...', 'आता तो फक्त एक बिंदू आहे...', 'विश्वाच्या विशालतेत,\nतुमची चिंता खूप लहान आहे...', 'हे क्षुल्लक आहे...', 'जाऊ द्या...']
  },
  gu: {
    langLabel: 'ગુજરાતી',
    prompt: 'તમને શું પરેશાન કરી રહ્યું છે?',
    placeholder: 'તમારો વિચાર લખો...',
    done: 'થઈ ગયું',
    enterHint: 'અથવા એન્ટર દબાવો',
    resolution: 'આશા છે કે તમને થોડું સારું લાગી રહ્યું હશે.',
    restart: 'ફરી પ્રયાસ કરો',
    phrases: ['ઊંડો શ્વાસ લો...', 'તમારા વિચારને નાનો થતો જુઓ...', 'જુઓ તે કેટલો નાનો થઈ રહ્યો છે...', 'હવે તે માત્ર એક બિંદુ છે...', 'બ્રહ્માંડની વિશાળતામાં,\nતમારી ચિંતા ખૂબ નાની છે...', 'તે નગણ્ય છે...', 'તેને જવા દો...']
  },
  pa: {
    langLabel: 'ਪੰਜਾਬੀ',
    prompt: 'ਤੁਹਾਨੂੰ ਕੀ ਪਰੇਸ਼ਾਨ ਕਰ ਰਿਹਾ ਹੈ?',
    placeholder: 'ਆਪਣਾ ਵਿਚਾਰ ਲਿਖੋ...',
    done: 'ਹੋ ਗਿਆ',
    enterHint: 'ਜਾਂ ਐਂਟਰ ਦਬਾਓ',
    resolution: 'ਉਮੀਦ ਹੈ ਤੁਸੀਂ ਥੋੜ੍ਹਾ ਬਿਹਤਰ ਮਹਿਸੂસ ਕਰ ਰਹੇ ਹੋ।',
    restart: 'ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ',
    phrases: ['ਡੂੰਘਾ ਸਾਹ ਲਓ...', 'ਆਪਣੇ ਵਿਚਾਰ ਨੂੰ ਛੋਟਾ ਹੁੰਦਾ ਦੇਖੋ...', 'ਦੇਖੋ ਇਹ ਕਿੰਨਾ ਛੋਟਾ ਹੋ ਰਿਹਾ ਹੈ...', 'ਹੁਣ ਇਹ ਸਿਰਫ਼ ਇੱਕ ਬਿੰਦੂ ਹੈ...', 'ਬ੍ਰਹਿਮੰਡ ਦੀ ਵਿਸ਼ਾਲਤਾ ਵਿੱਚ,\nਤੁਹਾਡੀ ਚਿੰਤਾ ਬਹੁਤ ਛੋਟੀ ਹੈ...', 'ਇਹ ਮਾਮੂਲੀ ਹੈ...', 'ਇਸ ਨੂੰ ਜਾਣ ਦਿਓ...']
  },
  ml: {
    langLabel: 'മലയാളം',
    prompt: 'നിങ്ങളെ അലട്ടുന്നത് എന്താണ്?',
    placeholder: 'നിങ്ങളുടെ ചിന്ത എഴുതുക...',
    done: 'പൂർത്തിയായി',
    enterHint: 'അല്ലെങ്കിൽ എന്റർ അമർത്തുക',
    resolution: 'നിങ്ങൾക്ക് അല്പം ഭേദം തോന്നുന്നുവെന്ന് കരുതുന്നു.',
    restart: 'വീണ്ടും ശ്രമിക്കുക',
    phrases: ['ദീർഘമായി ശ്വാസമെടുക്കുക...', 'നിങ്ങളുടെ ചിന്ത ചെറുതാകുന്നത് കാണുക...', 'അത് എത്ര ചെറുതാകുന്നു എന്ന് നോക്കൂ...', 'ഇപ്പോൾ അതൊരു ബിന്ദു മാത്രമാണ്...', 'പ്രപഞ്ചത്തിന്റെ വിശാലതയിൽ,\nനിങ്ങളുടെ ഉത്കണ്ഠ വളരെ ചെറുതാണ്...', 'അത് നിസ്സാരമാണ്...', 'അത് വിട്ടുകളയുക...']
  },
  kn: {
    langLabel: 'ಕನ್ನಡ',
    prompt: 'ನಿಮಗೆ ಏನು ತೊಂದರೆ ಕೊಡುತ್ತಿದೆ?',
    placeholder: 'ನಿಮ್ಮ ಆಲೋಚನೆ ಬರೆಯಿರಿ...',
    done: 'ಮುಗಿದಿದೆ',
    enterHint: 'ಅಥವಾ ಎಂಟರ್ ಒತ್ತಿ',
    resolution: 'ನಿಮಗೆ ಸ್ವಲ್ಪ ಉತ್ತಮ ಅನಿಸುತ್ತಿದೆ ಎಂದು ಭಾವಿಸುತ್ತೇವೆ.',
    restart: 'ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ',
    phrases: ['ದೀರ್ಘವಾಗಿ ಉಸಿರಾಡಿ...', 'ನಿಮ್ಮ ಆಲೋಚನೆ ಚಿಕ್ಕದಾಗುವುದನ್ನು ನೋಡಿ...', 'ಅದು ಎಷ್ಟು ಚಿಕ್ಕದಾಗುತ್ತಿದೆ ಎಂದು ನೋಡಿ...', 'ಈಗ ಅದು ಕೇವಲ ಒಂದು ಚುಕ್ಕೆ...', 'ಬ್ರಹ್ಮಾಂಡದ ವಿಶಾಲತೆಯಲ್ಲಿ,\nನಿಮ್ಮ ಚಿಂತೆ ತುಂಬಾ ಚಿಕ್ಕದು...', 'ಅದು ಅತ್ಯಲ್ಪ...', 'ಅದನ್ನು ಹೋಗಲು ಬಿಡಿ...']
  },
  si: {
    langLabel: 'සිංහල',
    prompt: 'ඔබට කරදර කරන්නේ කුමක්ද?',
    placeholder: 'ඔබේ අදහස ටයිප් කරන්න...',
    done: 'හරි',
    enterHint: 'නැත්නම් enter ඔබන්න',
    resolution: 'ඔබට ටිකක් හොඳ යැයි සිතමි.',
    restart: 'නැවත උත්සාහ කරන්න',
    phrases: ['ගැඹුරු හුස්මක් ගන්න...', 'ඔබේ අදහස කුඩා වන හැටි බලන්න...', 'එය කොතරම් කුඩා වෙනවාද බලන්න...', 'දැන් එය තිතක් පමණයි...', 'විශ්වයේ විශාලත්වය තුළ,\nඔබේ කනස්සල්ල ඉතා කුඩායි...', 'එය වැදගත් නොවේ...', 'එය අමතක කරන්න...']
  },
  my: {
    langLabel: 'ဗမာစာ',
    prompt: 'မင်းကို ဘာတွေ စိတ်အနှောင့်အယှက်ဖြစ်စေလဲ?',
    placeholder: 'မင်းရဲ့ အတွေးကို ရိုက်ထည့်ပါ...',
    done: 'ပြီးပြီ',
    enterHint: 'ဒါမှမဟုတ် enter ခေါက်ပါ',
    resolution: 'မင်း နည်းနည်း ပိုသက်သာမယ်လို့ မျှော်လင့်ပါတယ်။',
    restart: 'ထပ်စမ်းကြည့်ပါ',
    phrases: ['အသက်ပြင်းပြင်းရှူပါ...', 'မင်းရဲ့ အတွေးတွေ သေးငယ်သွားတာကို ကြည့်ပါ...', 'ဘယ်လောက် သေးငယ်သွားလဲဆိုတာ ကြည့်ပါ...', 'အခုတော့ အစက်ကလေးပဲ ကျန်တော့တယ်...', 'ကျယ်ပြောလှတဲ့ စကြဝဠာထဲမှာ၊\nမင်းရဲ့ စိုးရိမ်ပူပန်မှုက သိပ်သေးငယ်ပါတယ်...', 'ဒါဟာ အရေးမပါပါဘူး...', 'လွှတ်ချလိုက်ပါ...']
  },
  km: {
    langLabel: 'ខ្មែរ',
    prompt: 'តើមានអ្វីរំខានអ្នក?',
    placeholder: 'វាយបញ្ចូលគំនិតរបស់អ្នក...',
    done: 'រួចរាល់',
    enterHint: 'ឬចុច enter',
    resolution: 'សង្ឃឹមថាអ្នកមានអារម្មណ៍ធូរស្រាលបន្តិច។',
    restart: 'សាកល្បងម្ដងទៀត',
    phrases: ['ដកដង្ហើមវែងៗ...', 'មើលគំនិតរបស់អ្នកកាន់តែតូចទៅៗ...', 'មើលថាតើវាកាន់តែតូចប៉ុណ្ណា...', 'ឥឡូវវាគ្រាន់តែជាចំណុចមួយប៉ុណ្ណោះ...', 'នៅក្នុងភាពធំល្វឹងល្វើយនៃចក្រវាល,\nការព្រួយបារម្ភរបស់អ្នកគឺតូចណាស់...', 'វាមិនសំខាន់ទេ...', 'បណ្តោយវាទៅ...']
  },
  lo: {
    langLabel: 'ລາວ',
    prompt: 'ມີຫຍັງລົບກວນເຈົ້າ?',
    placeholder: 'ພິມຄວາມຄິດຂອງເຈົ້າ...',
    done: 'ສຳເລັດ',
    enterHint: 'ຫຼືກົດ enter',
    resolution: 'ຫວັງວ່າເຈົ້າຈະຮູ້ສຶກດີຂຶ້ນໜ້ອຍໜຶ່ງ.',
    restart: 'ລອງໃໝ່ອີກຄັ້ງ',
    phrases: ['ຫາຍໃຈເລິກໆ...', 'ເບິ່ງຄວາມຄິດຂອງເຈົ້າໜ້ອຍລົງ...', 'ເບິ່ງວ່າມັນນ້ອຍລົງສໍ່າໃດ...', 'ຕອນນີ້ມັນເປັນພຽງຈຸດດຽວ...', 'ໃນຄວາມກວ້າງໃຫຍ່ຂອງຈັກກະວານ,\nຄວາມກັງວົນຂອງເຈົ້າແມ່ນນ້ອຍຫຼາຍ...', 'ມັນບໍ່ສຳຄັນ...', 'ປ່ອຍມັນໄປ...']
  },
  ne: {
    langLabel: 'नेपाली',
    prompt: 'तपाईलाई के कुराले सताइरहेको छ?',
    placeholder: 'आफ्नो विचार लेख्नुहोस्...',
    done: 'सकियो',
    enterHint: 'वा इन्टर थिच्नुहोस्',
    resolution: 'आशा छ तपाईलाई अलि राम्रो महसुस भइरहेको छ।',
    restart: 'फेरि प्रयास गर्नुहोस्',
    phrases: ['लामो सास फेर्नुहोस्...', 'तपाईंको विचार सानो हुँदै गइरहेको हेर्नुहोस्...', 'हेर्नुहोस् यो कति सानो हुँदैछ...', 'अब यो केवल एक थोप्ला हो...', 'ब्रह्माण्डको विशालतामा,\nतपाईंको चिन्ता धेरै सानो छ...', 'यो नगण्य छ...', 'यसलाई जान दिनुहोस्...']
  },
  fa: {
    langLabel: 'فارسی',
    prompt: 'چه چیزی شما را آزار می دهد؟',
    placeholder: 'فکر خود را تایپ کنید...',
    done: 'انجام شد',
    enterHint: 'یا اینتر را بزنید',
    resolution: 'امیدواریم کمی احساس بهتری داشته باشید.',
    restart: 'دوباره امتحان کنید',
    phrases: ['یک نفس عمیق بکشید...', 'ببینید فکرتان کوچکتر می شود...', 'ببینید چقدر دارد کوچک می شود...', 'حالا فقط یک نقطه است...', 'در وسعت کیهان،\nنگرانی شما بسیار کوچک است...', 'بی اهمیت است...', 'رهایش کنید...']
  },
  ku: {
    langLabel: 'Kurdî',
    prompt: 'Çi te aciz dike?',
    placeholder: 'Fikra xwe binivîse...',
    done: 'Temam',
    enterHint: 'an jî enter bike',
    resolution: 'Hêvîdar in tu hinekî baştir hîs dikî.',
    restart: 'Dîsa biceribîne',
    phrases: ['Nefeseke kûr bikişîne...', 'Biner fikra te çawa biçûk dibe...', 'Biner çiqas biçûk dibe...', 'Niha tenê xalek e...', 'Di berfirehiya gerdûnê de,\nfikara te pir biçûk e...', 'Bê girîng e...', 'Bila here...']
  },
  ps: {
    langLabel: 'پښتو',
    prompt: 'څه شی تاسو ځوروي؟',
    placeholder: 'خپل فکر ولیکئ...',
    done: 'ترسره شو',
    enterHint: 'یا انټر ووهئ',
    resolution: 'هیله ده چې تاسو لږ ښه احساس کوئ.',
    restart: 'بیا هڅه وکړئ',
    phrases: ['ژوره ساه واخلئ...', 'ګورئ چې ستاسو فکر کوچنی کیږي...', 'وګورئ چې دا څومره کوچنی کیږي...', 'اوس دا یوازې یوه نقطه ده...', 'د کائنات په پراختیا کې،\nستاسو اندیښنه خورا کوچنۍ ده...', 'دا بې ارزښته ده...', 'پریږدئ چې لاړ شي...']
  },
  so: {
    langLabel: 'Soomaali',
    prompt: 'Maxaa ku dhibaya?',
    placeholder: 'Qor fikirkaaga...',
    done: 'La sameeyay',
    enterHint: 'ama riix enter',
    resolution: 'Waxaan rajaynaynaa inaad dareemayso wax yar ka roon.',
    restart: 'Mar kale isku day',
    phrases: ['Neef qoto dheer qaado...', 'Daawo fikirkaaga oo sii yaraanaya...', 'Eeg sida uu u yaraanayo...', 'Hadda waa uun dhibic...', 'Calamka wayn dhexdiisa,\nwalwalkaagu aad buu u yar yahay...', 'Waa wax aan muhiim ahayn...', 'Isku dhaaf...']
  },
  ha: {
    langLabel: 'Hausa',
    prompt: 'Me ke damun ku?',
    placeholder: 'Buga tunanin ku...',
    done: 'An gama',
    enterHint: 'ko danna enter',
    resolution: 'Da fatan kun ji ɗan dama-dama.',
    restart: 'Sake gwadawa',
    phrases: ['Ja numfashi mai zurfi...', 'Kalli tunanin ku yana ƙara ƙanƙanta...', 'Duba yadda yake ƙara ƙanƙanta...', 'Yanzu ɗigo ne kawai...', 'A cikin faɗin sararin samaniya,\ndamuwar ku tana da ƙanƙanta...', 'Ba shi da muhimmanci...', 'Ku bar shi ya tafi...']
  },
  af: {
    langLabel: 'Afrikaans',
    prompt: 'Wat pla jou?',
    placeholder: 'Tik jou gedagte...',
    done: 'Klaar',
    enterHint: 'of druk enter',
    resolution: 'Hoop jy voel effens beter.',
    restart: 'Probeer weer',
    phrases: ['Haal diep asem...', 'Kyk hoe jou gedagte kleiner word...', 'Sien hoe klein dit word...', 'Dit is nou net \'n spikkeltjie...', 'In die uitgestrektheid van die heelal,\nis jou bekommernis so klein...', 'Dit is onbeduidend...', 'Laat dit gaan...']
  },
  sk: {
    langLabel: 'Slovenčina',
    prompt: 'Čo ťa trápi?',
    placeholder: 'Napíš svoju myšlienku...',
    done: 'Hotovo',
    enterHint: 'alebo stlač enter',
    resolution: 'Dúfame, že sa cítiš trochu lepšie.',
    restart: 'Skúsiť znova',
    phrases: ['Zhlboka sa nadýchni...', 'Sleduj, ako sa tvoja myšlienka zmenšuje...', 'Pozri, aká je malá...', 'Teraz je to len bodka...', 'V rozľahlosti vesmíru,\nje tvoja starosť taká malá...', 'Je bezvýznamná...', 'Nechaj to ísť...']
  },
  bg: {
    langLabel: 'Български',
    prompt: 'Какво те притеснява?',
    placeholder: 'Напиши мисълта си...',
    done: 'Готово',
    enterHint: 'или натисни enter',
    resolution: 'Надяваме се да се чувстваш малко по-добре.',
    restart: 'Опитай отново',
    phrases: ['Поеми дълбоко дъх...', 'Гледай как мисълта ти се смалява...', 'Виж колко малка става...', 'Сега е само една точка...', 'В необятността на вселената,\nтвоята тревога е толкова малка...', 'Тя е незначителна...', 'Остави я да си отиде...']
  },
  hr: {
    langLabel: 'Hrvatski',
    prompt: 'Što te muči?',
    placeholder: 'Upiši svoju misao...',
    done: 'Gotovo',
    enterHint: 'ili pritisni enter',
    resolution: 'Nadamo se da se osjećaš malo bolje.',
    restart: 'Pokušaj ponovno',
    phrases: ['Duboko udahni...', 'Gledaj kako se tvoja misao smanjuje...', 'Vidi kako postaje mala...', 'Sada je samo točkica...', 'U prostranstvu svemira,\ntvoja je briga tako mala...', 'Ona je beznačajna...', 'Pusti je...']
  },
  sr: {
    langLabel: 'Српски',
    prompt: 'Шта те мучи?',
    placeholder: 'Упиши своју мисао...',
    done: 'Готово',
    enterHint: 'или притисни ентер',
    resolution: 'Надамо се да се осећаш мало боље.',
    restart: 'Покушај поново',
    phrases: ['Дубоко удахни...', 'Гледај како се твоја мисао смањује...', 'Види како постаје мала...', 'Сада је само тачкица...', 'У пространству свемира,\nтвоја брига је тако мала...', 'Она је безначајна...', 'Пусти је...']
  },
  sl: {
    langLabel: 'Slovenščina',
    prompt: 'Kaj te muči?',
    placeholder: 'Vpiši svojo misel...',
    done: 'Končano',
    enterHint: 'ali pritisni enter',
    resolution: 'Upamo, da se počutiš malo bolje.',
    restart: 'Poskusi znova',
    phrases: ['Globoko vdihni...', 'Opazuj, kako se tvoja misel manjša...', 'Poglej, kako majhna postaja...', 'Zdaj je samo še pikica...', 'V prostranstvu vesolja,\nje tvoja skrb tako majhna...', 'Je nepomembna...', 'Spusti jo...']
  },
  lt: {
    langLabel: 'Lietuvių',
    prompt: 'Kas tave neramina?',
    placeholder: 'Įrašyk savo mintį...',
    done: 'Baigta',
    enterHint: 'arba paspausk enter',
    resolution: 'Tikimės, kad jautiesi šiek tiek geriau.',
    restart: 'Bandyti dar kartą',
    phrases: ['Giliai įkvėpk...', 'Stebėk, kaip tavo mintis mažėja...', 'Pažiūrėk, kokia ji tampa maža...', 'Dabar tai tik taškelis...', 'Visatos platybėse,\ntavo rūpestis yra toks mažas...', 'Jis nereikšmingas...', 'Paleisk jį...']
  },
  lv: {
    langLabel: 'Latviešu',
    prompt: 'Kas tevi satrauc?',
    placeholder: 'Ieraksti savu domu...',
    done: 'Pabeigts',
    enterHint: 'vai nospied enter',
    resolution: 'Ceram, ka jūties nedaudz labāk.',
    restart: 'Mēģināt vēlreiz',
    phrases: ['Dziļi ieelpo...', 'Vēro, kā tava doma kļūst mazāka...', 'Paskaties, cik maza tā kļūst...', 'Tagad tas ir tikai punktiņš...', 'Visuma plašumos,\ntavas raizes ir tik mazas...', 'Tās ir nenozīmīgas...', 'Ļauj tām iet...']
  },
  et: {
    langLabel: 'Eesti',
    prompt: 'Mis sind vaevab?',
    placeholder: 'Kirjuta oma mõte...',
    done: 'Valmis',
    enterHint: 'või vajuta enter',
    resolution: 'Loodame, et tunned end veidi paremini.',
    restart: 'Proovi uuesti',
    phrases: ['Hinga sügavalt sisse...', 'Vaata, kuidas su mõte väiksemaks muutub...', 'Vaata, kui väikeseks see muutub...', 'Nüüd on see vaid täpp...', 'Universumi avarustes\non sinu mure nii väike...', 'See on tähtsusetu...', 'Lase sel minna...']
  },
  is: {
    langLabel: 'Íslenska',
    prompt: 'Hvað er að angra þig?',
    placeholder: 'Skrifaðu hugsun þína...',
    done: 'Búið',
    enterHint: 'eða ýttu á enter',
    resolution: 'Vona að þér líði aðeins betur.',
    restart: 'Reyna aftur',
    phrases: ['Andaðu djúpt...', 'Horfðu á hugsun þína minnka...', 'Sjáðu hversu lítil hún er að verða...', 'Hún er bara punktur núna...', 'Í víðáttu alheimsins,\ner áhyggja þín svo lítil...', 'Hún er óveruleg...', 'Slepptu henni...']
  }
};

/* ============================================================
   Helper: Get all available language codes
   ============================================================ */
export const getLanguageCodes = () => Object.keys(translations);

/* ============================================================
   Helper: Get a language's native label
   ============================================================ */
export const getLanguageLabel = (code) => translations[code]?.langLabel || code;

/* ============================================================
   Helper: Get translations for a specific language
   Falls back to English if the language code is not found
   ============================================================ */
export const getTranslation = (code) => translations[code] || translations.en;

export default translations;
