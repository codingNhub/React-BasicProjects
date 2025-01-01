import { useState } from "react";

const Counter = ({ labels }) => {
  const [count, setCount] = useState(0);

  const handleAction = (action) => {
    if (action === "increment") {
      setCount(count + 1);
    } else if (action === "decrement") {
      setCount(count - 1);
    } else if (action === "reset") {
      setCount("");
    }
  };

  return (
    <>
      <div> Current Counter is: {count}</div>

      {labels.map((label) => (
        <button
          key={label}
          type="button"
          className={`btn ${
            label === "Add"
              ? "btn-danger"
              : label === "Dark"
              ? "btn-dark"
              : label === "Resat"
              ? "btn-primary"
              : "btn-primary"
          }`}
          onClick={() => handleAction(label)}
        >
          {label.charAt(0).toUpperCase() + label.slice(1)}{" "}
          {/* Capitalize label */}
        </button>
      ))}
    </>
  );
};

export default Counter;
