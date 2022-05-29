import React from "react";
import Catagories from "./Categories.js";

const ListItems = ({ setCatagory, menu, setMenu }) => {
  return (
    <>
      {
        menu && <div className="list_container">
          <ul>
            {Catagories.map((cVal) => {
              return (
                <li key={cVal} onClick={() => setMenu(false)}>
                  <a onClick={() => setCatagory(cVal)}>
                    {cVal}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      }
    </>
  );
};

export default ListItems;
