import { FC, Fragment, useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
}

const Categories: FC<{ getSelectedCategory: (id: number) => void }> = ({
  getSelectedCategory,
}) => {
  const [categoriesdata, setCategoriesdata] = useState<Category[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchCategories = () => {
      fetch("http://localhost:4000/categories")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setCategoriesdata(data);
        })
        .catch((error) => setError(error.message));
    };
    fetchCategories();
  }, []);

  console.log(categoriesdata);

  return (
    <Fragment>
      <h3>Categories</h3>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : categoriesdata ? (
        categoriesdata.map((item) => (
          <div
            style={{ cursor: "pointer" }}
            key={item.id}
            onClick={() => getSelectedCategory(item.id)}
          >
            {item.name}
          </div>
        ))
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Categories;
