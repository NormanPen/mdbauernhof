const CardThrd = (props) => {
  return (
    <div className="m-0 m-auto max-w-screen-2xl md:flex  ">
      <div className="m-0 m-auto md:w-160 md:flex md:justify-between">
        <div className="md:order-last">
          <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
        <article className="text-center px-9 pt-7 mx-auto md:w-160">
          <h2 className=" text-2xl font-medium font-Atma">{props.heading}</h2>
          <p className="pt-5 font-Signika-Negative">{props.children}</p>
        </article>
      </div>
    </div>
  );
};
export default CardThrd;
