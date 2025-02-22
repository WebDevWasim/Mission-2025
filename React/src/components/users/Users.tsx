import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserContext from "../../contexts/userContext";
import { fetchUsers } from "../../store/user/UserActions";
import axios from "axios";
import "./Users.css";

const UserData = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, name, username, email }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Users = () => {
  // TODO: With Context API
  // const {
  //   userData: { loading, error, users },
  //   userLoading,
  //   userSuccess,
  //   userError,
  // } = useContext(UserContext);

  // useEffect(() => {
  //   userLoading();
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       userSuccess(response.data);
  //     })
  //     .catch((error) => {
  //       userError(error.message);
  //     });
  // }, []);

  // TODO: With REDUX
  const { loading, error, users } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <p>{error}</p>
      ) : users && users.length > 0 ? (
        <UserData users={users} />
      ) : (
        <h3>No Users found</h3>
      )}
    </>
  );
};

export default Users;
