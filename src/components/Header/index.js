import ButtonScrollTo from "../Buttons/ButtonScrollTo";

const Header = (props) => {
  return (
    <div>
      <div className="">
        <div className="relative mx-auto">
          <img
            className="absolute right-0 hidden md:block 2xl:max-w-screen-2xl -top-24 z-20"
            src={props.desktopBgImgSrc}
            alt={props.desktopBgImgAlt}
          />
        </div>
      </div>

      <header className="relative mt-2.5 md:h-80   md:max-w-3xl  md:mx-auto lg:max-w-5xl  lg:top-20 lg:h-98  xl:h-100 xl:max-w-7xl ">
        <img
          className="absolute right-0 w-full top-30 md:hidden -z-10 md:w-96 h-80 "
          src={props.mobileBgImgSrc}
          alt={props.mobilBgImgAlt}
        />
        <img
          className="z-30 object-cover object-center md:h-80 md:absolute md:top-0 md:right-8  lg:right-0 xl:h-auto "
          src={props.imgSrc}
          alt={props.imgAlt}
        />

        <div className="z-40 max-w-sm px-4 pt-8 md:absolute md:top-3 md:left-8 xl:top-16 xl:left-60">
          <h1 className="text-4xl font-medium font-Atma ">{props.heading}</h1>
          <p className="pt-5 pb-10 text-base md:w-64 font-Signika-Negative">
            {props.children}
          </p>
          <ButtonScrollTo to={props.btnPath}>{props.btnText}</ButtonScrollTo>
        </div>
      </header>
    </div>
  );
};

export default Header;
