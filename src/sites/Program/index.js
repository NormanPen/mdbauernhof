import Header from "../../components/Header";
import TeaserMain from "../../components/TeaserMain";
import TeaserSec from "../../components/TeaserSec";
import Card from "../../components/Card";
import CardMain from "../../components/test/CardMain";
import TeaserThird from "../../components/TeaserThird";
import { PriceList } from "../../components/PriceList";

import aepfel from "../../images/aepfel.png";
import kindLeiter from "../../images/kindLeiter.png";
import eselRitt from "../../images/WedaWilmaBuchner.png";
import tisch from "../../images/tisch.png";
import boot from "../../images/boot.png";

import { Data } from "./data";

const Program = () => {
  const header = Data.header;
  const teaserMain = Data.teaserMain;
  const card1 = Data.teaserSec.card1;
  const card2 = Data.teaserSec.card2;
  return (
    <div>
      <Header
        heading={header.heading}
        text={header.text}
        mobileBgImgSrc={header.bgMobile}
        mobileBgImgAlt={header.bgMobileAlt}
        desktopBgImgSrc={header.bgDesktop}
        desktopBgImgAlt={header.bgMobileAlt}
        imgSrc={header.imgSrc}
        imgAlt={header.imgAlt}
        btnPath={header.scrollTo}
        btnText={header.scrollToText}
      ></Header>

      <TeaserMain
        heading={teaserMain.heading}
        text={teaserMain.text}
        imgsrc={teaserMain.imgSrc}
        imgalt={teaserMain.imgAlt}
      />
      <TeaserSec>
        <Card
          imgSrc={card1.imgSrc}
          imgAlt="Margot und Hans Döpper"
          heading={card1.heading}
          linkTo={card1.linkTo}
          linkText={card1.linkText}
          linkColor={card1.linkColor}
          text={card1.text}
          on={false}
        />
        <Card
          imgSrc={card2.imgSrc}
          imgAlt="Margot und Hans Döpper"
          heading={card2.heading}
          linkTo={card2.linkTo}
          linkText={card2.linkText}
          linkColor={card2.linkColor}
          text={card2.text}
          on={false}
        />
      </TeaserSec>

      <div className="pt-24 md:w-160 m-0 m-auto">
        <PriceList />
      </div>
    </div>
  );
};

export default Program;
