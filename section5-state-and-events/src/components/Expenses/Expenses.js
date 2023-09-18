import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2019');
  
  const filteredYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);
  


  return (
    <div>
      <li>
      <Card className="expenses">
        <ExpensesFilter selectedYear={filteredYear} onFilteredYear={filteredYearHandler}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
      </li>
    </div>
  );
}

export default Expenses;
