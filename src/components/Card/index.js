import LinkTo from "../Link";

const Card = ({
  imgSrc,
  imgAlt,
  heading,
  linkTo,
  linkColor,
  text,
  linkText,
  on,
}) => {
  return (
    <article className=" text-center px-9 pt-24 mx-auto md:w-160  lg:pb-40">
      <img className="mx-auto m-0" src={imgSrc} alt={imgAlt} />
      <h2 className=" pt-10 text-2xl font-medium font-Atma">{heading}</h2>
      <p className="pt-5 font-Signika-Negative">{text}</p>

      <LinkTo on={on} to={linkTo} linkColor={linkColor}>
        {linkText}
      </LinkTo>
    </article>
  );
};
export default Card;
