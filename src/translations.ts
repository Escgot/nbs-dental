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
      rdv: "Prendre RDV",
    },
    hero: {
      overline: "CABINET DENTAIRE DR NAWRES BEN SALAH — LA MARSA, TUNIS",
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
      description: "Nous sommes disponibles pour les urgences du lundi au samedi."
    },
    services: {
      overline: "CE QUE NOUS OFFRONS",
      title: "Nos services",
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
      title: "L'Art du Sourire & l'Excellence Dentaire",
      p1: "Passionnée par l'esthétique dentaire, le Dr Nawres Ben Salah vous accueille à La Marsa. Diplômée de la Faculté de Médecine Dentaire de Monastir et formée par l'expert international Romain Ceinos en dentisterie restauratrice et esthétique.",
      p2: "Elle allie précision technique et art pour sublimer votre sourire, assurant des soins sans douleur et avec beaucoup de bienveillance.",
      bookBtn: "Prendre Rendez-vous"
    },
    testimonials: {
      overline: "Testimonial",
      title: "Ce que disent nos patients",
      giveReview: "Donner mon avis",
      items: [
        {
          name: "Nadia B",
          text: "Dentiste très douce et attentionnée. On se sent tout de suite en confiance. Je recommande les yeux fermés !",
          role: "Patiente"
        },
        {
          name: "Iyed",
          text: "Professionnel à l'écoute et très doux pendant les soins. Le cabinet est propre et l'accueil est chaleureux.",
          role: "Patient"
        },
        {
          name: "G.Mehdi",
          text: "Une praticienne d'une grande douceur... tout se passe sans douleur et avec beaucoup de pédagogie. Merci !",
          role: "Patient"
        },
        {
          name: "Smida.s",
          text: "Compétente, douce et attentionnée. Chaque visite se déroule avec sérieux et bienveillance, merci pour la qualité.",
          role: "Patiente"
        }
      ]
    },
    footer: {
      doctorName: "Dr Nawres Ben Salah",
      role: "Médecin dentiste",
      description: "Cabinet dentaire dédié à votre bien-être et à la beauté de votre sourire.",
      scheduleTitle: "Horaires",
      findUs: "Nous trouver",
      calcItinerary: "Calculer l'itinéraire",
      rights: "Tous droits réservés.",
      schedule: {
        monFri: "Lundi – Vendredi",
        monFriTime: "08h00 – 18h00",
        sat: "Samedi",
        satTime: "09h00 – 13h00",
        sun: "Dimanche",
        sunTime: "Sur Rendez-vous"
      }
    },
    reservation: {
      overline: "RÉSERVATION",
      title: "Prendre rendez-vous",
      step1: "Type de soin",
      step2: "Date & heure",
      step3: "Confirmation",
      careQuestion: "Quel type de soin souhaitez-vous ?",
      careTypes: {
        'Détartrage': "Détartrage",
        'Urgence': "Urgence",
        'Blanchiment': "Blanchiment",
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
      description: "We are available for emergencies from Monday to Saturday."
    },
    services: {
      overline: "WHAT WE OFFER",
      title: "Our services",
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
      title: "The Art of the Smile & Dental Excellence",
      p1: "Passionate about cosmetic dentistry, Dr. Nawres Ben Salah welcomes you in La Marsa. Graduated from the Faculty of Dental Medicine of Monastir and trained by the international expert Romain Ceinos in restorative and aesthetic dentistry.",
      p2: "She combines technical precision and art to enhance your smile, ensuring painless and benevolent care.",
      bookBtn: "Book an Appointment"
    },
    testimonials: {
      overline: "Testimonials",
      title: "What our patients say",
      giveReview: "Leave a review",
      items: [
        {
          name: "Nadia B",
          text: "Very gentle and attentive dentist. You immediately feel confident. I recommend with eyes closed!",
          role: "Patient"
        },
        {
          name: "Iyed",
          text: "Professional who listens and is extremely gentle during treatments. The clinic is clean and welcoming.",
          role: "Patient"
        },
        {
          name: "G.Mehdi",
          text: "A practitioner of great gentleness... everything goes smoothly, without pain and well-explained. Thank you!",
          role: "Patient"
        },
        {
          name: "Smida.s",
          text: "Competent, gentle, and attentive. Each visit happens with seriousness and benevolence, thank you.",
          role: "Patient"
        }
      ]
    },
    footer: {
      doctorName: "Dr Nawres Ben Salah",
      role: "Dental Surgeon",
      description: "A dental clinic dedicated to your well-being and the beauty of your smile.",
      scheduleTitle: "Working Hours",
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
      }
    },
    reservation: {
      overline: "BOOKING",
      title: "Book an appointment",
      step1: "Type of care",
      step2: "Date & Time",
      step3: "Confirmation",
      careQuestion: "What type of care do you want?",
      careTypes: {
        'Détartrage': "Scaling",
        'Urgence': "Emergency",
        'Blanchiment': "Whitening",
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
      description: "نحن متواجدون للحالات الطارئة من الاثنين إلى السبت."
    },
    services: {
      overline: "ماذا نقدم",
      title: "خدماتنا",
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
      title: "فن الابتسامة والتميز في طب الأسنان",
      p1: "شغوفة بتجميل الأسنان، ترحب بكم الدكتورة نورس بن صالح في عيادتها بالمرسى. خريجة كلية طب الأسنان بالمنستير وتدربت على يد الخبير العالمي رومان سينوس في طب الأسنان الترميمي والتجميلي.",
      p2: "تجمع الدكتورة بين الدقة التقنية واللمسة الفنية لتجميل ابتسامتكم، مع ضمان علاج بدون ألم وبمنتهى اللطف والعناية.",
      bookBtn: "حجز موعد"
    },
    testimonials: {
      overline: "آراء المرضى",
      title: "ماذا يقول مرضانا",
      giveReview: "أعطِ رأيك",
      items: [
        {
          name: "نادية ب.",
          text: "طبيبة لطيفة جداً ومهتمة. تشعر بالثقة فوراً. أنصح بها بشدة!",
          role: "مريضة"
        },
        {
          name: "إياد",
          text: "طبيبة محترفة تستمع جيداً ولطيفة للغاية أثناء العلاج. العيادة نظيفة والاستقبال حار.",
          role: "مريض"
        },
        {
          name: "ميهدي ج.",
          text: "طبيبة تمتاز بهدوء كبير... كل شيء يمر بدون ألم وبشرح وافٍ. شكراً لكِ!",
          role: "مريض"
        },
        {
          name: "سميدة س.",
          text: "كفاءة، لطف، واهتمام. كل زيارة تتم بجدية وعناية، شكراً لكم على الجودة.",
          role: "مريضة"
        }
      ]
    },
    footer: {
      doctorName: "د. نورس بن صالح",
      role: "طبيبة أسنان",
      description: "عيادة أسنان مكرسة لراحتكم وجمال ابتسامتكم.",
      scheduleTitle: "أوقات العمل",
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
      }
    },
    reservation: {
      overline: "الحجز",
      title: "حجز موعد",
      step1: "نوع العلاج",
      step2: "التاريخ والوقت",
      step3: "التأكيد",
      careQuestion: "ما هو نوع العلاج الذي تريده؟",
      careTypes: {
        'Détartrage': "تنظيف الجير",
        'Urgence': "حالة طارئة",
        'Blanchiment': "تبييض الأسنان",
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
    }
  }
};
