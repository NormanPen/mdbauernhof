import bgMobileBlue from "../../images/bgMobileBlue.png";
import bgDeskBlue from "../../images/bgDeskBlue.svg";
import bauernhof from "../../images/bauernhof.png";
import mamaPapa from "../../images/mama_papa.png";
import mamaKinder from "../../images/mama_kinder.png";
import Obst from "../../images/Obst 1.png";
import donkey from "../../images/donkey.png";

const Data = {
  header: {
    heading: "Herzlich Willkommen auf unserem Hof",
    text: "Entdecken Sie den Erlebniswelt Bauernhof der Familie Döpper.",
    bgMobileBlue: bgMobileBlue,
    mobileBgImgAlt: "background Image",
    desktopBgImgSrc: bgDeskBlue,
    desktopBgImgAlt: "background Image",
    imgSrc: bauernhof,
    imgAlt: "Bauernhof",
    btnText: "Jetzt entdecken",
    scrollTo: "willkommen",
  },
  teaserMain: {
    heading: "Willkommen",
    text: 'Erlebniswelt Bauernhof ist gegründet worden um: den Kindern direkt vor Ort die Natur nahezubringen, um Ihnen ein Gefühl für die Schönheit der "Schöpfung" zu vermitteln und die Welt auch noch für nachkommende Generationen in diesem Umfang zu erhalten.',
  },
  teaserSec: {
    card1: {
      heading: "Margot & Hans Döpper",
      text: "Hans Döpper war bis 2012 Vollerwerbslandwirt mit 100 Tieren. Der ehemalige Vollerwerbs- Milchviehbetrieb wird nun als Mischbetrieb geführt. Margot Döpper gründete Erlebniswelt Bauernhof um den Kindern die Tier - und Pflanzenwelt nahezubringen.",
      imgSrc: mamaPapa,
      imgAlt: "Margot und Hans Döpper",
      linkText: "Über Uns",
      linkTo: "/ueberuns",
      linkColor: "bg-web-red",
    },
    card2: {
      heading: "Spielend lernen",
      text: "Kindergeburtstage sind das Herzstück der Erlebniswelt Bauernhof. Durch das spielerische Lernen und Erfahren haben die Kinder einen unvergessliches Tag mit Erlebnissen die lange im Gedächtnis bleiben.",
      imgSrc: mamaKinder,
      imgAlt: "Margot und Kinder",
      linkText: "Zum Programm",
      linkTo: "/programm",
      linkColor: "bg-web-red",
    },
  },
  teaserThird: {
    card3: {
      imgSrc: donkey,
      imgAlt: "Esel",
    },
    card4: {
      heading: "Unsere Tiere",
      text: "Durch die Vielzahl an Tieren ist für jeden eine Tierart dabei, die näher entdeckt werden will. Unsere Tiere freuen sich immer über nette Besucher und lieben Streicheleinheiten.",
      imgSrc: Obst,
      imgAlt: "Obst",
      linkText: "Unsere Tiere",
      linkTo: "/tiere",
      linkColor: "bg-web-green",
    },
  },
};
export default Data;
