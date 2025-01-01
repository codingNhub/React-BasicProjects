import "./App.css";

import Counter from "./components/Counter";
import Theme from "./components/theme";
import ProductList from "./components/ProductList";
import AddToCart from "./components/AddToCart";
import ControlledInput from "./components/ControlledInput";
import MoviesBooking from "./components/MoviesBooking";
import { useState } from "react";
function App() {
  const labels = ["increment", "decrement", "resat"];
  const themeList = ["Light", "Dark"];

  const [shoppingCart, setShoppingCart] = useState(["Tshirt", "Bag", "Pants"]);
  const AddtoCart = (item) => {
    setShoppingCart([...shoppingCart, item]);
  };
  const handleDelete = (itemName) => {
    setShoppingCart(shoppingCart.filter((items) => items != itemName));
  };
  return (
    <>
      <Counter labels={labels}></Counter>
      <Theme themeList={themeList}></Theme>
      <AddToCart
        shoppingCart={shoppingCart}
        AddtoCart={AddtoCart}
        onDeleteClick={handleDelete}
      ></AddToCart>
      <ControlledInput></ControlledInput>
      <ProductList></ProductList>
      <MoviesBooking></MoviesBooking>
    </>
  );
}

export default App;
