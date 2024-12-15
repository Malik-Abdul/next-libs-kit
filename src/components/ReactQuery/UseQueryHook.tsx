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
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "get-json-users",
    fetchUsers,
    {
      // cacheTime: 5000,
      // staleTime: 30000,
      // refetchOnMount: false,
      // refetchOnMount: "always",
      refetchOnWindowFocus: true, // default value
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

      {data ? data.map((user) => <div key={user.id}>{user.name}</div>) : ""}
    </Fragment>
  );
};
export default UseQueryHook;
