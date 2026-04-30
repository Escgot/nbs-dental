export type Language = 'fr' | 'en' | 'ar';

export const translations = {
  fr: {
    title: "Dr Nawres Ben Salah - Dentiste La Marsa Tunis",
    nav: {
      doctorName: "Dr Nawres Ben Salah",
      dentist: "Médecin Dentiste",
      clinic: "Cabinet dentaire à La Marsa–Tunis",
      home: "Accueil",
      services: "Services",
      about: "À Propos",
      reviews: "Avis",
      blog: "Blog",
      rdv: "Prendre RDV",
    },
    hero: {
      overline: "CABINET DENTAIRE — LA MARSA, TUNIS",
      titlePart1: "Votre sourire,",
      titlePart2: "notre passion",
      description: "Des soins dentaires de haute qualité dans un environnement apaisant et moderne. Prenez soin de votre sourire en toute serrénité.",
      bookBtn: "Prendre rendez-vous",
      servicesBtn: "Nos services",
    },
    stats: {
      satisfaction: "Satisfaction",
      patients: "Patients",
      reviews: "Google Avis"
    },
    urgency: {
      title: "Urgence dentaire ?",
      description: "Nous sommes disponibles pour les urgences du lundi au samedi.",
      callBtn: "Appeler"
    },
    services: {
      overline: "CE QUE NOUS OFFRONS",
      title: "Nos services",
      description: "Une dentisterie esthétique, préventive et restauratrice dans un cadre calme et premium.",
      items: [
        {
          title: "Soins préventifs",
          desc: "Bilan complet, détartrage et soins des caries pour préserver la santé naturelle de vos dents au quotidien."
        },
        {
          title: "Implants dentaires",
          desc: "Remplacement durable, fonctionnel et esthétique de vos dents manquantes avec des matériaux de haute qualité."
        },
        {
          title: "Facettes dentaires",
          desc: "Retrouvez un sourire parfait, aligné et éclatant sur-mesure grâce à de fines pellicules en céramique."
        },
        {
          title: "Gouttières invisibles",
          desc: "Correction de l'alignement dentaire en toute discrétion avec des gouttières transparentes et confortables."
        },
        {
          title: "Couronnes céramique",
          desc: "Restauration solide et 100% naturelle pour protéger et sublimer vos dents abîmées ou fragilisées."
        },
        {
          title: "Blanchiment dentaire",
          desc: "Éclaircissement sécurisé, rapide et efficace au fauteuil pour un sourire rayonnant de blancheur."
        }
      ]
    },
    about: {
      overline: "À propos du Docteur",
      expertiseTitle: "Expertise Médicale",
      title: "L'Art du Sourire & l'Excellence Dentaire",
      p1: "Passionnée par l'esthétique dentaire, le Dr Nawres Ben Salah vous accueille à La Marsa. Diplômée de la Faculté de Médecine Dentaire de Monastir et formée en dentisterie restauratrice et esthétique.",
      p2: "Elle allie précision technique et sens artistique pour sublimer votre sourire, avec des soins sans douleur et une attention constante à votre confort.",
      bookBtn: "Prendre Rendez-vous",
      features: [
        { id: "01", title: "Écoute", desc: "Un premier échange précis pour comprendre vos attentes et vos priorités." },
        { id: "02", title: "Diagnostic", desc: "Un examen clair, des options expliquées simplement et un plan de soin personnalisé." },
        { id: "03", title: "Soin", desc: "Des gestes doux, modernes et minutieux pour un résultat naturel et durable." }
      ]
    },
    testimonials: {
      overline: "Témoignages",
      title: "Ce que disent nos patients",
      giveReview: "Donner mon avis",
      reviewLink: "https://g.page/r/CSKumJ-pYnUeEBM/review",
      items: [
        {
          name: "Nadine Becha",
          text: "Dr nawress est vraiment excellente, très humaine, elle fait attention au détail je la recommande vivement",
          role: "Docteure"
        },
        {
          name: "Manar Gammoudi",
          text: "Une excellente expérience. Elle est à l’écoute, très rassurante. Étant de nature assez stressée par les rendez-vous chez le dentiste, j’ai été tout de suite apaisée par la douceur et la patience de Dr Nawres. Merci pour votre humanité Dr.",
          role: "Patiente"
        },
        {
          name: "Mrayah Amine",
          text: "Je recommande vivement docteur nawres Ben salah ! Très professionnelle, douce et à l’écoute, elle met tout de suite en confiance. Les soins sont réalisés avec beaucoup de précision et sans douleur. Le cabinet est propre, bien organisé et l’accueil est toujours chaleureux. Je sens vraiment qu’elle se soucie du bien-être de ses patients. Une excellente expérience à chaque visite !",
          role: "Patient"
        },
        {
          name: "Myriam Mokaddem",
          text: "Une excellente dentiste, un accueil chaleureux et surtout souriant.\nUn médecin à l'écoute, conseils professionnels. Un beau cabinet.\nHumble et disponible. Je suis allée en urgence, elle était présente.\nMerci pour vos soins et pour vos conseils.",
          role: "Patiente"
        },
        {
          name: "Hend Mzah",
          text: "Dentiste douce et à l’écoute. Elle accorde la plus grande attention à ces patients. Merci et bonne continuation!",
          role: "Patiente"
        },
        {
          name: "Awatef Tlili",
          text: "Très contente de ma visite ! Le docteur est douce , à l’écoute et prend vraiment le temps d’expliquer les choses. On repart avec de bons conseils. Je recommande sans hésiter 😊.",
          role: "Patiente"
        }
      ]
    },
    footer: {
      doctorName: "Dr Nawres Ben Salah",
      role: "Médecin dentiste",
      description: "Cabinet dentaire dédié à votre bien-être et à la beauté de votre sourire.",
      contactTitle: "Contact",
      linksTitle: "Liens",
      socialsTitle: "Réseaux",
      scheduleTitle: "Horaires",
      address: "Immeuble Kmar Médical Center, B 2-3\nAppartement B 23, Ain Zaghouen Nord\nCité Aziza, La Marsa, Tunis 2046",
      findUs: "Nous trouver",
      calcItinerary: "Obtenir l'itinéraire",
      rights: "Tous droits réservés.",
      schedule: {
        monFri: "Lundi – Vendredi",
        monFriTime: "08h00 – 18h00",
        sat: "Samedi",
        satTime: "09h00 – 13h00",
        sun: "Dimanche",
        sunTime: "Sur Rendez-vous"
      },
      backToTop: "Retour"
    },
    reservation: {
      overline: "RÉSERVATION",
      title: "Prendre rendez-vous",
      description: "Choisissez votre soin, puis contactez le cabinet pour confirmer le créneau le plus adapté.",
      shortAddress: "La Marsa, Tunis",
      step1: "Type de soin",
      step2: "Date & heure",
      step3: "Confirmation",
      careQuestion: "Quel type de soin souhaitez-vous ?",
      careTypes: {
        'Détartrage': "Détartrage",
        'Urgence': "Urgence",
        'Blanchiment': "Blanchiment",
        'Autre soin': "Autre soin",
        'Implants': "Implants",
        'Facettes': "Facettes",
        'Autre type de soin': "Autre type de soin"
      },
      dateQuestion: "Choisissez une date",
      timeQuestion: "Choisissez un créneau",
      backBtn: "Retour",
      confirmTitle: "Confirmez votre rendez-vous",
      summaryCare: "Soin",
      summaryDate: "Date",
      summaryTime: "Heure",
      fullName: "Nom complet",
      namePlaceholder: "Votre nom",
      phone: "Téléphone",
      phonePlaceholder: "Votre numéro",
      email: "Email (optionnel)",
      emailPlaceholder: "Votre email",
      confirmBtn: "Confirmer le rendez-vous",
      successTitle: "Rendez-vous confirmé !",
      successThanks: "Merci",
      successText1: "Votre rendez-vous pour",
      successText2: "est confirmé le",
      successText3: "à",
      successSub: "Nous vous contacterons pour confirmer.",
      anotherBtn: "Prendre un autre rendez-vous",
      days: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
      months: [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ]
    },
    blog: {
      overline: "CONSEILS & ACTUALITÉS",
      title: "Notre Blog Dentaire",
      readMore: "Lire la suite",
      items: [
        {
          title: "Le détartrage : pourquoi est-ce essentiel ?",
          excerpt: "Découvrez l'importance d'un détartrage régulier pour prévenir les maladies parodontales et garder un sourire éclatant.",
          date: "12 Mars 2024",
          image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Tout savoir sur les facettes dentaires",
          excerpt: "Envie d'un sourire parfait ? Les facettes en céramique sont la solution idéale pour corriger les imperfections durablement.",
          date: "05 Mars 2024",
          image: "https://images.unsplash.com/photo-1588771962635-47c17bc5655a?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Blanchiment : nos conseils pour un résultat durable",
          excerpt: "Vous venez de faire un blanchiment ? Voici comment préserver la blancheur de vos dents au quotidien avec quelques gestes simples.",
          date: "28 Février 2024",
          image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
        }
      ]
    }
  },
  en: {
    title: "Dr Nawres Ben Salah - Dentist La Marsa Tunis",
    nav: {
      doctorName: "Dr Nawres Ben Salah",
      dentist: "Dental Surgeon",
      clinic: "Dental Clinic in La Marsa–Tunis",
      home: "Home",
      services: "Services",
      about: "About",
      reviews: "Reviews",
      blog: "Blog",
      rdv: "Book Now",
    },
    hero: {
      overline: "DR NAWRES BEN SALAH DENTAL CLINIC — LA MARSA, TUNIS",
      titlePart1: "Your smile,",
      titlePart2: "our passion",
      description: "High-quality dental care in a soothing and modern environment. Take care of your smile with full peace of mind.",
      bookBtn: "Book an appointment",
      servicesBtn: "Our services",
    },
    stats: {
      satisfaction: "Satisfaction",
      patients: "Patients",
      reviews: "Google Reviews"
    },
    urgency: {
      title: "Dental Emergency?",
      description: "We are available for emergencies from Monday to Saturday.",
      callBtn: "Call"
    },
    services: {
      overline: "WHAT WE OFFER",
      title: "Our services",
      description: "Aesthetic, preventive and restorative dentistry in a calm and premium setting.",
      items: [
        {
          title: "Preventive Care",
          desc: "Complete check-up, scaling, and cavity treatment to preserve the natural health of your teeth."
        },
        {
          title: "Dental Implants",
          desc: "Durable, functional, and aesthetic replacement of missing teeth with high-quality materials."
        },
        {
          title: "Dental Veneers",
          desc: "Get a perfect, aligned, and radiant custom-made smile thanks to thin ceramic layers."
        },
        {
          title: "Invisible Aligners",
          desc: "Correction of dental alignment in total discretion with transparent and comfortable aligners."
        },
        {
          title: "Ceramic Crowns",
          desc: "Solid and 100% natural restoration to protect and enhance your damaged or weakened teeth."
        },
        {
          title: "Teeth Whitening",
          desc: "Safe, fast, and effective chairside whitening for a radiantly white smile."
        }
      ]
    },
    about: {
      overline: "About the Doctor",
      expertiseTitle: "Medical Expertise",
      title: "The Art of the Smile & Dental Excellence",
      p1: "Passionate about cosmetic dentistry, Dr. Nawres Ben Salah welcomes you in La Marsa. Graduated from the Faculty of Dental Medicine of Monastir and trained by the international expert Romain Ceinos in restorative and aesthetic dentistry.",
      p2: "She combines technical precision and art to enhance your smile, ensuring painless and benevolent care.",
      bookBtn: "Book an Appointment",
      features: [
        { id: "01", title: "Listening", desc: "A precise initial exchange to understand your expectations and priorities." },
        { id: "02", title: "Diagnostic", desc: "A clear exam, simply explained options and a personalized care plan." },
        { id: "03", title: "Care", desc: "Gentle, modern and meticulous gestures for a natural and lasting result." }
      ]
    },
    testimonials: {
      overline: "Testimonials",
      title: "What our patients say",
      giveReview: "Leave a review",
      reviewLink: "https://g.page/r/CSKumJ-pYnUeEBM/review",
      items: [
        {
          name: "Nadine Becha",
          text: "Dr. Nawress is truly excellent, very compassionate, and attentive to detail. I highly recommend her.",
          role: "Doctor"
        },
        {
          name: "Manar Gammoudi",
          text: "An excellent experience. She is attentive and very reassuring. As I tend to get quite stressed about dentist appointments, I was immediately put at ease by Dr. Nawres' gentleness and patience. Thank you for your compassion, Dr.",
          role: "Patient"
        },
        {
          name: "Mrayah Amine",
          text: "I highly recommend Dr. Nawres Ben Salah! Very professional, gentle, and attentive, she immediately puts you at ease. The treatments are performed with great precision and are painless. The office is clean and well-organized, and the welcome is always warm. I truly feel that she cares about her patients' well-being. An excellent experience every time!",
          role: "Patient"
        },
        {
          name: "Myriam Mokaddem",
          text: "An excellent dentist, a warm and welcoming atmosphere, and above all, a smile.\nA doctor who listens and provides professional advice. A beautiful practice.\nHumble and available. I went in for an emergency, and she was there.\nThank you for your care and advice.",
          role: "Patient"
        },
        {
          name: "Hend Mzah",
          text: "A gentle and attentive dentist. She gives her patients the utmost attention. Thank you and best of luck!",
          role: "Patient"
        },
        {
          name: "Awatef Tlili",
          text: "Very happy with my visit! The doctor is gentle, attentive, and really takes the time to explain things. You leave with excellent advice. I highly recommend her without hesitation 😊.",
          role: "Patient"
        }
      ]
    },
    footer: {
      doctorName: "Dr Nawres Ben Salah",
      role: "Dental Surgeon",
      description: "A dental clinic dedicated to your well-being and the beauty of your smile.",
      contactTitle: "Contact",
      linksTitle: "Links",
      socialsTitle: "Socials",
      scheduleTitle: "Working Hours",
      address: "Immeuble Kmar Médical Center, B 2-3\nAppartement B 23, Ain Zaghouen Nord\nCité Aziza, La Marsa, Tunis 2046",
      findUs: "Find Us",
      calcItinerary: "Get Directions",
      rights: "All rights reserved.",
      schedule: {
        monFri: "Monday – Friday",
        monFriTime: "08:00 AM – 06:00 PM",
        sat: "Saturday",
        satTime: "09:00 AM – 01:00 PM",
        sun: "Sunday",
        sunTime: "By Appointment"
      },
      backToTop: "Back to top"
    },
    reservation: {
      overline: "BOOKING",
      title: "Book an appointment",
      description: "Choose your care, then contact the clinic to confirm the most suitable slot.",
      shortAddress: "La Marsa, Tunis",
      step1: "Type of care",
      step2: "Date & Time",
      step3: "Confirmation",
      careQuestion: "What type of care do you want?",
      careTypes: {
        'Détartrage': "Scaling",
        'Urgence': "Emergency",
        'Blanchiment': "Whitening",
        'Autre soin': "Other care",
        'Implants': "Implants",
        'Facettes': "Veneers",
        'Autre type de soin': "Other treatment"
      },
      dateQuestion: "Choose a date",
      timeQuestion: "Choose a time slot",
      backBtn: "Back",
      confirmTitle: "Confirm your appointment",
      summaryCare: "Care",
      summaryDate: "Date",
      summaryTime: "Time",
      fullName: "Full Name",
      namePlaceholder: "Your name",
      phone: "Phone",
      phonePlaceholder: "Your number",
      email: "Email (optional)",
      emailPlaceholder: "Your email",
      confirmBtn: "Confirm Appointment",
      successTitle: "Appointment confirmed!",
      successThanks: "Thank you",
      successText1: "Your appointment for",
      successText2: "is confirmed on",
      successText3: "at",
      successSub: "We will contact you to confirm.",
      anotherBtn: "Book another appointment",
      days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      months: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]
    },
    blog: {
      overline: "TIPS & NEWS",
      title: "Our Dental Blog",
      readMore: "Read More",
      items: [
        {
          title: "Scaling: Why is it essential?",
          excerpt: "Discover the importance of regular scaling to prevent periodontal diseases and keep a bright smile.",
          date: "March 12, 2024",
          image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Everything about dental veneers",
          excerpt: "Want a perfect smile? Ceramic veneers are the ideal solution to correct imperfections durably.",
          date: "March 05, 2024",
          image: "https://images.unsplash.com/photo-1588771962635-47c17bc5655a?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Whitening: Our tips for a lasting result",
          excerpt: "Just had a whitening treatment? Here is how to preserve the whiteness of your teeth daily with simple steps.",
          date: "February 28, 2024",
          image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
        }
      ]
    }
  },
  ar: {
    title: "د. نورس بن صالح - طبيبة أسنان بالمرسى تونس",
    nav: {
      doctorName: "د. نورس بن صالح",
      dentist: "طبيبة أسنان",
      clinic: "عيادة أسنان في المرسى - تونس",
      home: "الرئيسية",
      services: "خدماتنا",
      about: "عن الدكتورة",
      reviews: "آراء المرضى",
      blog: "المدونة",
      rdv: "حجز موعد",
    },
    hero: {
      overline: "عيادة الدكتورة نورس بن صالح لطب الأسنان - المرسى، تونس",
      titlePart1: "ابتسامتكم،",
      titlePart2: "شغفنا",
      description: "عناية طبية متميزة في بيئة هادئة وحديثة. اعتنوا بابتسامتكم بكل طمأنينة.",
      bookBtn: "احجز موعداً",
      servicesBtn: "خدماتنا",
    },
    stats: {
      satisfaction: "رضا المرضى",
      patients: "مريض",
      reviews: "تقييمات جوجل"
    },
    urgency: {
      title: "حالة طارئة؟",
      description: "نحن متواجدون للحالات الطارئة من الاثنين إلى السبت.",
      callBtn: "اتصال"
    },
    services: {
      overline: "ماذا نقدم",
      title: "خدماتنا",
      description: "طب أسنان تجميلي ووقائي وترميمي في أجواء هادئة وفاخرة.",
      items: [
        {
          title: "العناية الوقائية",
          desc: "فحص شامل، تنظيف الجير، وعلاج التسوس للحفاظ على الصحة الطبيعية لأسنانكم."
        },
        {
          title: "زراعة الأسنان",
          desc: "استبدال الأسنان المفقودة بمواد عالية الجودة تدوم طويلاً وتمنحكم مظهراً طبيعياً."
        },
        {
          title: "قشور الأسنان (فينيير)",
          desc: "احصلوا على ابتسامة مثالية ومتناسقة ومشرقة من خلال طبقات السيراميك الرقيقة."
        },
        {
          title: "تقويم الأسنان الشفاف",
          desc: "تصحيح اصطفاف الأسنان بكل سرية وراحة باستخدام قوالب شفافة وغير مرئية."
        },
        {
          title: "تيجان السيراميك",
          desc: "ترميم قوي وطبيعي 100% لحماية وتحسين مظهر أسنانكم التالفة أو الضعيفة."
        },
        {
          title: "تبييض الأسنان",
          desc: "تبييض آمن وسريع وفعال في العيادة للحصول على ابتسامة ناصعة البياض."
        }
      ]
    },
    about: {
      overline: "عن الدكتورة",
      expertiseTitle: "الخبرة الطبية",
      title: "فن الابتسامة والتميز في طب الأسنان",
      p1: "شغوفة بتجميل الأسنان، ترحب بكم الدكتورة نورس بن صالح في عيادتها بالمرسى. خريجة كلية طب الأسنان بالمنستير وتدربت على يد الخبير العالمي رومان سينوس في طب الأسنان الترميمي والتجميلي.",
      p2: "تجمع الدكتورة بين الدقة التقنية واللمسة الفنية لتجميل ابتسامتكم، مع ضمان علاج بدون ألم وبمنتهى اللطف والعناية.",
      bookBtn: "حجز موعد",
      features: [
        { id: "01", title: "الإصغاء", desc: "تبادل أولي دقيق لفهم تطلعاتكم وأولوياتكم." },
        { id: "02", title: "التشخيص", desc: "فحص واضح، خيارات مشروحة ببساطة وخطة علاج شخصية." },
        { id: "03", title: "العناية", desc: "حركات لطيفة، حديثة ودقيقة لنتيجة طبيعية ودائمة." }
      ]
    },
    testimonials: {
      overline: "آراء المرضى",
      title: "ماذا يقول مرضانا",
      giveReview: "أعطِ رأيك",
      reviewLink: "https://g.page/r/CSKumJ-pYnUeEBM/review",
      items: [
        {
          name: "نادين بيشة",
          text: "الدكتورة نورس ممتازة حقاً، إنسانة للغاية، تهتم بالتفاصيل وأوصي بها بشدة.",
          role: "دكتورة"
        },
        {
          name: "منار قمودي",
          text: "تجربة ممتازة. إنها مستمعة جيدة ومطمئنة للغاية. بما أنني عادة ما أشعر بالتوتر من مواعيد طبيب الأسنان، فقد شعرت بالراحة فوراً بفضل لطف وصبر الدكتورة نورس. شكراً لكِ على إنسانيتكِ يا دكتورة.",
          role: "مريضة"
        },
        {
          name: "أمين مرياح",
          text: "أوصي بشدة بالدكتورة نورس بن صالح! محترفة للغاية، لطيفة ومستمعة جيدة، تجعلك تشعر بالثقة فوراً. يتم إجراء العلاجات بدقة كبيرة وبدون ألم. العيادة نظيفة ومنظمة جيداً والاستقبال حار دائماً. أشعر حقاً أنها تهتم براحة مرضاها. تجربة ممتازة في كل زيارة!",
          role: "مريض"
        },
        {
          name: "مريم مقدم",
          text: "طبيبة أسنان ممتازة، استقبال حار ومبتسم دائماً.\nطبيبة تستمع جيداً وتقدم نصائح مهنية. عيادة جميلة.\nمتواضعة ومتاحة. ذهبت إليها في حالة طارئة وكانت موجودة.\nشكراً لكِ على العناية والنصائح.",
          role: "مريضة"
        },
        {
          name: "هند مزاح",
          text: "طبيبة أسنان لطيفة ومصغية. تولي اهتماماً كبيراً لمرضاها. شكراً وبالتوفيق!",
          role: "مريضة"
        },
        {
          name: "عواطف تليلي",
          text: "سعيدة جداً بزيارتي! الدكتورة لطيفة، تستمع جيداً وتأخذ وقتها حقاً لشرح الأمور. تخرج من عندها بنصائح ممتازة. أوصي بها بدون تردد 😊.",
          role: "مريضة"
        }
      ]
    },
    footer: {
      doctorName: "د. نورس بن صالح",
      role: "طبيبة أسنان",
      description: "عيادة أسنان مكرسة لراحتكم وجمال ابتسامتكم.",
      contactTitle: "اتصال",
      linksTitle: "روابط",
      socialsTitle: "تواصل اجتماعي",
      scheduleTitle: "أوقات العمل",
      address: "عمارة قمر ميديكال سنتر، B 2-3\nشقة B 23، عين زغوان الشمالية\nحي عزيزة، المرسى، تونس 2046",
      findUs: "موقعنا",
      calcItinerary: "احصل على الاتجاهات",
      rights: "جميع الحقوق محفوظة.",
      schedule: {
        monFri: "الاثنين – الجمعة",
        monFriTime: "08:00 صباحاً – 06:00 مساءً",
        sat: "السبت",
        satTime: "09:00 صباحاً – 01:00 مساءً",
        sun: "الأحد",
        sunTime: "بموعد مسبق"
      },
      backToTop: "العودة للأعلى"
    },
    reservation: {
      overline: "الحجز",
      title: "حجز موعد",
      description: "اختر نوع العلاج، ثم اتصل بالعيادة لتأكيد الموعد الأنسب.",
      shortAddress: "المرسى، تونس",
      step1: "نوع العلاج",
      step2: "التاريخ والوقت",
      step3: "التأكيد",
      careQuestion: "ما هو نوع العلاج الذي تريده؟",
      careTypes: {
        'Détartrage': "تنظيف الجير",
        'Urgence': "حالة طارئة",
        'Blanchiment': "تبييض الأسنان",
        'Autre soin': "علاج آخر",
        'Implants': "زراعة الأسنان",
        'Facettes': "قشور الأسنان",
        'Autre type de soin': "علاج آخر"
      },
      dateQuestion: "اختر التاريخ",
      timeQuestion: "اختر التوقيت",
      backBtn: "رجوع",
      confirmTitle: "أكد موعدك",
      summaryCare: "العلاج",
      summaryDate: "التاريخ",
      summaryTime: "الوقت",
      fullName: "الاسم الكامل",
      namePlaceholder: "اسمك",
      phone: "الهاتف",
      phonePlaceholder: "رقم هاتفك",
      email: "البريد الإلكتروني (اختياري)",
      emailPlaceholder: "بريدك الإلكتروني",
      confirmBtn: "تأكيد الموعد",
      successTitle: "تم تأكيد الموعد!",
      successThanks: "شكراً لك",
      successText1: "موعدك من أجل",
      successText2: "قد تم تأكيده بتاريخ",
      successText3: "على الساعة",
      successSub: "سنتصل بك للتأكيد النهائي.",
      anotherBtn: "حجز موعد آخر",
      days: ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
      months: [
        'جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان',
        'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
      ]
    },
    blog: {
      overline: "نصائح وأخبار",
      title: "مدونتنا لطب الأسنان",
      readMore: "اقرأ المزيد",
      items: [
        {
          title: "تنظيف الجير: لماذا هو ضروري؟",
          excerpt: "اكتشف أهمية تنظيف الجير الدوري للوقاية من أمراض اللثة والحفاظ على ابتسامة مشرقة.",
          date: "12 مارس 2024",
          image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "كل ما تريد معرفته عن قشور الأسنان",
          excerpt: "هل ترغب في ابتسامة مثالية؟ قشور السيراميك هي الحل الأمثل لتصحيح العيوب بشكل دائم.",
          date: "05 مارس 2024",
          image: "https://images.unsplash.com/photo-1588771962635-47c17bc5655a?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "تبييض الأسنان: نصائحنا لنتائج تدوم طويلاً",
          excerpt: "هل قمت بتبييض أسنانك للتو؟ إليك كيفية الحفاظ على بياض أسنانك يومياً بخطوات بسيطة.",
          date: "28 فبراير 2024",
          image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
        }
      ]
    }
  }
};
