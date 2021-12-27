import Header from "../../components/Header";
import Flag from "../../components/Flag";
import TeaserMain from "../../components/TeaserMain";
import TeaserSec from "../../components/TeaserSec";
import TeaserThird from "../../components/TeaserThird";

import mamaPapa from "../../images/mama_papa.png";
import mamaKinder from "../../images/mama_kinder.png";
import donkey from "../../images/donkey.png";
import Obst from "../../images/Obst 1.png";

import Data from "./Data";

const Home = () => {
  const header = Data.header;
  const teaserMain = Data.teaserMain;
  return (
    <div className="">
      <Header
        heading={header.heading}
        text={header.text}
        mobileBgImgSrc={header.bgMobileBlue}
        mobileBgImgAlt={header.mobileBgImgAlt}
        desktopBgImgSrc={header.desktopBgImgSrc}
        scrollTo={header.scrollTo}
        btnText={header.btnText}
        imgSrc={header.imgSrc}
        imgAlt={header.imgAlt}
      />

      <Flag />

      <TeaserMain heading={teaserMain.heading} text={teaserMain.text} />

      <TeaserSec
        heading="Margot & Hans Döpper"
        imgSrc={mamaPapa}
        imgAlt="Margot und Hans"
        linkTo="/ueberuns"
        linkText="Über Uns"
        linkColor="bg-web-red"
        heading2="Spielend lernen"
        img2Src={mamaKinder}
        img2Alt="Margot"
        linkTo2="/programm"
        linkText2="Zum Programm"
        teaserText="Hans Döpper war bis 2012 Vollerwerbslandwirt mit 100 Tieren. Der ehemalige Vollerwerbs-
Milchviehbetrieb wird nun als Mischbetrieb geführt. Margot Döpper gründete Erlebniswelt

Bauernhof um den Kindern die Tier - und Pflanzenwelt nahezubringen."
        teaserText2="Kindergeburtstage sind das Herzstück der Erlebniswelt Bauernhof. Durch das spielerische
Lernen und Erfahren haben die Kinder einen unvergessliches Tag mit Erlebnissen die lange im
Gedächtnis bleiben."
      ></TeaserSec>
      <TeaserThird
        heading="Unsere Tiere"
        imgSrc={donkey}
        imgAlt="Esel"
        btnSrc="/tiere"
        btnText="Tiere kennenlernen"
        miniImgSrc={Obst}
        miniImgAlt="Obst"
      >
        Durch die Vielzahl an Tieren ist für jeden eine Tierart dabei, die näher
        entdeckt werden will. Unsere Tiere freuen sich immer über nette Besucher
        und lieben Streicheleinheiten.
      </TeaserThird>
    </div>
  );
};

export default Home;
