import { Link } from "react-router-dom";
import LinkTo from "../Buttons/LinkTo";

import bgcontactfooter from "../../images/bgContactFooter.png";
import mailicon from "../../images/mail.svg";

import logoBag from "../../images/logoBag.png";
import logoLandfrauen from "../../images/logoLandfrauen.png";
import logoDasBergische from "../../images/logoDasBergische.png";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="">
        <div
          className="mt-24 text-center bg-cover h-96 "
          style={{ backgroundImage: `url(${bgcontactfooter})` }}
        >
          <div className="flex justify-center pt-20">
            <img className="" src={mailicon} alt="Mail Symbol" />
          </div>

          <h3 className="pt-5 text-3xl font-Atma">Kontakt</h3>
          <p className="px-4 pt-4">
            Sie möchten mehr Informationen oder eine Buchung anfragen? Dann
            kontaktieren Sie uns gerne.
          </p>
          <LinkTo on="true" to="/kontakt">
            Jetzt Kontakt aufnehmen
          </LinkTo>
        </div>
      </div>
      <div className="bg-web-blue-light">
        <div className="grid-cols-3 pl-14 m-0 m-auto max-w-screen-2xl bg-web-blue-light font-Atma md:grid md:pr-28 lg:pr-40 xl:pr-0 2xl:pr-0">
          <div>
            <h3 className="pt-14 text-3xl">Erleben</h3>
            <ul className="text-2xl leading-10 text-white">
              <li className="pt-4">
                <Link to="/ueberuns">Über Uns</Link>
              </li>
              <li>
                <Link to="/programm">Programm</Link>
              </li>
              <li>
                <Link to="/tiere">Unsere Tiere</Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="pt-11 text-3xl">Kontakt</h3>
            <ul className="text-2xl leading-10 text-white">
              <li className="pt-4">
                <Link to="/kontakt">Kontakt</Link>
              </li>
              <li>
                <Link to="/impressum">Impressum</Link>
              </li>
            </ul>
            <div className="flex pt-9 footer-sozial">
              <a
                className="pr-8"
                href={
                  "https://www.facebook.com/Erlebniswelt-Bauernhof-401255466649319/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social-media-icon social-media-icon-facebook"></div>
              </a>

              <a
                href={"https://www.instagram.com/erlebniswelt_bauernhof/?hl=de"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social-media-icon social-media-icon-instagram"></div>
              </a>
            </div>
          </div>

          <div className="w-64 h-80 lg:w-96">
            <h3 className="pt-11 text-3xl">Unsere Partner</h3>
            <div className="pt-7">
              <ul className="flex flex-wrap">
                <li className="pr-4 pb-4">
                  <a
                    href="https://www.landfrauenservice-rheinland.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logoLandfrauen} alt="logobag" />
                  </a>
                </li>
                <li className="pr-4">
                  <a
                    href="https://www.dasbergische.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logoDasBergische} alt="logobag" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://baglob.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logoBag} alt="logobag" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
