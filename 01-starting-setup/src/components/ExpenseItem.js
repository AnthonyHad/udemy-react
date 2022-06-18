import './ExpenseItem.css';

//props is an object which holds all the values we get for the attributes on our elements inside App for example
function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;
  //1 root element per return statement
  return (
    <div className="expense-item">
      <div>{props.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
