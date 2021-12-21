import React, { useState} from 'react';
import Container from '../UI/Container';
import Button from '../UI/Button';
import styled from 'styled-components'

const UserForm = (props) => {

  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const setUsernameHandler = (event) => {
    setUsername(event.target.value);
  }

  const setAgeHandler = (event) => {
    setAge(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.addUser(event.target.username.value, event.target.age.value);

    setUsername('');
    setAge('');
  }


  return (
    <Container>
      <Form onSubmit={submitHandler} className='user-form'>
        <FormRow>
          <Label htmlFor="username">Username</Label>
          <Input onChange={setUsernameHandler} value={username} id="username" type="text" />
        </FormRow>
        <FormRow>
          <Label htmlFor="age">Age (Years)</Label>
          <Input onChange={setAgeHandler} value={age} id="age" type="number" />
        </FormRow>
        <Button type="submit">
          Add User
        </Button>
      </Form>
    </Container>
  )
}

export default UserForm;

const Form = styled.form`
  text-align: left;
`

const FormRow = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  font-weight: 700;
  color: #2B3A39;
  margin-bottom: 5px;
  display: block;
  
`

const Input = styled.input`
  width: 100%;
  border: 2px solid #9CAAA9;
  background-color: #F9F9F9;
  height: 35px;
  padding: 0 15px;
`