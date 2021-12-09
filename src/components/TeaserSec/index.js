import mamaPapa from "../../images/mama_papa.png";
import { ButtonPink } from "../Buttons/ButtonPink";

const TeaserSec = () => {
  return (
    <div className="m-0 m-auto max-w-screen-2xl md:flex md:bg-hero-texture md:bg-cover ">
      <div className="m-0 m-auto md:w-160 md:flex md:justify-between">
        <article className=" text-center px-9 pt-7 mx-auto md:w-160  lg:pb-40">
          <img className="mx-auto m-0" src={mamaPapa} alt="asdasd" />
          <h2 className=" pt-10 text-2xl font-medium font-Atma">
            Margot & Hans Döpper
          </h2>
          <p className="pt-5 font-Signika-Negative">
            Erlebniswelt Bauernhof ist gegründet worden um: den Kindern direkt
            vor Ort die Natur nahezubringen, um Ihnen ein Gefühl für die
            Schönheit der "Schöpfung" zu vermitteln und die Welt auch noch für
            nachkommende Generationen in diesem Umfang zu erhalten.
          </p>
          <ButtonPink>Über uns</ButtonPink>
        </article>
        <article className=" text-center px-9 pt-7 mx-auto md:w-160  lg:pb-40">
          <img className="mx-auto m-0" src={mamaPapa} alt="asdasd" />
          <h2 className=" pt-10 text-2xl font-medium font-Atma">
            Margot & Hans Döpper
          </h2>
          <p className="pt-5 font-Signika-Negative">
            Erlebniswelt Bauernhof ist gegründet worden um: den Kindern direkt
            vor Ort die Natur nahezubringen, um Ihnen ein Gefühl für die
            Schönheit der "Schöpfung" zu vermitteln und die Welt auch noch für
            nachkommende Generationen in diesem Umfang zu erhalten.
          </p>
          <ButtonPink>Über uns</ButtonPink>
        </article>
      </div>
    </div>
  );
};

export default TeaserSec;
