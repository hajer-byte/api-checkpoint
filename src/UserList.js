import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Alert } from "react-bootstrap";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setListOfUser(response.data));
  }, []);
  return (
    <>
      <h1>this is the list of users </h1>
      <Alert variant="primary container">
        <p>{JSON.stringify([{ listOfUser }])}</p>
      </Alert>
    </>
  );
};

export default UserList;
