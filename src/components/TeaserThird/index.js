import { ButtonGreen } from "../Buttons/ButtonGreen";
import Obst from "../../images/Obst 1.png";

const TeaserThird = (props) => {
  return (
    <div className="m-0 m-auto max-w-screen-2xl md:flex  ">
      <div className="m-0 m-auto md:w-160 md:flex md:justify-between">
        <article className="text-center px-9 pt-7 mx-auto md:w-160">
          <div className="flex justify-center">
            <img src={Obst} alt="Obst" />
          </div>
          <h2 className=" text-2xl font-medium font-Atma">{props.heading}</h2>
          <p className="pt-5 font-Signika-Negative">{props.children}</p>
          <ButtonGreen to={props.btnSrc}>{props.btnText}</ButtonGreen>
        </article>
        <div>
          <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
      </div>
    </div>
  );
};

export default TeaserThird;
