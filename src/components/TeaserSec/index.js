import { ButtonPink } from "../Buttons/ButtonPink";

const TeaserSec = (props) => {
  return (
    <div className="m-0 m-auto max-w-screen-2xl md:flex md:bg-hero-texture md:bg-cover ">
      <div className="m-0 m-auto md:w-160 md:flex md:justify-between">
        <article className=" text-center px-9 pt-7 mx-auto md:w-160  lg:pb-40">
          <img className="mx-auto m-0" src={props.imgSrc} alt={props.imgAlt} />
          <h2 className=" pt-10 text-2xl font-medium font-Atma">
            {props.heading}
          </h2>
          <p className="pt-5 font-Signika-Negative">{props.heading}</p>
          <ButtonPink to={props.btnPath}>{props.btnText}</ButtonPink>
        </article>
        <article className=" text-center px-9 pt-7 mx-auto md:w-160  lg:pb-40">
          <img className="mx-auto m-0" src={props.imgSrc} alt={props.imgAlt} />
          <h2 className=" pt-10 text-2xl font-medium font-Atma">
            {props.heading}
          </h2>
          <p className="pt-5 font-Signika-Negative">{props.heading}</p>
          <ButtonPink to={props.btnPath}>{props.btnText}</ButtonPink>
        </article>
      </div>
    </div>
  );
};

export default TeaserSec;
