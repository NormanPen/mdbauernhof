import bgMobileBlue from "../../images/bgMobileBlue.png";
import bgDeskBlue from "../../images/bgDeskBlue.svg";

class data {
  constructor(heading) {
    this.heading = heading;
  }
}

const d1 = new data("Herzlich Willkomen");

const Data = {
  header: {
    heading: "Herzlich Willkommen auf unserem Hof",
    bgMobileBlue: bgMobileBlue,
    mobileBgImgAlt: "background Image",
    desktopBgImgSrc: bgDeskBlue,
    desktopBgImgAlt: "background Image",
  },
};
export default Data;
