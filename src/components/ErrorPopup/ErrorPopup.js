import React, {useState} from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import Container from "../UI/Container";

const ErrorPopup = (props) => {

  const [hideShow, setHideShow] = useState(false);

  const closeErrorHandler = () => {
    setHideShow(!hideShow);
    props.removeErrors();
  }

  return (
    <Error className={!hideShow ? "show" : ""} onClick={closeErrorHandler}>
      <Container>
        <div className="error-top">
          <h3>Invalid Input</h3>
        </div>
        <div className="error-text-area">
          <p>{props.errorText}</p>
          <Button type="button" >Okay</Button>
        </div>
      </Container>
    </Error>
  )
};

export default ErrorPopup;

const Error = styled.div`
  background-color: rgba(43, 58, 57,.25);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  margin-top: 100px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100vh;
  display: none;

  ${Container} {
    max-width: 800px;
    width: 100%;
    height: 300px;
  }

  &.show {
    display: flex;
  }

  & .error-top {
    background-color: #9CAAA9;
  }

  & h3 {
    color: #fff;
    font-weight: 700;
  }
`