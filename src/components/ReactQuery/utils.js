const jsxCodeEx1 = `
"use client";
import React, { useState, useEffect } from "react";
const Polling = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:3600/streaming/polling?limit=20"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
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
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default Polling;
`;
const jsxCodeEx2 = `
export const getLongPollingProducts: RequestHandler = async (req, res) => {
  try {
    // Simulate waiting for new data (long polling behavior)
    const checkForUpdates = async () => {
      const results: Product[] = await db.select().from(products).limit(10);

      // Simulate new data creation
      const shouldUpdate = Math.random() > 0.5; // Simulate a condition for new updates
      if (shouldUpdate) {
        const randomProductIndex = Math.floor(Math.random() * results.length);
        const randomProduct = results[randomProductIndex];
        randomProduct.price ? (randomProduct.price += 1) : null; // Example: Modify the price of a product
        return results; // Return updated data
      }

      return null; // No updates
    };

    // Use a timeout loop to wait for new data or timeout after 30 seconds
    const pollTimeout = 30000; // 30 seconds
    const interval = 5000; // Check every 5 seconds
    let elapsedTime = 0;

    const poll = async () => {
      const updatedData = await checkForUpdates();
      if (updatedData || elapsedTime >= pollTimeout) {
        res.json({
          items: updatedData || [],
        });
      } else {
        elapsedTime += interval;
        setTimeout(poll, interval);
      }
    };

    poll();
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
`;
const jsxCodeEx3 = `
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
        \`http://localhost:3600/streaming/long-polling\`
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
          <div>Loading...</div>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.title} - \${product.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Fragment>
  );
};

export default LongPolling;
`;

const UseQueryHookJSX = `
import { FC, Fragment } from "react";
import { useQuery } from "react-query";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

const fetchUsers = async () => {
  const response = await axios.get<User[]>("http://localhost:4000/users");
  return response.data;
};

const UseQueryHook: FC = () => {
  const { isLoading, data, isError, error } = useQuery(
    "get-json-users",
    fetchUsers
  );
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    const errorMessage = (error as Error).message;
    return <h3>{errorMessage}</h3>;
  }
  return (
    <Fragment>
      <h3>Use Query Hook</h3>
      {data ? data.map((user) => <div key={user.id}>{user.name}</div>) : ""}
    </Fragment>
  );
};
export default UseQueryHook;

`;

const cacheTime = `
 const { isLoading, data, isError, error, isFetching } = useQuery(
    "get-json-users",
    fetchUsers,
    { cacheTime: 5000 }
  );
`;

const staleTime = `
 const { isLoading, data, isError, error, isFetching } = useQuery(
    "get-json-users",
    fetchUsers,
    { staleTime: 30000 }
  );
`;

export {
  jsxCodeEx1,
  jsxCodeEx2,
  jsxCodeEx3,
  UseQueryHookJSX,
  cacheTime,
  staleTime,
};
