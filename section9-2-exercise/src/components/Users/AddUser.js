import React, { useState, useRef } from 'react';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
const AddUser = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredName, setEnteredName] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  // const userNameChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // }

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // }

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid name and age (non-empty values)"
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter valid age (> 0)"
      });
      return;
    }

    props.onSaveData({
      id: Math.random().toString(),
      name: enteredUserName,
      age: +enteredUserAge,
    });

    // setEnteredName('');
    // setEnteredAge('');

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onCloseError={errorHandler}/> }
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>

          <label htmlFor='username' className={classes.label}>Username</label>
          <input
            id='username'
            type='text'
            // value={enteredName}
            // onChange={userNameChangeHandler}
            ref={nameInputRef}
          />

          <label htmlFor='age'>Age</label>
          <input
            id='age'
            type='number'
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />

          <Button type='submit'>Add User</Button>

        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser