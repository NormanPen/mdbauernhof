import ButtonDarkBlue from "../../components/Buttons/ButtonDarkBlue";

const MailError = () => {
  return (
    <div>
      <h1>Fehler beim versenden der E-Mail</h1>
      <p>Bitte versuchen Sie es in ein paar Minuten erneut</p>
      <ButtonDarkBlue to="/kontakt">Erneut versuchen</ButtonDarkBlue>
    </div>
  );
};
export default MailError;
