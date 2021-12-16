import ButtonDarkBlue from "../../components/Buttons/ButtonDarkBlue";

const NotAvailable = () => {
  return (
    <div className="m-0 m-auto text-center pt-24">
      <h1>Diese Seite gibt es nicht</h1>
      <p>Bitte kehren Sie auf die Webseite zurück</p>
      <ButtonDarkBlue to="/">Home</ButtonDarkBlue>
    </div>
  );
};
export default NotAvailable;
