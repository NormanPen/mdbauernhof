const CardPic = ({ imgSrc, imgAlt }) => {
  return (
    <div className="md:w-160">
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};
export default CardPic;
