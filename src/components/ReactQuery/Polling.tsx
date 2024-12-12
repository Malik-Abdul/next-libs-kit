import React, { useState, useEffect } from "react";
interface Products {
  id: number;
  title: string;
  price: number;
}
const Polling = () => {
  const [data, setData] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:3600/streaming/polling?limit=${limit}"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result.items);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch
    const interval = setInterval(() => {
      fetchData();
    }, 5000); // Poll every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Polled Data:</h2>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {data
              ? data.map((product) => (
                  <li key={product.id}>
                    {product.title} - ${product.price}
                  </li>
                ))
              : ""}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Polling;
