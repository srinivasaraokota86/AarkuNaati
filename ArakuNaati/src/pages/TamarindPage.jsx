import LanguageSwitcher from "../Components/LanguageSwitcher";

export default function TamarindPage() {
  const content = {
    image: "/image/tamarind1.jpg",

    en: {
      title: "Tamarind Benefits",
      desc: "Tamarind improves digestion and boosts immunity.",
      benefits: [
        "Improves digestion",
        "Rich in antioxidants",
        "Helps in weight control",
        "Boosts immunity",
        "Reduces acidity",
      ],
    },

    hi: {
      title: "इमली के फायदे",
      desc: "इमली पाचन सुधारती है और शरीर को ताकत देती है।",
      benefits: [
        "पाचन शक्ति बढ़ाती है",
        "एंटीऑक्सीडेंट से भरपूर",
        "वजन नियंत्रित करती है",
        "इम्यूनिटी बढ़ाती है",
        "एसिडिटी कम करती है",
      ],
    },

    te: {
      title: "చింతపండు లాభాలు",
      desc: "చింతపండు జీర్ణక్రియను మెరుగుపరుస్తుంది మరియు రోగనిరోధక శక్తిని పెంచుతుంది.",
      benefits: [
        "జీర్ణక్రియ మెరుగుపరుస్తుంది",
        "యాంటీఆక్సిడెంట్స్ ఎక్కువ",
        "బరువు నియంత్రణలో సహాయపడుతుంది",
        "రోగ నిరోధక శక్తిని పెంచుతుంది",
        "ఆమ్లత తగ్గిస్తుంది",
      ],
    },
  };

  return <LanguageSwitcher content={content} />;
}
