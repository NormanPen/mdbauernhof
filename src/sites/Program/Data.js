import bgAboutMobile from "../../images/bgMobilePink.svg";
import bgDesktop from "../../images/bgProgramm.svg";
import margotProgramm from "../../images/MargotProgramm.png";
import huetchen from "../../images/huetchen.svg";
import aepfel from "../../images/aepfel.png";
import kindLeiter from "../../images/kindLeiter.png";
import wedaEsel from "../../images/WedaWilmaBuchner.png";
import stiefel from "../../images/boots.png";
import tisch from "../../images/tisch.png";
import boot from "../../images/boot.png";

const Data = {
  header: {
    heading: "Unser Programm",
    text: "Unser Bauernhof bietet ein vielfältiges Programm. Von Kindergeburtstagen, über tiergestützte Pädagogik und -Therapie, bis zu Genreation 50+",
    bgMobile: bgAboutMobile,
    bgMobileAlt: "Hintergrundbild Mobile",
    bgDesktop: bgDesktop,
    bgDesktopAlt: "Hintergrundbild Desktop",
    imgSrc: margotProgramm,
    imgAlt: "Margot und Kinder",
    scrollToText: "Jetzt entdecken",
    scrollTo: "willkommen",
  },
  teaserMain: {
    heading: "Kindergeburtstag",
    text: "Kindergeburtstage sind das Herzstück der Erlebniswelt Bauernhof. Heustalltoben, Eselreiten, Bauerngarten ernten, Lagerfeuer mit Stockbrot, Kreativwerkstatt etc. machen den Geburtstag zu einem unvergesslichen Erlebnis. Ein Kindergeburtstag dauert in der Regel 3-4 Stunden und ist geeignet für Kinder von 4-10 Jahren. Verpflegung wie Pizza wird gerne gestellt oder kann mitgebracht werden. Die Preisliste finden Sie unten auf der Seite.",
    imgSrc: huetchen,
    imgAlt: "Kind im Heustall",
  },
  teaserSec: {
    card1: {
      heading: "Heustalltoben",
      text: "Im Heustall können sich die Kinder richtig austoben und ihre Energie loswerden. Fangen, im Heu verstecken, Heuburgen bauen oder auf der Schaukel die Seele baumeln lassen macht riesigen Spaß.",
      imgSrc: kindLeiter,
      imgAlt: "Kind auf Strickleiter",
    },
    card2: {
      heading: "Bauerngarten-Ernten",
      text: "Die naturbelassenen Äpfel aus unserem Bauerngarten können gepflügt werden und daraus können leckere Kuchen oder Bratäpfel gemacht werden. Außerdem haben wir Bäume oder Sträucher mit Pflaumen, Birnen, Mirabellen, Quitten, Esskastanien, Johannisbeeren, Stachelbeeren, Himbeeren, Sauer- und Süßkirschen. Lecker!",
      imgSrc: aepfel,
      imgAlt: "Äpfel",
    },
  },
  teaserThird: {
    card3: {
      imgSrc: wedaEsel,
      imgAlt: "Kind auf Esel",
    },
    card4: {
      heading: "Geführtes Eselreiten",
      text: "Die Kinder können mit einem Voltigiergurt und Helm auf dem Esel reiten, dabei werden sie von einem Erwachsenen geführt. Dann kann eine Runde über Hof gedreht werden oder über Feldwege zum Wald.",
      imgSrc: stiefel,
      imgAlt: "Stiefel",
      linkText: "Tiere kennenlernen",
      linkTo: "/tiere",
      linkColor: "bg-web-green",
    },
  },
  teaserFourth: {
    card5: {
      heading: "Gemeinsam Essen Feiern",
      text: "Unser Veranstaltungsraum bietet ausreichend Platz um gemeinsam Kuchen oder Pizza zu essen und die Geschenke auszupacken und ein Geburtstagsständchen zu singen. ",
      imgSrc: tisch,
      imgAlt: "Fest",
      bgColor: "md:bg-hero-texture-pink",
    },
    card6: {
      heading: "Kreativworkshops",
      text: "Kreativprogramm kann gerne auch außerhalb eines Geburtstags gebucht werden. In einer Gruppe können Holzflöße gebastelt, oder z.B. Fosterhocker oder Teelicht-Häuschen getöpfert werden.                                                                                                                                  ",
      imgSrc: boot,
      imgAlt: "Holzboot",
    },
  },
};

export default Data;
