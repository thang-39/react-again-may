import React, { useState } from 'react'
import classes from './Form.module.css'

const Form = (props) => {

  const [enteredCurrentSaving, setEnteredCurrentSaving] = useState('');
  const [enteredYearlySaving, setEnteredYearlySaving] = useState('');
  const [enteredExpectedInterest, setEnteredExpectedInterest] = useState('');
  const [enteredInvestmentDuration, setEnteredInvestmentDuration] = useState('');

  const currentSavingChangeHandler = (event) => {
    setEnteredCurrentSaving(event.target.value)
  }

  const yearlySavingChangeHandler = (event) => {
    setEnteredYearlySaving(event.target.value)
  }

  const expectedInterestChangeHandler = (event) => {
    setEnteredExpectedInterest(event.target.value)
  }

  const investMentDurationChangeHandler = (event) => {
    setEnteredInvestmentDuration(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const investmentData = {
        'current-savings': enteredCurrentSaving,
        'yearly-contribution': enteredYearlySaving,
        'expected-return': enteredExpectedInterest,
        'duration': enteredInvestmentDuration,
    }
    props.onReceiveInvestmentData(investmentData);

    setEnteredCurrentSaving('');
    setEnteredYearlySaving('');
    setEnteredExpectedInterest('');
    setEnteredInvestmentDuration('');
  }

  const resetHandler = (event) => {
    event.preventDefault();
    setEnteredCurrentSaving('');
    setEnteredYearlySaving('');
    setEnteredExpectedInterest('');
    setEnteredInvestmentDuration('');
  }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input 
              type="number"
              id="current-savings"
              value={enteredCurrentSaving}
              onChange={currentSavingChangeHandler}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input 
              type="number" 
              id="yearly-contribution" 
              value={enteredYearlySaving}
              onChange={yearlySavingChangeHandler}
            />
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input 
              type="number" 
              id="expected-return" 
              value={enteredExpectedInterest}
              onChange={expectedInterestChangeHandler}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input 
              type="number" 
              id="duration"
              value={enteredInvestmentDuration}
              onChange={investMentDurationChangeHandler}
            />
          </p>
        </div>
        <p className={classes.actions}>
          <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
  )
}

export default Form