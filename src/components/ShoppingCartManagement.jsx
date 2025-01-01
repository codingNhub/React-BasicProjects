const ShoppingCartManagement = ({ cartItems = [] }) => {
  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2); // Format to two decimal points
  };

  return (
    <div>
      <h3>Total Items: {calculateTotalItems()}</h3>
      <h3>Total Price: ${calculateTotalPrice()}</h3>
    </div>
  );
};

export default ShoppingCartManagement;
