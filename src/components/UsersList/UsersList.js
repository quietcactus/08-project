import React from "react";
import Container from "../UI/Container";
import User from "./User";

const UsersList = (props) => {
  return (
    <Container className={`user-list ${props.users.length > 0 ? "show" : ""}`}>
      {props.users.map(user => (
        <User 
          key={user.key}
          username={user.username}
          age={user.age}
        />
      ))}
    </Container>
  )
}

export default UsersList;