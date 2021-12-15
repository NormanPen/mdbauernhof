export const SmallPic = (props) => {
  return (
    <div className="flex justify-center pt-20">
      <img src={props.src} alt={props.alt} />
    </div>
  );
};
