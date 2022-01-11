import Header from "../../components/Header";
import Teaser from "../../components/Teaser";
import TeaserSec from "../../components/TeaserSec";
import Card from "../../components/Card";
import { PriceList } from "../../components/PriceList";

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

      <Teaser
        heading={teaserMain.heading}
        text={teaserMain.text}
        imgsrc={teaserMain.imgSrc}
        imgalt={teaserMain.imgAlt}
      />
      <TeaserSec>
        <Card
          imgSrc={card1.imgSrc}
          imgAlt={card1.imgAlt}
          heading={card1.heading}
          linkTo={card1.linkTo}
          linkText={card1.linkText}
          linkColor={card1.linkColor}
          text={card1.text}
          on={false}
        />
        <Card
          imgSrc={card2.imgSrc}
          imgAlt={card2.imgAlt}
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
