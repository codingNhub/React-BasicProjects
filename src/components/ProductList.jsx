import { useState } from "react";
import ShoppingCartManagement from "./ShoppingCartManagement";

const ProductList = () => {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 59.99 },
    { id: 2, name: "Smartphone Stand", price: 15.99 },
    { id: 3, name: "USB-C Hub", price: 34.99 },
    { id: 4, name: "Portable Charger", price: 49.99 },
    { id: 5, name: "Bluetooth Speaker", price: 75.0 }
  ];

  const [cartItems, setCartItems] = useState([]);
  const handleItemCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button
              type="button"
              className="button-item btn btn-success"
              onClick={() => handleItemCart(item)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <ShoppingCartManagement cartItems={cartItems} />
    </div>
  );
};

export default ProductList;
