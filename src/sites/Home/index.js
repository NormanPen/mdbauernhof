import Header from "../../components/Header";
import ContactFooter from "../../components/ContactFooter";

import bgMobileBlue from "../../images/bgMobileBlue.png";
import bauernhof from "../../images/bauernhof.png";
const Home = () => {
  return (
    <div className="pt-24">
      <Header
        heading="Herzlich Willkommen auf unserem Hof"
        bgImgSrc={bgMobileBlue}
        bgImgAlt="background Image"
        imgSrc={bauernhof}
        imgAlt="Bauernhof"
        btnPath="test"
        btnText="Jetzt entdecken"
      >
        Entdecken Sie den Erlebniswelt Bauernhof der Familie Döpper.
      </Header>

      <div className="relative h-48 bg-green-300">
        <div className="absolute top-14 left-6 bg-red-300">
          <h1>box1</h1>
          <p>asdk kjhash kjhjkashjh jklajsfjij jiljsdifj </p>
        </div>

        <div className="absolute top-0 left-6 bg-blue-300">
          <h1>box2</h1>
          <p>asdk kjhash kjhjkashjh jklajsfjij jiljsdifj </p>‚
        </div>
      </div>

      <div className="relative h-48 bg-blue-800">
        <div className="absolute top-14 left-6 bg-red-300">
          <h1>box1</h1>
          <p>asdk kjhash kjhjkashjh jklajsfjij jiljsdifj </p>
        </div>

        <div className="absolute top-0 left-6 bg-blue-300">
          <h1>box2</h1>
          <p>asdk kjhash kjhjkashjh jklajsfjij jiljsdifj </p>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
};

export default Home;
