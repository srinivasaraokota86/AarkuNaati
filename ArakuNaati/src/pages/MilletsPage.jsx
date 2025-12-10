import LanguageSwitcher from "../Components/LanguageSwitcher";

export default function MilletsPage() {
const content = {

  image: "/image/Millets.jpg",

  en: {
    title: "Millets Benefits",
    heading: "Benefits",
    desc: "Millets are nutritious whole grains rich in fiber, minerals, and antioxidants.",
    benefits: [
      "Improves digestion",
      "Helps control blood sugar",
      "Supports heart health",
      "Rich in fiber and minerals",
      "Boosts energy naturally",
    ],
  },

  hi: {
    title: "मिलेट्स के फायदे",
    heading: "लाभ",
    desc: "मिलेट्स पोषक तत्वों, फाइबर और खनिजों से भरपूर साबुत अनाज हैं।",
    benefits: [
      "पाचन में सुधार",
      "ब्लड शुगर नियंत्रित करने में मदद",
      "हृदय के लिए फायदेमंद",
      "फाइबर और खनिजों से भरपूर",
      "ऊर्जा को प्राकृतिक रूप से बढ़ाता है",
    ],
  },

  te: {
    title: "సిరిధాన్యాల ప్రయోజనాలు",
    heading: "లాభాలు",
    desc: "సిరిధాన్యాలు ఫైబర్, ఖనిజాలు మరియు యాంటీఆక్సిడెంట్లతో సమృద్ధిగా ఉండే సంపూర్ణ ధాన్యాలు.",
    benefits: [
      "జీర్ణక్రియ మెరుగుపడుతుంది",
      "రక్తంలో చక్కెరను నియంత్రించడంలో సహాయపడుతుంది",
      "గుండె ఆరోగ్యాన్ని మెరుగుపరుస్తుంది",
      "ఫైబర్ & ఖనిజాలు సమృద్ధిగా",
      "సహజ శక్తిని పెంచుతుంది",
    ],
  },
};
  return <LanguageSwitcher content={content} />;
}
