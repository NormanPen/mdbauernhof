import { ButtonPink } from "../Buttons/ButtonPink";
import LinkTo from "../Link";
import Card from "../Card";

const TeaserSec = (props) => {
  return (
    <div className="m-0 m-auto max-w-screen-2xl md:flex bg-hero-texture md:bg-cover ">
      <div className="m-0 m-auto md:w-160 md:flex md:justify-between">
        <Card
          imgSrc={props.imgSrc}
          imgAlt={props.imgAlt}
          heading={props.heading}
          linkTo={props.linkTo}
          linkText={props.linkText}
          linkColor={props.linkColor}
          text={props.teaserText}
        />
        <Card
          imgSrc={props.img2Src}
          imgAlt={props.img2Alt}
          heading={props.heading2}
          linkTo={props.linkTo2}
          linkText={props.linkText2}
          linkColor={props.linkColor}
          text={props.teaserText2}
        />
      </div>
    </div>
  );
};

export default TeaserSec;
