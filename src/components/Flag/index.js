import flag from "../../images/Kette.svg";

const Flag = () => {
  return (
    <div className="relative h-52 sm:h-60 2xl:hidden">
      <img
        src={flag}
        alt="Fähnchen"
        className="lg:absolute -top-8 z-10 w-screen  md:w-auto md:-top-10 lg:-top-28 xl:-top-20 "
      />
    </div>
  );
};

export default Flag;
