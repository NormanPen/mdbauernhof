import ButtonDarkBlue from "../../components/Buttons/ButtonDarkBlue";

const MailError = () => {
  return (
    <div className="m-0 m-auto text-center pt-24">
      <h1>Fehler beim versenden der E-Mail</h1>
      <p>Bitte versuchen Sie es in ein paar Minuten erneut</p>
      <ButtonDarkBlue to="/kontakt">Erneut versuchen</ButtonDarkBlue>
    </div>
  );
};
export default MailError;
