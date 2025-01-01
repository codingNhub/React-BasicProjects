const MovieCalculation = ({ movieList = [] }) => {
  const calculateTotalItems = () => {
    return movieList.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalPrice = () => {
    return movieList
      .reduce((total, item) => {
        if (isNaN(item.price) || isNaN(item.quantity)) {
          console.log(`Invalid values: ${item.price}, ${item.quantity}`);
        }
        return total + item.price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <>
      <div>
        <h3>Total Items: {calculateTotalItems()}</h3>
        <h3>Total Price: ${calculateTotalPrice()}</h3>
      </div>
    </>
  );
};
export default MovieCalculation;
