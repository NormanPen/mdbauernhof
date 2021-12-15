const TeaserMain = (props) => {
  return (
    <div className="m-0 m-auto max-w-screen-2xl pb-16">
      <div className="h-9 willkommen" />
      <article className=" text-center px-9 pt-7 mx-auto md:w-160 ">
        <img src={props.imgsrc} alt={props.imgalt} />
        <h2 className=" text-3xl font-medium font-Atma">{props.heading}</h2>
        <p className="pt-6 text-base font-Signika-Negative">{props.heading}</p>
      </article>
    </div>
  );
};

export default TeaserMain;
