import { Fragment, useEffect, useState } from "react";

interface Products {
  id: number;
  title: string;
  price: number;
}

const LongPolling = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:3600/streaming/long-polling`
      );
      const data = await response.json();
      setProducts(data.items);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true; // To prevent setting state if component unmounts
    const longPoll = async () => {
      while (isMounted) {
        await fetchProducts(); // Fetch data
      }
    };

    longPoll(); // Start long polling when the component mounts

    return () => {
      isMounted = false; // Stop long polling when the component unmounts
    };
  }, []);

  return (
    <Fragment>
      <h3>Long Polling</h3>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.title} - ${product.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Fragment>
  );
};

export default LongPolling;
