//Mögliche Farben die Hintergrundbilder
const COLORS = ["md:bg-hero-texture-pink", "md:bg-heroTextureYellow"];
const COLORSMOBILE = ["bg-teaserBgMobile", "bg-teaserBgMobileYellow"];
const TeaserSec = ({ children, bgColor, bgMobileColor }) => {
  //überprüfen ob es eine Farbe für den LinkTo gibt, falls nicht Standard setzen
  const checkBgColor = COLORS.includes(bgColor) ? bgColor : COLORS[0];
  const checkMobileBgColor = COLORSMOBILE.includes(bgMobileColor)
    ? bgMobileColor
    : COLORSMOBILE[0];
  return (
    <div
      className={`m-0 m-auto max-w-screen-2xl bg-no-repeat bg-cover ${checkMobileBgColor} md:flex md:h-120  ${checkBgColor} `}
    >
      <div className="m-0 m-auto md:w-160 md:flex md:justify-between">
        {children}
      </div>
    </div>
  );
};

export default TeaserSec;
