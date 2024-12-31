import { FC, Fragment, useMemo, useState } from "react";

const ExpensiveCalculations: FC<{ number: number }> = ({ number }) => {
  const compute = (n: number) => {
    return n * 2;
  };
  const result = useMemo(() => compute(number), [number]);
  return (
    <Fragment>
      <div>Expensive Calculation: {result}</div>
    </Fragment>
  );
};

const T02UseMemo = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <Fragment>
      <h3>T02UseMemo</h3>
      <button onClick={() => setValue((n) => n + 1)}>
        useMemo dependendent: {value}
      </button>{" "}
      <button onClick={() => setCount((n) => n + 1)}>
        useMemo independendent: {count}
      </button>
      <ExpensiveCalculations number={value} />
    </Fragment>
  );
};
export default T02UseMemo;
