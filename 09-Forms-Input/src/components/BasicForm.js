import { useState } from 'react';

const BasicForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [bluredName, setBluredName] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && bluredName;

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const bluredNameHandler = (event) => {
    setBluredName(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName('');
    setBluredName(false);
  };

  const nameClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={bluredNameHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
