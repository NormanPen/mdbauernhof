import LinkTo from "../../components/Buttons/LinkTo";

const NotAvailable = () => {
  return (
    <div className="m-0 m-auto text-center pt-24">
      <h1>Diese Seite gibt es nicht</h1>
      <p>Bitte kehren Sie auf die Webseite zurück</p>
      <LinkTo on={true} to="/">
        Home
      </LinkTo>
    </div>
  );
};
export default NotAvailable;
