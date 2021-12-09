import { ButtonPink } from "../Buttons/ButtonPink";
import donkey from "../../images/donkey.png";

const TeaserThird = () => {
  return (
    <div className="m-0 m-auto max-w-screen-2xl md:flex  ">
      <div className="m-0 m-auto md:w-160 md:flex md:justify-between">
        <article className="text-center px-9 pt-7 mx-auto md:w-160">
          <h2 className=" text-2xl font-medium font-Atma">Unsere Tiere</h2>
          <p className="pt-5 font-Signika-Negative">
            In this reinvented flick, which hovers like a Matisse cutout between
            the lashline and brow bone, curved crease of the eyelid, while the
            top is a long, flat line that extends past the outer corners.
          </p>
          <ButtonPink>Teiere kennenlernen</ButtonPink>
        </article>
        <div>
          <img src={donkey} alt="Tiere" />
        </div>
      </div>
    </div>
  );
};

export default TeaserThird;
