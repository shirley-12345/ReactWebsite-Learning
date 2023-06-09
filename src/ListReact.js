import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";

const ListReact = () => {
  const headerstyle = {
    backgroundColor: "Blue",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Apple",
    },
    {
      id: 2,
      checked: false,
      item: "Banana",
    },
    {
      id: 3,
      checked: false,
      item: "Peach",
    },
  ]);

  const handleCheck = (id) => {
    //for the item in items
    //if the id==item.id  =>  oppsite of item id
    //else,just copy the item
    //which saved in listItems
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    //save in the sah
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const deleteItems = (id) => {
    //for the item in items
    //save the item which item'id is not equal to pass id
    //save the item in listitems

    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shopinglist", JSON.stringify(listItems));
  };

  const addItems = () => {};

  return (
    <main>
      <ol>
        <li>
          <i>Groceries List</i>

          <IoIosAddCircleOutline
            className="addicon"
            onClick={() => addItems()}
            role="button"
            tabIndex="0"
            alignItems="right"
          />
        </li>
      </ol>

      {items.length ? (
        <ul>
          {items.map((item) => (
            //class name=items
            <li className="item" key={item.id}>
              {/* check box */}
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                // add a line through the textc if the items==checked
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              {/* the trash button is tabable */}
              <FaTrashAlt
                onClick={() => deleteItems(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p sysle={{ maginTop: "2rem" }}>Your list is empty</p>
      )}
      <footer style={headerstyle} position="fixed">
        Copyright©2023
      </footer>
    </main>
  );
};

export default ListReact;
