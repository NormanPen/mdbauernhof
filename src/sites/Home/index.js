import Header from "../../components/Header";
import Flag from "../../components/Flag";
import TeaserMain from "../../components/TeaserMain";
import TeaserSec from "../../components/TeaserSec";
import TeaserThird from "../../components/TeaserThird";

//import bgMobileBlue from "../../images/bgMobileBlue.png";
import bgDeskBlue from "../../images/bgDeskBlue.svg";
import bauernhof from "../../images/bauernhof.png";

import mamaPapa from "../../images/mama_papa.png";

import donkey from "../../images/donkey.png";

import Data from "./Data";

const Home = () => {
  return (
    <div className="">
      <Header
        heading={Data.header.heading}
        mobileBgImgSrc={Data.header.bgMobileBlue}
        mobileBgImgAlt="background Image"
        desktopBgImgSrc={bgDeskBlue}
        desktopBgImgAlt="background Image"
        imgSrc={bauernhof}
        imgAlt="Bauernhof"
        btnPath="willkommen"
        btnText="Jetzt entdecken"
      >
        Entdecken Sie den Erlebniswelt Bauernhof der Familie Döpper.
      </Header>

      <Flag />

      <TeaserMain heading="Willkommen">
        Erlebniswelt Bauernhof ist gegründet worden um: den Kindern direkt vor
        Ort die Natur nahezubringen, um Ihnen ein Gefühl für die Schönheit der
        "Schöpfung" zu vermitteln und die Welt auch noch für nachkommende
        Generationen in diesem Umfang zu erhalten.
      </TeaserMain>

      <TeaserSec
        heading="Margot & Hans Döpper"
        imgSrc={mamaPapa}
        imgAlt="asdads"
        btnPath="asdasd"
        btnText="Über Uns"
        heading2="Spielend lernen"
        img2Src={mamaPapa}
        img2Alt="asdads"
        btn2Path="asdasd"
        btn2Text="Über Uns"
        teaserText="      Erlebniswelt Bauernhof ist gegründet worden um: den Kindern direkt vor
        Ort die Natur nahezubringen, um Ihnen ein Gefühl für die Schönheit der
        Schöpfung zu vermitteln und die Welt auch noch für nachkommende
        Generationen in diesem Umfang zu erhalten."
        teaserText2="Kindergeburtstage sind das Herzstück der Erlebniswelt Bauernhof. Durch das spielerische Lernen und Erfahren, haben die Kinder einen unvergessliches Tag mit Erlebnissen die lange im Gedächtnis bleiben."
      ></TeaserSec>
      <TeaserThird
        heading="Unsere Tiere"
        imgSrc={donkey}
        imgAlt="Esel"
        btnPath="asddasd"
        btnText="asdasdasd"
      >
        Durch die Vielzahl an Tieren ist für jeden eine Tierart dabei, die näher
        entdeckt werden will. Unsere Tiere freuen sich immer über nette Besucher
        und lieben Streicheleinheiten.
      </TeaserThird>
    </div>
  );
};

export default Home;
