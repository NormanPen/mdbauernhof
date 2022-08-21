import Header from "../../components/Header";
import Teaser from "../../components/Teaser";
import TeaserSec from "../../components/TeaserSec";
import Card from "../../components/Card";
import CardPic from "../../components/CardPic";
import { PriceList } from "../../components/PriceList";

import Data from "./Data";

const Program = () => {
  const header = Data.header;
  const teaserMain = Data.teaserMain;
  const card1 = Data.teaserSec.card1;
  const card2 = Data.teaserSec.card2;
  const card3 = Data.teaserThird.card3;
  const card4 = Data.teaserThird.card4;
  const card5 = Data.teaserFourth.card5;
  const card6 = Data.teaserFourth.card6;

  return (
    <div>
      <Header
        heading={header.heading}
        text={header.text}
        mobileBgImgSrc={header.bgMobile}
        mobileBgImgAlt={header.bgMobileAlt}
        desktopBgImgSrc={header.bgDesktop}
        desktopBgImgAlt={header.bgDesktopAlt}
        scrollTo={header.scrollTo}
        imgSrc={header.imgSrc}
        imgAlt={header.imgAlt}
        btnPath={header.scrollTo}
        btnText={header.scrollToText}
      />
      <div className="h-9  pt-36" />
      <div className="willkommen" />
      <Teaser
        heading={teaserMain.heading}
        text={teaserMain.text}
        imgsrc={teaserMain.imgSrc}
        imgalt={teaserMain.imgAlt}
      />
      <TeaserSec
        bgColor={"md:bg-heroTextureYellow"}
        bgMobileColor={"bg-teaserBgMobileYellow"}
      >
        <Card
          imgSrc={card1.imgSrc}
          imgAlt={card1.imgAlt}
          heading={card1.heading}
          text={card1.text}
          on={false}
        />
        <Card
          imgSrc={card2.imgSrc}
          imgAlt={card2.imgAlt}
          heading={card2.heading}
          text={card2.text}
          on={false}
        />
      </TeaserSec>

      <div className="m-0 m-auto max-w-screen-2xl md:flex pt-24 md:w-160 md:justify-between">
        <CardPic imgSrc={card3.imgSrc} imgAlt={card3.imgAlt} />

        <Card
          imgSrc={card4.imgSrc}
          imgAlt={card4.imgAlt}
          heading={card4.heading}
          text={card4.text}
          linkText={card4.linkText}
          linkTo={card4.linkTo}
          linkColor={card4.linkColor}
        />
      </div>

      <TeaserSec>
        <Card
          imgSrc={card5.imgSrc}
          imgAlt={card5.imgAlt}
          heading={card5.heading}
          linkColor={card5.linkColor}
          text={card5.text}
          on={false}
        />
        <Card
          imgSrc={card6.imgSrc}
          imgAlt={card6.imgAlt}
          heading={card6.heading}
          text={card6.text}
          on={false}
        />
      </TeaserSec>

      <div className="pt-24 md:w-160 m-0 m-auto px-9">
        <PriceList />
      </div>
    </div>
  );
};

export default Program;
