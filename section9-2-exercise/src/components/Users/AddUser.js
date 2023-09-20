import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const userNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid name and age (non-empty values)"
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter valid age (> 0)"
      });
      return;
    }

    props.onSaveData({
      id: Math.random().toString(),
      name: enteredName,
      age: +enteredAge,
    });

    setEnteredName('');
    setEnteredAge('');
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onCloseError={errorHandler}/> }
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>

          <label htmlFor='username' className={classes.label}>Username</label>
          <input
            type='text'
            value={enteredName}
            onChange={userNameChangeHandler}
          />

          <label htmlFor='age'>Age</label>
          <input
            type='number'
            value={enteredAge}
            onChange={ageChangeHandler}
          />

          <Button type='submit'>Add User</Button>

        </form>
      </Card>
    </div>
  )
}

export default AddUser