import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

//props is an object which holds all the values we get for the attributes
//on our elements inside App for example
const ExpenseItem = (props) => {
  //It's one of the react hooks and must only be called
  //inside react component functions. It returns an array with two elements always
  //with the initialised value and the updating function
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle('Updated!');
  //   console.log('Clicked!');
  // };
  //1 root element per return statement
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
