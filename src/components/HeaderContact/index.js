const HeaderContact = (props) => {
  return (
    <div>
      <div className="">
        <div className="relative mx-auto ">
          <img
            className="absolute right-0 hidden -top-24 z-10 md:block md:max-w-3xl lg:max-w-full "
            src={props.desktopBgImgSrc}
            alt={props.desktopBgImgAlt}
          />
        </div>
        <header className="relative z-10 text-center ">
          <div className="text-center">
            <div className="flex justify-center pt-20 mb-8">
              <img src={props.imgSrc} alt={props.imgAlt} />
            </div>

            <h1 className="text-4xl font-medium font-Atma">{props.heading}</h1>
            <div className="flex justify-center">
              <p className=" pt-5 font-Signika-Negative max-w-xl px-5">
                {props.children}
              </p>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HeaderContact;
