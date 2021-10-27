import ContactFooter from "../../components/ContactFooter";

const Home = () => {
  return (
    <div className="pt-24">
      <div className="relative h-48 bg-green-300">
        <div className="absolute top-14 left-6 bg-red-300">
          <h1>box1</h1>
          <p>asdk kjhash kjhjkashjh jklajsfjij jiljsdifj </p>
        </div>

        <div className="absolute top-0 left-6 bg-blue-300">
          <h1>box2</h1>
          <p>asdk kjhash kjhjkashjh jklajsfjij jiljsdifj </p>
        </div>
      </div>

      <div className="relative h-48 bg-blue-800">
        <div className="absolute top-14 left-6 bg-red-300">
          <h1>box1</h1>
          <p>asdk kjhash kjhjkashjh jklajsfjij jiljsdifj </p>
        </div>

        <div className="absolute top-0 left-6 bg-blue-300">
          <h1>box2</h1>
          <p>asdk kjhash kjhjkashjh jklajsfjij jiljsdifj </p>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
};

export default Home;
