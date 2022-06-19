import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.list[0].title}
        amount={props.list[0].amount}
        date={props.list[0].date}
      />
      <ExpenseItem
        title={props.list[1].title}
        amount={props.list[1].amount}
        date={props.list[1].date}
      />
      <ExpenseItem
        title={props.list[2].title}
        amount={props.list[2].amount}
        date={props.list[2].date}
      />
      <ExpenseItem
        title={props.list[3].title}
        amount={props.list[3].amount}
        date={props.list[3].date}
      />
    </Card>
  );
};

export default Expenses;
