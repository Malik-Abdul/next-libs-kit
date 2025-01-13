import { FC, Fragment } from "react";

const T01HeavyComponent: FC = () => {
  const heavyArray = Array.from({ length: 1000 }, (_, i) => i + 1);

  return (
    <Fragment>
      <h3>T01HeavyComponent</h3>
      <ul>
        {heavyArray.slice(0, 10).map((record) => (
          <li key={record}>{record}</li>
        ))}
      </ul>
      <p>... and {heavyArray.length - 10} more Items </p>
    </Fragment>
  );
};

export default T01HeavyComponent;
