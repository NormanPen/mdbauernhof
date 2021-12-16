export const SmallPic = (props) => {
  return (
    <div className="flex justify-center">
      <img src={props.src} alt={props.alt} />
    </div>
  );
};
