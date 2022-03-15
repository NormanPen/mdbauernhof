const Teaser = ({ imgsrc, imgalt, heading, text }) => {
  return (
    <div className="m-0 m-auto max-w-screen-2xl pb-16">
      <div className="h-9 willkommen" />
      <article className=" text-center px-9 pt-7 mx-auto md:w-160 ">
        <div className="flex justify-center">
          <img src={imgsrc} alt={imgalt} className="flex justify-center pb-8" />
        </div>
        <h2 className=" text-3xl font-medium font-Atma">{heading}</h2>
        <p className="pt-6 text-base font-Signika-Negative">{text}</p>
      </article>
    </div>
  );
};

export default Teaser;
