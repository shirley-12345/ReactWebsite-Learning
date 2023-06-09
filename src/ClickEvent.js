//generate a alert for click function
const ClickEvent = () => {
  const name = ["Shirley", "Bob", "Dave"];

  const handleNameChange = () => {
    const i = Math.floor(Math.random() * 3);
    alert(name[i]);
  };

  return (
    <div>
      <button onClick={(event) => handleNameChange()}>Click it </button>
    </div>
  );
};

export default ClickEvent;
