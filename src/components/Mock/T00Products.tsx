import { FC, Fragment, useEffect, useState } from "react";

interface Category {
  id: number;
  title: string;
  categoryId: number;
}

const Products: FC<{ selectedCategory?: number }> = ({ selectedCategory }) => {
  const [productsdata, setProductsdata] = useState<Category[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchCategories = () => {
      fetch("http://localhost:4000/products")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("selectedCategory: ", selectedCategory);
          const sortedData = data.sort((a: Category, b: Category) => {
            if (
              a.categoryId == selectedCategory &&
              b.categoryId != selectedCategory
            ) {
              return -1;
            } else if (
              a.categoryId != selectedCategory &&
              b.categoryId == selectedCategory
            ) {
              return 1;
            } else {
              a.categoryId - b.categoryId;
            }
          });
          setProductsdata(sortedData);
        })
        .catch((error) => setError(error.message));
    };
    fetchCategories();
  }, [selectedCategory]);

  // console.log("Sorted productsdata: ", productsdata);
  return (
    <Fragment>
      <h3>Products</h3>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : productsdata ? (
        productsdata.map((item) => <div key={item.id}>{item.title}</div>)
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Products;
