import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2019');
  
  const filteredYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={filteredYear} onFilteredYear={filteredYearHandler}/>
        {props.items
          .filter(item => item.date.getFullYear().toString() === filteredYear)
          .map(expense =>
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )}
      </Card>
    </div>
  );
}

export default Expenses;
