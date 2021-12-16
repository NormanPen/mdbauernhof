import ButtonScrollTo from "../Buttons/ButtonScrollTo";

const Header = (props) => {
  const {
    desktopBgImgSrc,
    desktopBgImgAlt,
    mobileBgImgSrc,
    mobilBgImgAlt,
    imgSrc,
    imgAlt,
    heading,
    children,
    btnPath,
    btnText,
  } = props;

  return (
    <div className="">
      <div className="">
        <div className="relative mx-auto ">
          <img
            className="absolute right-0 hidden -top-24 z-10 md:block md:max-w-3xl lg:max-w-full "
            src={desktopBgImgSrc}
            alt={desktopBgImgAlt}
          />
        </div>
      </div>

      <header className="relative z-10 mt-2.5 md:h-80   md:max-w-3xl  md:mx-auto lg:max-w-3xl  lg:top-20 lg:h-98  xl:h-100 xl:max-w-7xl ">
        <img
          className="absolute right-0 w-full top-30 md:hidden z-10 md:w-96 h-80 "
          src={mobileBgImgSrc}
          alt={mobilBgImgAlt}
        />
        <img
          className="z-30 object-cover object-center md:h-80 md:absolute md:top-0 md:right-8  lg:right-0 xl:h-auto "
          src={imgSrc}
          alt={imgAlt}
        />

        <div className="z-40 max-w-sm px-4 pt-8 md:absolute md:top-3 md:left-8 xl:top-16 xl:left-60">
          <h1 className="text-4xl font-medium font-Atma ">{heading}</h1>
          <p className="pt-5 pb-10 text-base md:w-56 lg:w-56 font-Signika-Negative">
            {children}
          </p>
          <ButtonScrollTo to={btnPath}>{btnText}</ButtonScrollTo>
        </div>
      </header>
    </div>
  );
};

export default Header;
