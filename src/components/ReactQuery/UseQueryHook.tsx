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
  const onSuccess = (data: User[]) => {
    console.log("Perform some side effect after data fetching", data);
  };
  const onError = (error: Error) => {
    console.log(
      "Perform some side effect after encountering error",
      error.message
    );
  };
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "get-json-users",
    fetchUsers,
    {
      // cacheTime: 5000,
      // staleTime: 30000,
      // refetchOnMount: false,
      // refetchOnMount: "always",
      // refetchOnWindowFocus: true, // default value
      // refetchInterval: 3000,
      // refetchIntervalInBackground: true,
      // enabled: false,
      onSuccess: onSuccess,
      onError: onError,
    }
  );
  console.log(isLoading, isFetching);
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
      <button onClick={() => refetch()}>Fetch Data</button>

      {data ? data.map((user) => <div key={user.id}>{user.name}</div>) : ""}
    </Fragment>
  );
};
export default UseQueryHook;
