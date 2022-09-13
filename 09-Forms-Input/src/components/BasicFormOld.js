import { useState } from 'react';

const BasicForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [bluredName, setBluredName] = useState(false);

  const [enteredLastName, setEnteredLastName] = useState('');
  const [bluredLastName, setBluredLastName] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && bluredName;

  const enteredLastNameIsValid = enteredLastName.trim() !== '';
  const lastNameInputIsValid = !enteredLastName && bluredLastName;

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const bluredNameHandler = (event) => {
    setBluredName(true);
  };

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };
  const bluredlastNameChangeHandler = (event) => {
    setBluredLastName(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }

    if (!enteredLastNameIsValid) {
      return;
    }

    console.log(enteredName);
    setEnteredName('');
    setBluredName(false);
    setEnteredLastName('');
    setBluredLastName(false);
  };

  const nameClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const lastNameClasses = lastNameInputIsValid
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
          <div className={lastNameClasses}>
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              id="name"
              onChange={lastNameChangeHandler}
              onBlur={bluredlastNameChangeHandler}
            />
          </div>
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
