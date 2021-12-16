const adressItems = {
  email: "mdbauernhof@aol.de",
  tel: "02207 / 91 21 60",
  mobile: "0157 / 32 58 93 12",
  name: "Margot & Hans Döpper",
  street: "Zur Linde 38-41",
  city: "51515 Kürten",
};

const Adress = (props) => {
  return (
    <div className="font-SignikaNegative text-lg w-full px-5">
      <adress>
        <h3>Email-Adresse:</h3>

        <a className="text-web-grau" href="mailto:mdbauernhofœaol.com">
          {adressItems.email}
        </a>

        <h3 className="mt-4">Telefon:</h3>
        <a className="text-web-grau" href="tel:+4922078160">
          {adressItems.tel}
        </a>

        <h3 className="mt-4">Handy:</h3>
        <a className="text-web-grau" href="tel:+49157325893">
          {adressItems.mobile}
        </a>

        <h3 className="mt-4">Adresse:</h3>
        <a
          className="text-web-grau"
          href="https://www.google.com/maps/place/Erlebniswelt+Bauernhof+-+Margot+%26+Hans+D%C3%B6pper/@50.9964648,7.252968,17z/data=!3m1!4b1!4m5!3m4!1s0x47bed11e1cf465af:0x7b68dfd58f6219c2!8m2!3d50.9964627!4d7.2551358"
          target="blank"
        >
          {adressItems.name}
          <br />
          {adressItems.street}
          <br />
          {adressItems.city}
        </a>
      </adress>
    </div>
  );
};
export default Adress;
