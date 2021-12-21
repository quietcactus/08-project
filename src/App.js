import React, { useState } from 'react'
import './App.css';
import UserForm from './components/UserForm/UserForm'
import UsersList from './components/UsersList/UsersList';
import ErrorPopup from './components/ErrorPopup/ErrorPopup';

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [errors, setErrors]  = useState({
    errorAge: false,
    errorBlank: false
  });

  const setErrorBlank = () => {
    setErrors(prevErrors => {
      return {
        ...prevErrors,
        errorBlank: !errors.errorBlank
      }
    });
  }

  const setErrorAge = () => {
    setErrors(prevErrors => {
      return {
        ...prevErrors,
        errorAge: !errors.errorAge
      }
    });
  }

  const onUserFormSubmitHandler = (username, age) => {

    // If username or age is blank
    if(username.length === 0 || age.length === 0) {
      setErrorAge()
      return;
    }

    // If age is less than 0
    if(age < 0) {
      setErrorAge();
      return;
    }

    setAllUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift(
        {
          key: Math.random().toString(),
          username: username,
          age: age
        }
      )
      return updatedUsers;
    });

    // clear user and age on successful submit
    // event.target.username.value = "";
    // event.target.age.value = "";
  }

  return (
    <div className="App">
      <UserForm addUser={onUserFormSubmitHandler}/>
      <UsersList users={allUsers}/>
      {errors.errorBlank === true && <ErrorPopup errorType="blank" removeErrors={setErrorBlank} errorText="Please enter a valid name and age (non-empty values)" />}      
      {errors.errorAge === true && <ErrorPopup errorType="age" removeErrors={setErrorAge} errorText="Please enter a valid age (> 0)." />}
    </div>
  );
}

export default App;
