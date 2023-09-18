import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const [isAddNewExpense, setIsAddNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  }

  const addExpenseHandler = () => {
    setIsAddNewExpense(prevState => !prevState);
  }

  return (
    <div className='new-expense'>

    {!isAddNewExpense ?  
      <button onClick={addExpenseHandler}>Add New Expense</button>
    :
      
      <ExpenseForm 
        onCancel={addExpenseHandler}
        onSaveExpenseData={saveExpenseDataHandler}/>
    }
    </div>

  )
}

export default NewExpense