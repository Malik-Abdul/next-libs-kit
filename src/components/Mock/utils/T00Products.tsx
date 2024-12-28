import { FC, Fragment, useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  categoryId: number;
}

const Products: FC<{ selectedCategory?: number }> = ({ selectedCategory }) => {
  const [productsdata, setProductsdata] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchCategories = () => {
      setIsLoading(true);
      fetch("http://localhost:4000/products")
        .then((response) => {
          if (!response.ok) {
            setIsLoading(false);
            throw new Error(`HTTP Error ${response.status}`);
          }
          setIsLoading(false);
          return response.json();
        })
        .then((data) => {
          console.log("selectedCategory: ", selectedCategory);
          /* eslint-disable @typescript-eslint/no-unused-expressions */
          const sortedData = data.sort((a: Product, b: Product) => {
            if (
              a.categoryId === selectedCategory &&
              b.categoryId !== selectedCategory
            ) {
              return -1;
            } else if (
              a.categoryId !== selectedCategory &&
              b.categoryId === selectedCategory
            ) {
              return 1;
            } else {
              return a.categoryId - b.categoryId;
            }
          });
          /* eslint-enable @typescript-eslint/no-unused-expressions */
          setIsLoading(false);
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
