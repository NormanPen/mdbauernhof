import bgcontactfooter from "../../images/bgContactFooter.png";
import mailicon from "../../images/mail.svg";

const picStyle = {
  width: "38.03px",
  height: "51px",
};

const ContactFooter = (props) => {
  return (
    <div className={props.aaa}>
      <div
        className="mt-24 text-center bg-cover h-96 "
        style={{ backgroundImage: `url(${bgcontactfooter})` }}
      >
        <div className="flex justify-center pt-20">
          <img style={picStyle} className="" src={mailicon} alt="Mail Symbol" />
        </div>

        <h3 className="pt-5 text-3xl font-Atma">Kontakt</h3>
        <p className="px-4 pt-4">
          Sie möchten mehr Informationen oder eine Buchung anfragen? Dann
          kontaktieren Sie uns gerne.
        </p>
        <button className="px-6 py-3 mt-6 text-white rounded-full bg-web-blue-dark">
          Jetzt Kontakt aufnehmen
        </button>
      </div>
    </div>
  );
};

export default ContactFooter;
