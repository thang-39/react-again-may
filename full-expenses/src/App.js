import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React , {useState} from 'react';

const DUMMY_EXPENSES = [
  {id: 'e1', title: 'Toy', amount: 294.67, date: new Date(2021,2,28)},
  {id: 'e2', title: 'New TV', amount: 294.67, date: new Date(2020,2,28)},
  {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2019,2,28)},
  {id: 'e4', title: 'New Desk', amount: 294.67, date: new Date(2019,5,12)},
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses])
    setExpenses( (prevExpenses) => {
      return [expense, ...prevExpenses];
    });

  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
     
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
