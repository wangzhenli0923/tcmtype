/**
 * 多语言翻译文件
 * 包含英语(en)和德语(de)两种语言的翻译
 */

const translations = {
    // 英语翻译
    "en": {
        // 导航栏
        "nav_home": "Home",
        "nav_quiz": "Take the Quiz",
        "nav_about": "About TCM",
        
        // 首页
        "hero_title": "Discover Your TCM Constitution Type",
        "hero_subtitle": "Traditional Chinese Medicine's personalized approach to health and wellness",
        "start_quiz": "Start the Quiz",
        "learn_more": "Learn More",
        "intro_title": "What is TCM Constitution?",
        "intro_text": "Traditional Chinese Medicine (TCM) identifies different constitution types that reflect your body's inherent patterns and tendencies. Understanding your constitution can help you make better lifestyle choices for optimal health.",
        "why_important": "Why It's Important",
        "importance_text": "Knowing your TCM constitution type helps you understand your body's natural tendencies and vulnerabilities. This knowledge enables you to make targeted lifestyle adjustments that promote balance and prevent illness.",
        "how_works": "How It Works",
        "how_works_text": "Our quiz analyzes your symptoms, habits, and physical characteristics to identify your dominant constitution type. You'll receive personalized recommendations for diet, activity, and lifestyle modifications.",
        
        // 测验
        "quiz_title": "TCM Constitution Quiz",
        "quiz_intro": "Answer the following questions honestly based on your usual condition. This quiz will help identify your dominant TCM constitution type.",
        "question_prefix": "Question",
        "next": "Next",
        "previous": "Previous",
        "submit": "Submit",
        
        // 问题
        "q1": "Do you often feel cold in your hands, feet, or body, even in warm environments?",
        "q1_o1": "Yes, frequently",
        "q1_o2": "Sometimes",
        "q1_o3": "Rarely or never",
        
        "q2": "How would you describe your energy levels throughout the day?",
        "q2_o1": "Often tired and lacking energy",
        "q2_o2": "Moderate energy with some fluctuation",
        "q2_o3": "Consistently good energy levels",
        
        "q3": "Do you sweat easily even with little exertion or in mild temperatures?",
        "q3_o1": "Yes, I sweat easily",
        "q3_o2": "Average sweating",
        "q3_o3": "No, I rarely sweat",
        
        "q4": "How would you describe your digestion?",
        "q4_o1": "Often bloated or uncomfortable after eating",
        "q4_o2": "Occasionally experience digestive issues",
        "q4_o3": "Generally good digestion",
        
        "q5": "Do you often feel thirsty and prefer cold drinks?",
        "q5_o1": "Yes, frequently",
        "q5_o2": "Sometimes",
        "q5_o3": "Rarely, I prefer warm drinks",
        
        "q6": "How would you describe your sleep quality?",
        "q6_o1": "Difficulty falling or staying asleep",
        "q6_o2": "Sometimes restless",
        "q6_o3": "Generally sleep well",
        
        "q7": "Do you experience dryness (skin, lips, mouth, throat)?",
        "q7_o1": "Yes, frequently",
        "q7_o2": "Sometimes",
        "q7_o3": "Rarely or never",
        
        "q8": "How would you describe your emotional state?",
        "q8_o1": "Often anxious or worried",
        "q8_o2": "Sometimes stressed but generally balanced",
        "q8_o3": "Usually calm and emotionally stable",
        
        "q9": "Do you experience bloating or a feeling of heaviness after eating?",
        "q9_o1": "Yes, frequently",
        "q9_o2": "Sometimes",
        "q9_o3": "Rarely or never",
        
        "q10": "How do you react to humid weather?",
        "q10_o1": "Feel uncomfortable and heavy",
        "q10_o2": "Slightly affected",
        "q10_o3": "Not particularly affected",
        
        // 结果页
        "result_title": "Your TCM Constitution Results",
        "result_subtitle": "Based on your responses, we've identified your dominant constitution type",
        "primary_type": "Primary Constitution Type",
        "balance_tips": "Balance & Harmony Tips",
        "diet_recommendations": "Dietary Recommendations",
        "lifestyle_adjustments": "Lifestyle Adjustments",
        "email_results": "Email My Results",
        "retake_quiz": "Retake Quiz",
        
        // 体质类型
        "qi_deficiency": "Qi Deficiency",
        "qi_deficiency_desc": "Characterized by low energy, shortness of breath, and a tendency to catch colds easily.",
        "qi_deficiency_diet": "Foods to Emphasize",
        "qi_deficiency_diet_text": "Moderately warming foods like brown rice, sweet potatoes, millet, lean meats, dates, ginger, and oats can help strengthen your Qi.",
        "qi_deficiency_avoid": "Foods to Moderate",
        "qi_deficiency_avoid_text": "Limit raw and cold foods, excessive dairy, and iced beverages which can further deplete your Qi.",
        "qi_deficiency_lifestyle": "Beneficial Activities",
        "qi_deficiency_lifestyle_text": "Gentle exercises like Tai Chi, Qigong, and walking in nature. Ensure adequate sleep and avoid overexertion.",
        
        "yang_deficiency": "Yang Deficiency",
        "yang_deficiency_desc": "Characterized by feelings of cold, preference for warm environments, and low metabolism.",
        "yang_deficiency_diet": "Foods to Emphasize",
        "yang_deficiency_diet_text": "Warming foods like ginger, cinnamon, lamb, chicken, oats, and warming spices can help strengthen your Yang energy.",
        "yang_deficiency_avoid": "Foods to Moderate",
        "yang_deficiency_avoid_text": "Minimize cold foods, raw vegetables, iced drinks, and excessive fruit consumption which can increase internal cold.",
        "yang_deficiency_lifestyle": "Beneficial Activities",
        "yang_deficiency_lifestyle_text": "Keep warm, especially your lower back and feet. Regular moderate exercise like brisk walking or jogging helps stimulate Yang energy.",
        
        "yin_deficiency": "Yin Deficiency",
        "yin_deficiency_desc": "Characterized by internal heat, dryness, restlessness, and trouble sleeping.",
        "yin_deficiency_diet": "Foods to Emphasize",
        "yin_deficiency_diet_text": "Cooling and moistening foods like tofu, dairy, eggs, fish, fruits, vegetables, and healthy oils can nourish your Yin.",
        "yin_deficiency_avoid": "Foods to Moderate",
        "yin_deficiency_avoid_text": "Limit spicy foods, alcohol, coffee, and baked goods which can create more heat and dryness.",
        "yin_deficiency_lifestyle": "Beneficial Activities",
        "yin_deficiency_lifestyle_text": "Practice meditation and gentle exercises like Yin yoga. Avoid staying up late and ensure adequate rest.",
        
        "phlegm_dampness": "Phlegm-Dampness",
        "phlegm_dampness_desc": "Characterized by a sense of heaviness, digestive issues, and excess mucus production.",
        "phlegm_dampness_diet": "Foods to Emphasize",
        "phlegm_dampness_diet_text": "Drying and neutral foods like pearl barley, brown rice, aduki beans, corn, pumpkin, and mild aromatic herbs like rosemary and thyme.",
        "phlegm_dampness_avoid": "Foods to Moderate",
        "phlegm_dampness_avoid_text": "Limit dairy products, refined sugar, refined flour products, excessive oils, and cold raw foods which can increase dampness.",
        "phlegm_dampness_lifestyle": "Beneficial Activities",
        "phlegm_dampness_lifestyle_text": "Regular moderate to vigorous exercise to promote circulation and sweat. Try to avoid damp environments and maintain good ventilation.",
        
        "blood_stasis": "Blood Stasis",
        "blood_stasis_desc": "Characterized by fixed, stabbing pain, dark complexion, and poor circulation.",
        "blood_stasis_diet": "Foods to Emphasize",
        "blood_stasis_diet_text": "Blood-moving foods like turmeric, vinegar, leafy greens, berries, moderate amounts of wine, and warming spices.",
        "blood_stasis_avoid": "Foods to Moderate",
        "blood_stasis_avoid_text": "Limit excessively cold foods, excessive dairy, and fried or heavy foods that can impede circulation.",
        "blood_stasis_lifestyle": "Beneficial Activities",
        "blood_stasis_lifestyle_text": "Regular moderate exercise like walking, swimming, or cycling to promote circulation. Practices like massage and gentle stretching are also beneficial.",
        
        // 关于页面
        "about_title": "About Traditional Chinese Medicine",
        "about_intro": "Traditional Chinese Medicine (TCM) is a holistic health system with a history spanning over 2,500 years. Unlike Western medicine, which often focuses on treating specific symptoms or diseases, TCM aims to understand and treat the underlying patterns of disharmony in the body.",
        "constitution_theory": "Constitution Theory",
        "constitution_text": "One of the fundamental concepts in TCM is the idea of 'constitution' (体质 or tǐzhì). Your constitution represents your body's inherent nature and tendencies, influenced by genetics, lifestyle, and environment. Understanding your constitution helps guide appropriate lifestyle and dietary choices.",
        "tcm_principles": "Key Principles",
        "yin_yang": "Yin and Yang",
        "yin_yang_text": "The concept of opposing but complementary forces that must remain in balance for good health.",
        "five_elements": "Five Elements",
        "five_elements_text": "Wood, Fire, Earth, Metal, and Water represent different qualities and relationships in the body and nature.",
        "qi_concept": "Qi (Vital Energy)",
        "qi_concept_text": "The vital energy that flows through the body along specific pathways called meridians.",
        "disclaimer": "Medical Disclaimer",
        "disclaimer_text": "This quiz and its recommendations are for informational purposes only and should not replace professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider before making significant changes to your diet or lifestyle."
    },
    
    // 德语翻译
    "de": {
        // 导航栏
        "nav_home": "Startseite",
        "nav_quiz": "Quiz starten",
        "nav_about": "Über TCM",
        
        // 首页
        "hero_title": "Entdecken Sie Ihren TCM-Konstitutionstyp",
        "hero_subtitle": "Der personalisierte Ansatz der Traditionellen Chinesischen Medizin für Gesundheit und Wohlbefinden",
        "start_quiz": "Quiz starten",
        "learn_more": "Mehr erfahren",
        "intro_title": "Was ist eine TCM-Konstitution?",
        "intro_text": "Die Traditionelle Chinesische Medizin (TCM) identifiziert verschiedene Konstitutionstypen, die die inhärenten Muster und Tendenzen Ihres Körpers widerspiegeln. Das Verständnis Ihrer Konstitution kann Ihnen helfen, bessere Lebensstilentscheidungen für optimale Gesundheit zu treffen.",
        "why_important": "Warum es wichtig ist",
        "importance_text": "Wenn Sie Ihren TCM-Konstitutionstyp kennen, verstehen Sie die natürlichen Tendenzen und Verwundbarkeiten Ihres Körpers. Dieses Wissen ermöglicht es Ihnen, gezielte Anpassungen des Lebensstils vorzunehmen, die das Gleichgewicht fördern und Krankheiten vorbeugen.",
        "how_works": "Wie es funktioniert",
        "how_works_text": "Unser Quiz analysiert Ihre Symptome, Gewohnheiten und körperlichen Merkmale, um Ihren dominanten Konstitutionstyp zu identifizieren. Sie erhalten personalisierte Empfehlungen für Ernährung, Aktivität und Änderungen des Lebensstils.",
        
        // 测验
        "quiz_title": "TCM-Konstitutionsquiz",
        "quiz_intro": "Beantworten Sie die folgenden Fragen ehrlich auf der Grundlage Ihres üblichen Zustands. Dieses Quiz hilft, Ihren dominanten TCM-Konstitutionstyp zu identifizieren.",
        "question_prefix": "Frage",
        "next": "Weiter",
        "previous": "Zurück",
        "submit": "Absenden",
        
        // 问题
        "q1": "Fühlen Sie sich oft kalt an Händen, Füßen oder am Körper, selbst in warmen Umgebungen?",
        "q1_o1": "Ja, häufig",
        "q1_o2": "Manchmal",
        "q1_o3": "Selten oder nie",
        
        "q2": "Wie würden Sie Ihr Energieniveau im Laufe des Tages beschreiben?",
        "q2_o1": "Oft müde und energielos",
        "q2_o2": "Mäßige Energie mit einigen Schwankungen",
        "q2_o3": "Konstant gutes Energieniveau",
        
        "q3": "Schwitzen Sie leicht, selbst bei geringer Anstrengung oder bei milden Temperaturen?",
        "q3_o1": "Ja, ich schwitze leicht",
        "q3_o2": "Durchschnittliches Schwitzen",
        "q3_o3": "Nein, ich schwitze selten",
        
        "q4": "Wie würden Sie Ihre Verdauung beschreiben?",
        "q4_o1": "Oft Blähungen oder Unbehagen nach dem Essen",
        "q4_o2": "Gelegentlich Verdauungsprobleme",
        "q4_o3": "Generell gute Verdauung",
        
        "q5": "Fühlen Sie sich oft durstig und bevorzugen kalte Getränke?",
        "q5_o1": "Ja, häufig",
        "q5_o2": "Manchmal",
        "q5_o3": "Selten, ich bevorzuge warme Getränke",
        
        "q6": "Wie würden Sie Ihre Schlafqualität beschreiben?",
        "q6_o1": "Schwierigkeiten beim Einschlafen oder Durchschlafen",
        "q6_o2": "Manchmal unruhig",
        "q6_o3": "Generell guter Schlaf",
        
        "q7": "Erleben Sie Trockenheit (Haut, Lippen, Mund, Hals)?",
        "q7_o1": "Ja, häufig",
        "q7_o2": "Manchmal",
        "q7_o3": "Selten oder nie",
        
        "q8": "Wie würden Sie Ihren emotionalen Zustand beschreiben?",
        "q8_o1": "Oft ängstlich oder besorgt",
        "q8_o2": "Manchmal gestresst, aber generell ausgeglichen",
        "q8_o3": "Normalerweise ruhig und emotional stabil",
        
        "q9": "Erleben Sie Blähungen oder ein Schweregefühl nach dem Essen?",
        "q9_o1": "Ja, häufig",
        "q9_o2": "Manchmal",
        "q9_o3": "Selten oder nie",
        
        "q10": "Wie reagieren Sie auf feuchtes Wetter?",
        "q10_o1": "Fühle mich unwohl und schwer",
        "q10_o2": "Leicht beeinträchtigt",
        "q10_o3": "Nicht besonders beeinträchtigt",
        
        // 结果页
        "result_title": "Ihre TCM-Konstitutionsergebnisse",
        "result_subtitle": "Basierend auf Ihren Antworten haben wir Ihren dominanten Konstitutionstyp identifiziert",
        "primary_type": "Primärer Konstitutionstyp",
        "balance_tips": "Gleichgewichts- und Harmonietipps",
        "diet_recommendations": "Ernährungsempfehlungen",
        "lifestyle_adjustments": "Lebensstilanpassungen",
        "email_results": "Ergebnisse per E-Mail senden",
        "retake_quiz": "Quiz wiederholen",
        
        // 体质类型
        "qi_deficiency": "Qi-Mangel",
        "qi_deficiency_desc": "Gekennzeichnet durch niedrige Energie, Kurzatmigkeit und eine Tendenz, leicht Erkältungen zu bekommen.",
        "qi_deficiency_diet": "Zu betonende Lebensmittel",
        "qi_deficiency_diet_text": "Mäßig wärmende Lebensmittel wie brauner Reis, Süßkartoffeln, Hirse, mageres Fleisch, Datteln, Ingwer und Hafer können Ihr Qi stärken.",
        "qi_deficiency_avoid": "Zu reduzierende Lebensmittel",
        "qi_deficiency_avoid_text": "Begrenzen Sie rohe und kalte Lebensmittel, übermäßige Milchprodukte und Eisgetränke, die Ihr Qi weiter schwächen können.",
        "qi_deficiency_lifestyle": "Vorteilhafte Aktivitäten",
        "qi_deficiency_lifestyle_text": "Sanfte Übungen wie Tai Chi, Qigong und Spaziergänge in der Natur. Sorgen Sie für ausreichend Schlaf und vermeiden Sie Überanstrengung.",
        
        "yang_deficiency": "Yang-Mangel",
        "yang_deficiency_desc": "Gekennzeichnet durch Kältegefühle, Vorliebe für warme Umgebungen und einen niedrigen Stoffwechsel.",
        "yang_deficiency_diet": "Zu betonende Lebensmittel",
        "yang_deficiency_diet_text": "Wärmende Lebensmittel wie Ingwer, Zimt, Lamm, Huhn, Hafer und wärmende Gewürze können Ihre Yang-Energie stärken.",
        "yang_deficiency_avoid": "Zu reduzierende Lebensmittel",
        "yang_deficiency_avoid_text": "Minimieren Sie kalte Lebensmittel, rohes Gemüse, Eisgetränke und übermäßigen Obstkonsum, die die innere Kälte verstärken können.",
        "yang_deficiency_lifestyle": "Vorteilhafte Aktivitäten",
        "yang_deficiency_lifestyle_text": "Halten Sie sich warm, besonders Ihren unteren Rücken und Ihre Füße. Regelmäßige moderate Bewegung wie zügiges Gehen oder Joggen hilft, die Yang-Energie zu stimulieren.",
        
        "yin_deficiency": "Yin-Mangel",
        "yin_deficiency_desc": "Gekennzeichnet durch innere Hitze, Trockenheit, Unruhe und Schlafprobleme.",
        "yin_deficiency_diet": "Zu betonende Lebensmittel",
        "yin_deficiency_diet_text": "Kühlende und befeuchtende Lebensmittel wie Tofu, Milchprodukte, Eier, Fisch, Obst, Gemüse und gesunde Öle können Ihr Yin nähren.",
        "yin_deficiency_avoid": "Zu reduzierende Lebensmittel",
        "yin_deficiency_avoid_text": "Begrenzen Sie scharfe Speisen, Alkohol, Kaffee und Backwaren, die mehr Hitze und Trockenheit erzeugen können.",
        "yin_deficiency_lifestyle": "Vorteilhafte Aktivitäten",
        "yin_deficiency_lifestyle_text": "Praktizieren Sie Meditation und sanfte Übungen wie Yin-Yoga. Vermeiden Sie langes Aufbleiben und sorgen Sie für ausreichend Ruhe.",
        
        "phlegm_dampness": "Schleim-Feuchtigkeit",
        "phlegm_dampness_desc": "Gekennzeichnet durch ein Gefühl der Schwere, Verdauungsprobleme und übermäßige Schleimproduktion.",
        "phlegm_dampness_diet": "Zu betonende Lebensmittel",
        "phlegm_dampness_diet_text": "Trocknende und neutrale Lebensmittel wie Perlgerste, brauner Reis, Adukibohnen, Mais, Kürbis und milde aromatische Kräuter wie Rosmarin und Thymian.",
        "phlegm_dampness_avoid": "Zu reduzierende Lebensmittel",
        "phlegm_dampness_avoid_text": "Begrenzen Sie Milchprodukte, raffinierten Zucker, Produkte aus raffiniertem Mehl, übermäßige Öle und kalte rohe Lebensmittel, die die Feuchtigkeit erhöhen können.",
        "phlegm_dampness_lifestyle": "Vorteilhafte Aktivitäten",
        "phlegm_dampness_lifestyle_text": "Regelmäßige mäßige bis intensive Bewegung, um den Kreislauf anzuregen und zu schwitzen. Versuchen Sie, feuchte Umgebungen zu vermeiden und eine gute Belüftung aufrechtzuerhalten.",
        
        "blood_stasis": "Blutstagnation",
        "blood_stasis_desc": "Gekennzeichnet durch festen, stechenden Schmerz, dunklen Teint und schlechte Durchblutung.",
        "blood_stasis_diet": "Zu betonende Lebensmittel",
        "blood_stasis_diet_text": "Blutbewegende Lebensmittel wie Kurkuma, Essig, Blattgemüse, Beeren, moderate Mengen Wein und wärmende Gewürze.",
        "blood_stasis_avoid": "Zu reduzierende Lebensmittel",
        "blood_stasis_avoid_text": "Begrenzen Sie übermäßig kalte Lebensmittel, übermäßige Milchprodukte und frittierte oder schwere Speisen, die die Durchblutung behindern können.",
        "blood_stasis_lifestyle": "Vorteilhafte Aktivitäten",
        "blood_stasis_lifestyle_text": "Regelmäßige moderate Bewegung wie Gehen, Schwimmen oder Radfahren, um die Durchblutung zu fördern. Praktiken wie Massage und sanftes Dehnen sind ebenfalls vorteilhaft.",
        
        // 关于页面
        "about_title": "Über die Traditionelle Chinesische Medizin",
        "about_intro": "Die Traditionelle Chinesische Medizin (TCM) ist ein ganzheitliches Gesundheitssystem mit einer über 2.500-jährigen Geschichte. Im Gegensatz zur westlichen Medizin, die sich oft auf die Behandlung bestimmter Symptome oder Krankheiten konzentriert, zielt die TCM darauf ab, die zugrunde liegenden Muster der Disharmonie im Körper zu verstehen und zu behandeln.",
        "constitution_theory": "Konstitutionstheorie",
        "constitution_text": "Eines der grundlegenden Konzepte in der TCM ist die Idee der 'Konstitution' (体质 oder tǐzhì). Ihre Konstitution repräsentiert die inhärente Natur und Tendenzen Ihres Körpers, beeinflusst durch Genetik, Lebensstil und Umwelt. Das Verständnis Ihrer Konstitution hilft, angemessene Lebensstil- und Ernährungsentscheidungen zu treffen.",
        "tcm_principles": "Grundprinzipien",
        "yin_yang": "Yin und Yang",
        "yin_yang_text": "Das Konzept gegensätzlicher, aber komplementärer Kräfte, die für eine gute Gesundheit im Gleichgewicht bleiben müssen.",
        "five_elements": "Fünf Elemente",
        "five_elements_text": "Holz, Feuer, Erde, Metall und Wasser repräsentieren verschiedene Qualitäten und Beziehungen im Körper und in der Natur.",
        "qi_concept": "Qi (Lebensenergie)",
        "qi_concept_text": "Die Lebensenergie, die durch den Körper entlang bestimmter Bahnen fließt, die als Meridiane bezeichnet werden.",
        "disclaimer": "Medizinischer Haftungsausschluss",
        "disclaimer_text": "Dieses Quiz und seine Empfehlungen dienen nur zu Informationszwecken und sollten professionellen medizinischen Rat, Diagnose oder Behandlung nicht ersetzen. Konsultieren Sie immer einen qualifizierten Gesundheitsdienstleister, bevor Sie wesentliche Änderungen an Ihrer Ernährung oder Ihrem Lebensstil vornehmen."
    }
};

// 默认语言
let currentLanguage = "en";

/**
 * 切换语言函数
 * @param {string} lang - 目标语言代码 ('en' 或 'de')
 */
function switchLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        
        // 更新语言选择器按钮状态
        document.querySelectorAll('.language-selector button').forEach(button => {
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        // 更新页面上所有带有data-i18n属性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // 更新表单元素的占位符
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
        
        // 更新按钮的值
        document.querySelectorAll('[data-i18n-value]').forEach(element => {
            const key = element.getAttribute('data-i18n-value');
            if (translations[lang][key]) {
                element.value = translations[lang][key];
            }
        });
    }
}

/**
 * 获取翻译文本
 * @param {string} key - 翻译键
 * @returns {string} - 对应语言的翻译文本
 */
function getText(key) {
    return translations[currentLanguage][key] || key;
}

// 导出函数和变量以供其他脚本使用
window.translations = translations;
window.switchLanguage = switchLanguage;
window.getText = getText; 