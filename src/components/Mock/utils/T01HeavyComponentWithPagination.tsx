import { FC, Fragment, useEffect, useState } from "react";

interface Items {
  item: number;
}
const T01HeavyComponentWithPagination: FC = () => {
  const [start, setStart] = useState(0);
  const [offset] = useState(10);
  const [records, setRecords] = useState<number[]>([]);
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(true);
  const [total, setTotal] = useState(0);
  const fetchNext = () => {
    setStart((prev) => prev + offset);
  };
  const fetchPrev = () => {
    setStart((prev) => prev - offset);
  };
  useEffect(() => {
    const heavyArray = Array.from({ length: 1000 }, (_, i) => i + 1);
    setTotal(heavyArray.length);
    if (start + offset <= heavyArray.length) {
      const sliceItems = heavyArray.slice(start, start + offset);
      setRecords(sliceItems);
      setDisableNext(false);
    } else {
      setDisableNext(true);
    }
    if (start > 0) {
      setDisablePrev(false);
    } else {
      setDisablePrev(true);
    }
  }, [start]);

  return (
    <Fragment>
      <h3>T01HeavyComponent</h3>
      <ul>
        {records.map((record) => (
          <li key={record}>{record}</li>
        ))}
      </ul>
      <p>
        <button disabled={disablePrev} onClick={fetchPrev}>
          Prev
        </button>
        ... and {total - 10} more Items{" "}
        <button disabled={disableNext} onClick={fetchNext}>
          Next
        </button>
      </p>
    </Fragment>
  );
};

export default T01HeavyComponentWithPagination;
