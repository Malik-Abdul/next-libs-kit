import React, { FC, Fragment, useState } from "react";

const MemoComponent: FC<{ value: number }> = React.memo(({ value }) => {
  console.log("Memo calling");
  return (
    <Fragment>
      <div>Memo Component: {value}</div>
    </Fragment>
  );
});
const T02ReactMemo = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <Fragment>
      <h3>Memo Parent component</h3>
      <button onClick={() => setCount((n) => n + 1)}>
        Memo independent: {count}
      </button>{" "}
      <button onClick={() => setValue((n) => n + 1)}>
        Memo dependent: {value}
      </button>
      <MemoComponent value={value} />
    </Fragment>
  );
};
export default T02ReactMemo;
