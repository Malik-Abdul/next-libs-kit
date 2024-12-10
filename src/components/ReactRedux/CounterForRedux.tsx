"use client";
import { FC, Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmmount,
  fetchInitialCount,
} from "@/store/slices/counterSlice";

import { RootState } from "@/store/store";

import { selectAllCounts } from "@/store/slices/counterSlice";
import type { AppDispatch } from "@/store/store";

const CounterForRedux: FC = () => {
  const [incrementAmmount, setIncrementAmmount] = useState(0);

  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector(selectAllCounts);
  const status = useSelector((state: RootState) => state.counter.status);

  useEffect(() => {
    dispatch(fetchInitialCount()); // Fetch initial count on component mount
  }, [dispatch]);

  const addValue = Number(incrementAmmount) || 0;
  const resetAll = () => {
    setIncrementAmmount(0);
    dispatch(reset());
  };
  return (
    <Fragment>
      <div>
        <strong>Component:</strong> CounterForRedux
      </div>
      <div>
        {/* <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementByAmmount(5))}>Add 5</button> */}
      </div>
      <section>
        <h2>{status === "loading" ? "Loading..." : count}</h2>

        <h2>{count}</h2>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>{" "}
          <button onClick={() => dispatch(decrement())}>-</button>{" "}
        </div>
        <div>
          <input
            type="text"
            value={incrementAmmount}
            onChange={(e) => setIncrementAmmount(Number(e.target.value) || 0)}
          />
        </div>
        <div>
          <button onClick={() => dispatch(incrementByAmmount(addValue))}>
            Add amount
          </button>
          <button onClick={resetAll}>Reset</button>
        </div>
      </section>
    </Fragment>
  );
};
export default CounterForRedux;
