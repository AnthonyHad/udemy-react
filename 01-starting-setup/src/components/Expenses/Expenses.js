import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.list.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //Expenses Filter is a controlled component by Expenses
  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      </div>
      {/* {filteredExpenses.length === 0 && <p>No Expenses found.</p>} */}

      <ExpensesList items={filteredExpenses} />
      {/* {expensesContent} */}

      {/* <ExpenseItem
        title={props.list[0].title}
        amount={props.list[0].amount}
        date={props.list[0].date}
      />
      <ExpenseItem
        title={props.list[1].title}
        amount={props.list[1].amount}
        date={props.list[1].date}
      /> */}
    </Card>
  );
};

export default Expenses;
