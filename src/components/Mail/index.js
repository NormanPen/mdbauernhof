const Mail = () => {
  return (
    <form
      className="w-full px-5 font-SignikaNegative "
      method="post"
      action="send_email.php"
    >
      <fieldset className="lg:max-w-md">
        <div>
          <label className="block font-bold text-lg pb-2 " htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none border border-web-blue-light rounded-full px-5 h-12 focus:border-web-blue w-full bg-transparent"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div>
          <label className="block font-bold text-lg pb-2 mt-8" htmlFor="mail">
            Email-Adresse
          </label>
          <input
            className="appearance-none border border-web-blue-light rounded-full px-5 h-12 focus:border-web-blue w-full bg-transparent"
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label className="block font-bold text-lg pb-2 mt-8" htmlFor="phone">
            Telefon
          </label>
          <input
            className="appearance-none border border-web-blue-light rounded-full px-5 h-12 focus:border-web-blue w-full bg-transparent"
            type="text"
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <label
            className="block font-bold text-lg pb-2 mt-8"
            htmlFor="Nachricht"
          >
            Nachricht
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="appearance-none border border-web-blue-light rounded-3xl px-5 h-56 focus:border-web-blue w-full bg-transparent"
          ></textarea>
        </div>
        <div>
          <input
            className="px-6 py-3 mt-6 text-white rounded-full bg-web-blue-dark inline-block w-full lg:w-36"
            type="submit"
            value="Absenden"
          />
        </div>
      </fieldset>
    </form>
  );
};

export default Mail;
