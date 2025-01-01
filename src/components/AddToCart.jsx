import { useState } from "react";

const AddToCart = ({ shoppingCart, AddtoCart, onDeleteClick }) => {
  const [AddCart, setAddCart] = useState("");
  const handleAddItem = (event) => {
    setAddCart(event.target.value);
    console.log(event.target.value);
  };
  const handleAddCart = () => {
    console.log(AddCart);
    AddtoCart(AddCart);
  };
  return (
    <>
      <div className="row row-item list-group-item">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Items"
            id=""
            onChange={handleAddItem}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="button-item btn btn-success"
            onClick={handleAddCart}
          >
            Add
          </button>
        </div>
      </div>

      {shoppingCart.map((items, index) => (
        <li key={index} className="list-group-item">
          {items}
          <button
            type="button"
            className="button-item btn btn-danger"
            onClick={() => {
              onDeleteClick(items);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};
export default AddToCart;
