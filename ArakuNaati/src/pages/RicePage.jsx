import LanguageSwitcher from "../Components/LanguageSwitcher";


export default function RicePage() {
const content = {
image: "/image/rice.png", // add your rice image path here

  en: {
    title: "Rice Benefits",
    heading: "Benefits",
    desc: "Rice is a staple food and rich in carbohydrates and nutrients.",
    benefits: [
      "Provides energy",
      "Supports digestion",
      "Gluten-free",
      "Good for heart health",
      "Rich in essential nutrients",
    ],
  },

  hi: {
    title: "चावल के फायदे",
    heading: "लाभ",
    desc: "चावल एक मुख्य भोजन है और कार्बोहाइड्रेट और पोषक तत्वों से भरपूर है।",
    benefits: [
      "ऊर्जा प्रदान करता है",
      "पाचन में सहायक",
      "ग्लूटेन मुक्त",
      "दिल के स्वास्थ्य के लिए अच्छा",
      "जरूरी पोषक तत्वों से भरपूर",
    ],
  },

  te: {
    title: "బియ్యం లాభాలు",
    heading: "లాభాలు",
    desc: "బియ్యం ఒక ప్రాథమిక ఆహారం మరియు కార్బోహైడ్రేట్లు మరియు పోషకాలు సమృద్ధిగా కలిగి ఉంటుంది.",
    benefits: [
      "శక్తిని అందిస్తుంది",
      "జీర్ణక్రియకు సహాయపడుతుంది",
      "గ్లూటెన్-రహితం",
      "హృద్రోగ ఆరోగ్యం కొరకు మంచిది",
      "అవసరమైన పోషకాలు సమృద్ధిగా ఉన్నాయి",
    ],
  },
};

  return <LanguageSwitcher content={content} />;
}
