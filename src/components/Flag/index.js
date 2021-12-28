const Flag = () => {
  return (
    <div className="relative h-52 sm:h-60 md:hidden">
      <img
        src={require("../../images/Kette.svg").default}
        alt="Fähnchen"
        className="lg:absolute -top-8 z-10 w-screen  md:w-auto md:-top-10 lg:-top-28 xl:-top-20 "
      />
    </div>
  );
};

export default Flag;
