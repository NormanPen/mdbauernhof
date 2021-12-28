import Header from "../../components/Header";
import Flag from "../../components/Flag";
import TeaserMain from "../../components/TeaserMain";
import TeaserSec from "../../components/TeaserSec";
import TeaserThird from "../../components/TeaserThird";
import Card from "../../components/Card";
import CardPic from "../../components/CardPic";

import Data from "./Data";

const Home = () => {
  const header = Data.header;
  const teaserMain = Data.teaserMain;
  const card1 = Data.teaserSec.card1;
  const card2 = Data.teaserSec.card2;
  const card3 = Data.teaserThird.card3;
  const card4 = Data.teaserThird.card4;

  return (
    <>
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

      <TeaserSec>
        <Card
          imgSrc={card1.imgSrc}
          imgAlt="Margot und Hans Döpper"
          heading={card1.heading}
          linkTo={card1.linkTo}
          linkText={card1.linkText}
          linkColor={card1.linkColor}
          text={card1.text}
          on={true}
        />
        <Card
          imgSrc={card2.imgSrc}
          imgAlt="Margot und Hans Döpper"
          heading={card2.heading}
          linkTo={card2.linkTo}
          linkText={card2.linkText}
          linkColor={card2.linkColor}
          text={card2.text}
          on={true}
        />
      </TeaserSec>
      <TeaserThird>
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
      </TeaserThird>
    </>
  );
};

export default Home;
