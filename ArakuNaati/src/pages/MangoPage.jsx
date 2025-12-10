import LanguageSwitcher from "../Components/LanguageSwitcher";


export default function MangoPage() {
  const content = {
    image: "/image/Mango.jpg",

    en: {
      title: "Mango Benefits",
       heading: "Benefits",
      desc: "Mango is rich in vitamins and antioxidants.",
      benefits: [
        "Boosts immunity",
        "Improves eye health",
        "Helps digestion",
        "Good for skin glow",
        "Rich in antioxidants",
      ],
    },

    hi: {
      title: "आम के फायदे",
       heading: "लाभ",
      desc: "आम विटामिन और एंटीऑक्सीडेंट का अच्छा स्रोत है।",
      benefits: [
        "रोग प्रतिरोधक क्षमता बढ़ाता है",
        "आँखों के लिए अच्छा",
        "पाचन में सुधार",
        "त्वचा को निखार",
        "एंटीऑक्सीडेंट से भरपूर",
      ],
    },

    te: {
      title: "మామిడి పండు లాభాలు",
      heading: "లాభాలు", 
      desc: "మామిడి విటమిన్లు మరియు యాంటీఆక్సిడెంట్లతో సమృద్ధిగా ఉంటుంది.",
     benefits: [
        "రోగ నిరోధక శక్తిని పెంచుతుంది",
        "కళ్లకు మంచిది",
        "జీర్ణక్రియ మెరుగు",
        "చర్మానికి కాంతి",
        "యాంటీఆక్సిడెంట్స్ ఎక్కువ",
      ],
    },
  };

  return <LanguageSwitcher content={content} />;
}
