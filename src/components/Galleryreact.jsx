import React, { useState } from "react";
import Menu from "./Menu";
import "bootstrap/dist/css/bootstrap.min.css";

const Galleryreact = () => {
  const [item, setitem] = useState(Menu);
  const filterItem=(myitem)=>{
          const updateditem=Menu.filter((curele)=>{
                return curele.category === myitem;

          });
          setitem(updateditem);
  }
  return (
    <>
      <h1 className="mt-3 text-center main-heading">
        Order Your Favourite Dish
      </h1>
      <hr />

      <div className="menu-tab d-flex">
        <button className="btn btn-warning" onClick={() => filterItem('breakfast')}>Breakfast</button>
        <button className="btn btn-warning" onClick={() => filterItem('lunch')}>Lunch</button>
        <button className="btn btn-warning" onClick={() => filterItem('evening')}>Evening</button>
        <button className="btn btn-warning" onClick={() => filterItem('dinner')}>Dinner</button>
        <button className="btn btn-warning" onClick={() => setitem(Menu)}>All</button>
      </div>

      {
        item.map((elem) => {
          const { id, name, image, description, price } = elem;
          return (
            <>
              <div className="card" style={{ width: "18rem", display: "flex" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{price}</p>
                  <a href="#" className="btn btn-primary">Order Now</a>
                </div>
              </div>
            </>
          )
        })
      }




    </>
  )
};

export default Galleryreact;
