import './Card.css';

//Children is a reserved name it will be the content between the opening
//and closing brackets of my component
const Card = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
