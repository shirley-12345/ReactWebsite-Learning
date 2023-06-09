//generate differernt name for each loading
const RandomName = () => {
  const hello = "Hello World";

  const generatename = () => {
    const name = ["Shirley", "Bob", "Dave"];
    const i = Math.floor(Math.random() * 3);
    return name[i];
  };

  return (
    <div className="Body">
      <p>Hello {generatename()}</p>
    </div>
  );
};
//

export default RandomName;
