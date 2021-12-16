import { ButtonGreen } from "../Buttons/ButtonGreen";
import { SmallPic } from "../SmallPic";

const TeaserThird = (props) => {
  return (
    <div className="m-0 m-auto max-w-screen-2xl md:flex pt-24 ">
      <div className="m-0 m-auto md:w-160 md:flex md:justify-between">
        <div className="md:order-last">
          <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
        <article className="text-center px-9 pt-7 mx-auto md:w-160">
          <div className="pb-3.5">
            <SmallPic src={props.miniImgSrc} alt={props.miniImgAlt} />
          </div>

          <h2 className=" text-2xl font-medium font-Atma">{props.heading}</h2>
          <p className="pt-5 font-Signika-Negative">{props.children}</p>
          <ButtonGreen to={props.btnSrc}>{props.btnText}</ButtonGreen>
        </article>
      </div>
    </div>
  );
};

export default TeaserThird;
