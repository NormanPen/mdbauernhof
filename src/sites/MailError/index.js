import LinkTo from "../../components/Buttons/LinkTo";
const MailError = () => {
  return (
    <div className="m-0 m-auto text-center pt-24">
      <h1>Fehler beim versenden der E-Mail</h1>
      <p>Bitte versuchen Sie es in ein paar Minuten erneut</p>
      <LinkTo on={true} to="/kontakt">
        Erneut versuchen
      </LinkTo>
    </div>
  );
};
export default MailError;
