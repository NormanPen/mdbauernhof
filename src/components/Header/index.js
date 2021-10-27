import ButtonScrollTo from "../Buttons/ButtonScrollTo";

const Header = (props) => {
  return (
    <header className="relative  pt-24 bg-blue-500">
      <img
        className="absolute left-0 w-full top-30 lg:hidden -z-10 md:hidden"
        src={props.bgImgSrc}
        alt={props.bgImgAlt}
      />

      <img
        className="object-cover object-center h-80 header-image md:absolute md:top-0 md:right-0 z-10"
        src={props.imgSrc}
        alt={props.imgAlt}
      />

      <div className="px-4 pt-8">
        <h1 className="text-4xl font-medium font-Atma ">{props.heading}</h1>
        <p className="pt-5 pb-10 text-base font-Signika-Negative">
          {props.children}
        </p>
        <ButtonScrollTo to={props.btnPath}>{props.btnText}</ButtonScrollTo>
      </div>
    </header>
  );
};

export default Header;
