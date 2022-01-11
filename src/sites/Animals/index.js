import Header from "../../components/Header";
import TeaserMain from "../../components/TeaserMain";
import TeaserSec from "../../components/TeaserSec";
import TeaserThird from "../../components/TeaserThird";
import Card from "../../components/Card";
import CardPic from "../../components/CardPic";

import Data from "./Data";

const Animals = () => {
  const header = Data.header;
  const teaserMain = Data.teaserMain;
  const card1 = Data.teaserSec.card1;
  const card2 = Data.teaserSec.card2;
  const card3 = Data.teaserThird.card3;
  const card4 = Data.teaserThird.card4;
  const card5 = Data.card5;
  const card6 = Data.card6;

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

      <div className="pt-32">
        <TeaserMain
          heading={teaserMain.heading}
          text={teaserMain.text}
        ></TeaserMain>
      </div>

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

      <TeaserThird>
        <CardPic imgSrc={card3.imgSrc} imgAlt={card3.imgAlt} />
        <Card
          imgSrc={card4.imgSrc}
          imgAlt={card4.imgAlt}
          heading={card4.heading}
          text={card4.text}
          on={false}
        />
      </TeaserThird>

      <TeaserSec>
        <Card
          imgSrc={card5.imgSrc}
          imgAlt={card6.imgAlt}
          heading={card5.heading}
          linkTo={card5.linkTo}
          linkText={card5.linkText}
          linkColor={card5.linkColor}
          text={card5.text}
          on={false}
        />
        <Card
          imgSrc={card6.imgSrc}
          imgAlt={card6.imgAlt}
          heading={card6.heading}
          linkTo={card6.linkTo}
          linkText={card6.linkText}
          linkColor={card6.linkColor}
          text={card6.text}
          on={false}
        />
      </TeaserSec>
    </div>
  );
};

export default Animals;
