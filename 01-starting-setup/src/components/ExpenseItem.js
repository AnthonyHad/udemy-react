import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

//props is an object which holds all the values we get for the attributes on our elements inside App for example
function ExpenseItem(props) {
  //1 root element per return statement
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
