import HeaderContact from "../../components/HeaderContact";
import Mail from "../../components/Mail";
import Adress from "../../components/Adress";

import pens from "../../images/pens.png";
import bgMobileBlue from "../../images/bgMobileBlue.png";
import bgDeskOcker from "../../images/bgDeskOcker.svg";
import mailIcon from "../../images/mail.svg";

const Contact = () => {
  return (
    <div className="">
      <HeaderContact
        heading="Kontaktieren Sie uns"
        desktopBgImgSrc={bgDeskOcker}
        mobileBgImgSrc={bgMobileBlue}
        imgSrc={mailIcon}
        imgAlt="Mail"
      >
        Senden Sie uns gerne Ihre Anfrage. Wir freuen uns von Ihnen zu hören. 
        Nutzen Sie das Kontaktformular oder setzen Sie sich unter 02207/912160,
        0157/32589312 oder per E-Mail mit uns in Verbindung.
      </HeaderContact>

      <div className="relative z-20 pt-24">
        <div className="grid lg:grid-cols-2 ">
          <div className="">
            <Mail />
          </div>
          <div className="lg:order-first mt-20 lg:justify-self-end lg:mt-0 lg:mr-72">
            <img className="px-4 mb-7" src={pens} alt="Stifte" />
            <Adress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
