import bgAboutMobile from "../../images/bgAboutMobile.svg";
import bgDesktop from "../../images/bgProgramm.svg";
import margotProgramm from "../../images/MargotProgramm.png";
import huetchen from "../../images/huetchen.svg";
import aepfel from "../../images/aepfel.png";
import kindLeiter from "../../images/kindLeiter.png";

export const Data = {
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
};
