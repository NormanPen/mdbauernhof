import { ButtonPink } from "../Buttons/ButtonPink";

export const SectionMain = (props) => {
  return (
    <section className="max-w-screen-sm text-center">
      <div className="flex justify-center">
        <img
          src={props.imgSrc}
          alt={props.imgAlt}
          className="w-11/12 h-11/12"
        />
      </div>

      <h3 className=" pt-10 text-2xl font-medium font-Atma">{props.heading}</h3>
      <p className=" px-6 pt-5 font-Signika-Negative">{props.children}</p>
      <ButtonPink to={props.to}>{props.btnText}</ButtonPink>
    </section>
  );
};
