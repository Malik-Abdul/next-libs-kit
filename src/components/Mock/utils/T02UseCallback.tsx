import React, { useState, useCallback, FC } from "react";

const Button: FC<{ handleClick: () => void; label: string }> = React.memo(
  ({ handleClick, label }) => {
    console.log(`${label} button rendered`);
    return <button onClick={handleClick}>{label}</button>;
  }
);

const T02UseCallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <Button handleClick={increment} label="Increment" />
      <p>Count: {count}</p>
    </div>
  );
};

export default T02UseCallback;
