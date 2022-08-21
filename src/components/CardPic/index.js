const CardPic = ({ imgSrc, imgAlt }) => {
  return (
    <div className="md:order-last">
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};
export default CardPic;
