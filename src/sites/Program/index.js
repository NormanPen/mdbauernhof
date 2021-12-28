import Header from "../../components/Header";
import { SmallPic } from "../../components/SmallPic";
import TeaserMain from "../../components/TeaserMain";
import CardMain from "../../components/test/CardMain";
import TeaserThird from "../../components/TeaserThird";
import { PriceList } from "../../components/PriceList";

import bgAboutMobile from "../../images/bgAboutMobile.svg";
import bgProgramm from "../../images/bgProgramm.svg";
import margotProgramm from "../../images/MargotProgramm.png";
import huetchen from "../../images/huetchen.svg";
import aepfel from "../../images/aepfel.png";
import kindLeiter from "../../images/kindLeiter.png";
import eselRitt from "../../images/WedaWilmaBuchner.png";
import tisch from "../../images/tisch.png";
import boot from "../../images/boot.png";

const Program = () => {
  return (
    <div>
      <Header
        heading="Unser Programm"
        mobileBgImgSrc={bgAboutMobile}
        mobileBgImgAlt="background Image"
        desktopBgImgSrc={bgProgramm}
        desktopBgImgAlt="background Image"
        imgSrc={margotProgramm}
        imgAlt="Bauernhof"
        btnPath="party"
        btnText="Jetzt entdecken"
      >
        Unser Bauernhof bietet ein vielfältiges Programm. Von
        Kindergeburtstagen, über tiergestützte Pädagogik und -Therapie, bis zu
        Genreation 50+
      </Header>
      <div className="md:pt-24 lg:pt-28 party">
        <SmallPic src={huetchen} alt="Hütchen"></SmallPic>
      </div>

      <TeaserMain heading="Kindergeburtstag">
        Kindergeburtstage sind das Herzstück der Erlebniswelt Bauernhof.
        Heustalltoben, Eselreiten, Bauerngarten ernten, Lagerfeuer mit
        Stockbrot, Kreativwerkstatt etc. machen den Geburtstag zu einem
        unvergesslichen Erlebnis. Ein Kindergeburtstag dauert in der Regel 3-4
        Stunden und ist geeignet für Kinder von 4-10 Jahren. Verpflegung wie
        Pizza wird gerne gestellt oder kann mitgebracht werden. Die Preisliste
        finden Sie unten auf der Seite.
      </TeaserMain>
      <div className="lg:pt-36">
        <CardMain
          heading="Heustalltoben"
          imgSrc={kindLeiter}
          teaserText="Im Heustall können sich die Kinder richtig austoben und ihre Energie loswerden. Fangen, im Heu verstecken, Heuburgen bauen oder auf der Schaukel die Seele baumeln lassen macht riesigen Spaß."
          heading2="Bauerngarten-Ernten"
          img2Src={aepfel}
          teaserText2="Die naturbelassenen Äpfel aus unserem Bauerngarten können gepflügt werden und daraus
können leckere Kuchen oder Bratäpfel gemacht werden. Außerdem haben wir Bäume oder
Sträucher mit Pflaumen, Birnen, Mirabellen, Quitten, Esskastanien, Johannisbeeren,
Stachelbeeren, Himbeeren, Sauer- und Süßkirschen. Lecker!"
        />
      </div>
      <div className="pb-36">
        <TeaserThird
          heading="Geführtes Eselreiten"
          imgSrc={eselRitt}
          imgAlt="Esel"
          btnPath="/tiere"
          btnText="Tiere kennenlernen"
        >
          Die Kinder können mit einem Voltigiergurt und Helm auf dem Esel
          reiten, dabei werden sie von einem Erwachsenen geführt. Dann kann eine
          Runde über Hof gedreht werden oder über Feldwege zum Wald.
        </TeaserThird>
      </div>

      <CardMain
        heading="Gemeinsam Essen + Feiern"
        heading2="Kreativworkshop"
        imgSrc={tisch}
        img2Src={boot}
        teaserText="Unser Veranstaltungsraum bietet ausreichend Platz um gemeinsam Kuchen oder Pizza zu essen und die Geschenke auszupacken und ein Geburtstagsständchen zu singen."
        teaserText2="Kreativprogramm kann gerne auch außerhalb eines Geburtstags gebucht werden. In einer
Gruppe können Holzflöße gebastelt, oder z.B. Pfosterhocker oder Teelicht-Häuschen getöpfert
werden."
      />
      <div className="pt-24 md:w-160 m-0 m-auto">
        <PriceList />
      </div>
    </div>
  );
};

export default Program;
