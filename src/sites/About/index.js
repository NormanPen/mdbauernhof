import Header from "../../components/Header";
import TeaserThird from "../../components/TeaserThird";
import CardPic from "../../components/CardPic";
import CardText from "../../components/CardText";

import Data from "./Data";

const About = () => {
  const header = Data.header;
  const card1 = Data.teaserThird1.card1;
  const card2 = Data.teaserThird1.card2;
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
      <div className="h-9 willkommen pt-36" />

      <TeaserThird>
        <CardPic imgSrc={card1.imgSrc} imgAlt={card1.imgAlt} />
        <CardText heading={card2.heading} text={card2.text} />
      </TeaserThird>
      <TeaserThird>
        <CardPic imgSrc={card1.imgSrc} imgAlt={card1.imgAlt} />
        <CardText heading={card2.heading} text={card2.text} />
      </TeaserThird>
    </div>
  );
};

export default About;
