import { FC, Fragment } from "react";
import dynamic from "next/dynamic";
// import T01HeavyComponentWithPagination from "./utils/T01HeavyComponentWithPagination";

const HeavyComponent = dynamic(() => import("./utils/T01HeavyComponent"), {
  loading: () => <div>...still Loading</div>,
  ssr: false,
});

const MockT01LazyLoading: FC = () => {
  return (
    <Fragment>
      <h2>MockT01LazyLoading</h2>
      {/* <T01HeavyComponentWithPagination /> */}
      <HeavyComponent />
    </Fragment>
  );
};

export default MockT01LazyLoading;
