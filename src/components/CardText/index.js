const Cardtext = ({ heading, text }) => {
  return (
    <article className="text-center px-9 pt-7 mx-auto md:w-160">
      <h2 className=" text-2xl font-medium font-Atma">{heading}</h2>
      <p className="pt-5 font-Signika-Negative">{text}</p>
    </article>
  );
};
export default Cardtext;
