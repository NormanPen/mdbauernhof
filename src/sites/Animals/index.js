import Header from "../../components/Header";
import TeaserMain from "../../components/TeaserMain";
import CardMain from "../../components/CardMain";

import CardFourth from "../../components/CardFourth";
import Data from "../Home/Data";

import bgAnimals from "../../images/bgAnimals.png";
import bgGreenOval from "../../images/bgDeskGreen.svg";
import cow from "../../images/cow.png";
import chicken from "../../images/chicken.png";
import esel2 from "../../images/esel2.png";
import sheep from "../../images/sheeps.png";
import goose from "../../images/goose.png";
import rueben from "../../images/rueben.png";

const Animals = () => {
  return (
    <div>
      <Header
        heading="Unsere Tiere"
        mobileBgImgSrc={Data.header.bgMobileBlue}
        mobileBgImgAlt="background Image"
        desktopBgImgSrc={bgGreenOval}
        desktopBgImgAlt="background Image"
        imgSrc={bgAnimals}
        imgAlt="Bauernhof"
        btnPath="willkommen"
        btnText="Jetzt entdecken"
      >
        Unsere Tiere lieben Kinder. Mit ihren freundlichen Gemüt lassen sie sich
        gerne streicheln. Unsere Tiere haben genug Zeit zur Entspannung und
        freuen sich immer über nette Besucher.
      </Header>
      <div className="pt-32">
        <TeaserMain heading="Willkommen">
          Erlebniswelt Bauernhof ist gegründet worden um: den Kindern direkt vor
          Ort die Natur nahezubringen, um Ihnen ein Gefühl für die Schönheit der
          "Schöpfung" zu vermitteln und die Welt auch noch für nachkommende
          Generationen in diesem Umfang zu erhalten.
        </TeaserMain>
      </div>

      <CardMain
        heading="Hühner"
        imgSrc={chicken}
        imgAlt="Hühnchen"
        teaserText="Gemischte Hühnerrassen, die braune, weiße und grüne Eier legen, laufen bei uns frei auf dem Hof herum. Die Seidenhühner, die ganz besonders schön anzusehen sind, geben kleine Eier. Eier können bei uns auf dem Hof gekauft werden."
        heading2="Kühe"
        img2Src={cow}
        img2Alt="Kühe"
        teaserText2="Unsere Kälber wachsen noch ganz ursprünglich bei ihren Müttern auf. Den ganzen Sommer
über sind sie auf der Wiese und lassen sich gerne mit Brot und Möhren füttern. Unsere Rassen
sind Fleckvieh, Charolai und die bayerische Milchkuh."
      />
      <CardFourth
        heading="Esel"
        imgSrc={esel2}
        imgAlt="Esel"
        miniImgSrc={rueben}
      >
        Pedro, Shelty, Mona, Teresa und Samson sind unsere liebenswürdigen Esel.
        Sie mögen lange Streicheleinheiten, Putzen oder Striegeln, ihre Mähne zu
        Zöpfen flechten oder mit Federn verzieren lassen. Außerdem mögen sie
        Spaziergänge oder geführtes Reiten.
      </CardFourth>
      <div className="pt-32">
        <CardMain
          heading="Schafe"
          imgSrc={sheep}
          imgAlt="Schafe"
          teaserText="Eine kleine Schafherde von ca. 5 Schafen wohnt ebenfalls auf unserem Hof. Heidschnucken,
Coburger Rotfuchs ist ihre Rasse."
          heading2="Gänse"
          img2Src={goose}
          img2Alt="Gänse"
          teaserText2="Unsere “Wachhunde” die Gänse können Manchem mit ihrem Geschnatter Angst einjagen. Aber lassen sie sich nicht täuschen, ihr Charakter ist freundlich. Und im Frühjahr legen sie leckere Eier und sie freuen sich immer über eine Möhre."
        />
      </div>
    </div>
  );
};

export default Animals;
