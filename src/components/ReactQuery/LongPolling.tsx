import { Fragment, useEffect, useState } from "react";
import ErrorComponent from "./ErrorComponent";

interface Products {
  id: number;
  title: string;
  price: number;
}

const LongPolling = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:3600/streaming/long-polling`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(data.items);
      setError(null); // Clear any existing error
    } catch (err) {
      console.log("Error fetching products:", err);
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
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
          <div>Loading...</div>
        ) : error ? (
          <ErrorComponent message={error} />
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
