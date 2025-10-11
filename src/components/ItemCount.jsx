import { useState, useEffect } from "react";

function ItemCount() {
  const [count, setCount] = useState(1);
  const [limit, setLimit] = useState(false);
  const maxValue = 10;

  useEffect(() => {
    console.log("🗂️ Consultando stock...");
  }, [limit]);

  function sumar() {
    if (count < maxValue) {
      setCount(count + 1);
    } else {
      setLimit(true);
    }
  }

  function restar() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="counter">
      <button onClick={restar}>-</button>
      <p>{count}</p>
      <button onClick={sumar}>+</button>
      {limit && <p className="limit-msg">Máximo alcanzado</p>}
    </div>
  );
}

export default ItemCount;