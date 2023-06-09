//use StateHook to implements ClickEvent
import { useState, usrState } from "react";

const StateHook = () => {
  const [name, setName] = useState("Dave");

  const handleNameChange = () => {
    const names = ["Shirley", "Bob", "Harry"];
    const i = Math.floor(Math.random() * 3);
    setName(names[i]);
    alert(name);
  };

  return (
    <div>
      <button onClick={(event) => handleNameChange()}>Click it </button>
    </div>
  );
};

export default StateHook;
