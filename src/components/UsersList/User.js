import styled from "styled-components";

const User = (props) => {
  return (
    <SingleUser>
      <p>{`${props.username} (${props.age} years old)`}</p>
    </SingleUser>
  )
}

export default User;

const SingleUser = styled.div`
  border: 2px solid #9CAAA9;
  margin-bottom: 10px;
  padding: 5px;

  &:only-child {
    margin-bottom: 0;
  }

  & p {
    margin: 0;
    font-weight: 500;
  }
`