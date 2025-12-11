import LanguageSwitcher from "../Components/LanguageSwitcher";

export default function CashewPage() {
  const content = {
    
    image: "/image/cashew.jpg",

    en: {
      title: "Cashew Benefits",
      desc: "Cashews are nutritious and good for heart health.",
      benefits: [
        "Good for heart",
        "Gives energy",
        "Rich in magnesium and iron",
        "Improves brain function",
        "Strengthens bones",
      ],
    },

    hi: {
      title: "काजू के फायदे",
      desc: "काजू पौष्टिक होते हैं और हृदय के लिए अच्छे हैं।",
      benefits: [
        "दिल के लिए अच्छा",
        "ऊर्जा देता है",
        "मैग्नीशियम और आयरन से भरपूर",
        "दिमाग की क्षमता बढ़ाता है",
        "हड्डियों को मजबूत बनाता है",
      ],
    },

    te: {
      title: "జీడిపప్పు లాభాలు",
      desc: "జీడిపప్పు శక్తినిస్తుంది మరియు గుండెకు మంచిది.",
      benefits: [
        "గుండె ఆరోగ్యానికి మంచిది",
        "శక్తినిస్తుంది",
        "మాగ్నీషియం, ఐరన్ ఎక్కువ",
        "మెదడు పనితీరు మెరుగుపరుస్తుంది",
        "ఎముకలను బలపరుస్తుంది",
      ],
    },
  };

  return <LanguageSwitcher content={content} />;
}
