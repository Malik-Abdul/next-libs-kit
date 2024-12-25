import { Fragment, useState } from "react";
import Categories from "./T00Categories";
import Products from "./T00Products";

const Mock00APIIntegration = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const getSelectedCategory = (id: number) => {
    setSelectedCategory(id);
  };
  return (
    <Fragment>
      <h2>Mock00APIIntegration</h2>
      <Categories getSelectedCategory={getSelectedCategory} />
      <Products selectedCategory={selectedCategory} />
    </Fragment>
  );
};

export default Mock00APIIntegration;
