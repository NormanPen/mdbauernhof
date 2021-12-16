import Header from "../../components/Header";
import CardSec from "../../components/CardSec";
import CardThrd from "../../components/CardThrd";

import bgAboutMobile from "../../images/bgAboutMobile.svg";
import bgAbout from "../../images/bgAbout.svg";
import margotUndHans from "../../images/MargotUndHans.png";
import omaOpa from "../../images/OmaOpa.png";
import tracktor from "../../images/Tracktor.png";

const About = () => {
  return (
    <div>
      <Header
        heading="Über uns"
        mobileBgImgSrc={bgAboutMobile}
        mobileBgImgAlt="background Image"
        desktopBgImgSrc={bgAbout}
        desktopBgImgAlt="background Image"
        imgSrc={margotUndHans}
        imgAlt="Bauernhof"
        btnPath="willkommen"
        btnText="Jetzt entdecken"
      >
        Margot Döpper wollte nicht nur Landwirtin sein. Heute organisiert sie,
        unterstützt von ihrem Mann Hans Döpper, Kindergeburtstage auf dem
        Bauernhof. In Kursen der Landwirtschaftskammer erwirbt sie regelmäßig
        das nötige Know-how.{" "}
      </Header>
      <div className="h-9 willkommen pt-36" />
      <CardSec heading="der Hof damals" imgSrc={omaOpa}>
        Der Bauernhof existiert nun in der 4. Generatinon. Er wurde damals für
        den unglaublichen Preis von 9 Pferden gekauft.
      </CardSec>
      <CardThrd heading="der Hof heute" imgSrc={tracktor}>
        Heute kümmern sich hauptsächlich Hans, Margot und Mathias Döpper um den
        Hof und die Wiesen. Es gibt viel zu entdecken. Zum Beispiel eine
        Vielzahl an Tieren, ein Heustall, ein Obstgarten und Insektengarten.
      </CardThrd>
    </div>
  );
};

export default About;
