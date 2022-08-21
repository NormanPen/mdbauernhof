import bgAboutMobile from "../../images/bgAboutMobile.svg";
import bgAbout from "../../images/bgAbout.svg";
import margotUndHans from "../../images/MargotUndHans.png";
import omaOpa from "../../images/OmaOpa.png";
import tracktor from "../../images/Tracktor.png";

const Data = {
  header: {
    heading: "Über uns",
    text: "Margot Döpper wollte nicht nur Landwirtin sein. Heute organisiert sie, unterstützt von ihrem Mann Hans Döpper, Kindergeburtstage auf dem Bauernhof. In Kursen der Landwirtschaftskammer erwirbt sie regelmäßig das nötige Know-how.",
    bgMobile: bgAboutMobile,
    bgMobileAlt: "Hintergrundbild Mobile",
    bgDesktop: bgAbout,
    bgDesktopAlt: "Hintergrundbild Desktop",
    imgSrc: margotUndHans,
    imgAlt: "Margot und Hans Döpper",
    scrollToText: "Jetz entdecken",
    scrollTo: "willkommen",
  },
  teaserThird1: {
    card1: {
      imgSrc: omaOpa,
      imgAlt: "Familie Döpper damals",
    },
    card2: {
      heading: "der Hof damals",
      text: "Der Bauernhof existiert nun in der 4. Generation. Er wurde damals für den unglaublichen Preis von 9 Pferden gekauft.",
    },
  },
  teaserThird2: {
    card3: {
      imgSrc: tracktor,
      imgAlt: "Trecker",
    },
    card4: {
      heading: "der Hof heute",
      text: "Heute kümmern sich hauptsächlich Hans, Margot und Mathias Döpper um den Hof und die Wiesen. Es gibt viel zu entdecken. Zum Beispiel eine Vielzahl an Tieren, ein Heustall, ein Obstgarten und Insektengarten.",
    },
  },
};

export default Data;
