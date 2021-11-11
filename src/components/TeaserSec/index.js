import { SectionMain } from "../SectionMain";

import mamaPapa from "../../images/mama_papa.png";
import mamaKinder from "../../images/mama_kinder.png";

export const TeaserSec = (props) => {
  return (
    <div className=" flex max-w-screen-md m-0 m-auto pt-52">
      <div className="">
        <SectionMain
          imgSrc={mamaPapa}
          imgAlt="asd"
          heading="asdasdasd"
          btnText="asdasdasd"
        >
          asdasDADSa
        </SectionMain>
      </div>

      <div className="">
        <SectionMain
          imgSrc={mamaKinder}
          imgAlt="asd"
          heading="asdasdasd"
          btnText="asdasdasd"
        >
          asdasDADSa
        </SectionMain>
      </div>
    </div>
  );
};
