import flag from "../../images/Kette.svg";

const Flag = () => {
  return (
    <div className="relative h-52 sm:h-60 md:hidden">
      <img
        src={flag}
        alt="Fähnchen"
        className="absolute -top-8 z-10 w-screen sm:-top-20"
      />
    </div>
  );
};

export default Flag;
