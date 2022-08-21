const TeaserThird = (props) => {
  return (
    <div className="m-0 m-auto max-w-screen-2xl md:flex pt-24 ">
      <div className="m-0 m-auto md:w-160 md:flex md:justify-between">
        {props.children}
      </div>
    </div>
  );
};

export default TeaserThird;
