import LanguageSwitcher from "../Components/LanguageSwitcher";

export default function GroundnutsPage() {
      const content = {
    
  image: "/image/Groundnuts.jpg",

  en: {
    title: "Groundnut Benefits",
    heading: "Benefits",
    desc: "Groundnuts are rich in protein, healthy fats, and essential nutrients.",
    benefits: [
      "Excellent source of plant protein",
      "Boosts heart health",
      "Helps in weight management",
      "Good for skin and hair",
      "Rich in antioxidants & vitamins",
    ],
  },

  hi: {
    title: "मूंगफली के फायदे",
    heading: "लाभ",
    desc: "मूंगफली प्रोटीन, हेल्दी फैट और आवश्यक पोषक तत्वों से भरपूर होती है।",
    benefits: [
      "पौधों से मिलने वाले प्रोटीन का अच्छा स्रोत",
      "हृदय के लिए लाभदायक",
      "वजन नियंत्रण में मदद",
      "त्वचा और बालों के लिए अच्छा",
      "एंटीऑक्सीडेंट और विटामिन से भरपूर",
    ],
  },

  te: {
    title: "వేరుసెనగల ప్రయోజనాలు",
    heading: "లాభాలు",
    desc: "వేరుసెనగలు ప్రోటీన్, ఆరోగ్యకరమైన కొవ్వులు మరియు పోషకాలతో నిండి ఉంటాయి.",
    benefits: [
      "ఉత్తమ మొక్కల ప్రోటీన్ మూలం",
      "గుండె ఆరోగ్యం మెరుగుపరుస్తుంది",
      "బరువు నియంత్రణలో సహాయపడుతుంది",
      "చర్మం మరియు జుట్టుకు మంచిది",
      "యాంటీఆక్సిడెంట్లు మరియు విటమిన్లు సమృద్ధిగా",
    ],
  },
};
  return <LanguageSwitcher content={content} />;
}

