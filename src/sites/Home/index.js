import Header from "../../components/Header";
import Flag from "../../components/Flag";
import TeaserMain from "../../components/TeaserMain";

import bgMobileBlue from "../../images/bgMobileBlue.png";
import bgDeskBlue from "../../images/bgDeskBlue.svg";
import bauernhof from "../../images/bauernhof.png";

const Home = () => {
  return (
    <div className="">
      <Header
        heading="Herzlich Willkommen auf unserem Hof"
        mobileBgImgSrc={bgMobileBlue}
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
      <div className="relative h-48 bg-white "></div>
    </div>
  );
};

export default Home;
