import { useState } from 'react';

const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  //binding the below function to onChange will return the event object
  //The choice between state and ref depends on what we would like to achieve
  //If we are interested once then the ref is better
  //if we need the value after every keystroke(instant validation) => state
  // if we'd like to reset the enteredInput => State

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const emailReg = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  const enteredEmailIsValid = emailReg.test(enteredEmail.trim()) === true;
  const emaiInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    //cannot use entered name in the condition as the states are usually scheduled by react
    // and we will be using an old one
    // if (event.target.value.trim() !== '') {
    //   setEnteredNameIsValid(true);
    // }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    // if (enteredName.trim() === '') {
    //   setEnteredNameIsValid(false);
    // }
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    if (!enteredEmailIsValid) {
      return;
    }

    console.log(enteredName, enteredEmail);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);
    //nameInputRef.current.value = '' => Not ideal, manipulates DOM
    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control ';

  const emailInputClasses = emaiInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="text"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emaiInputIsInvalid && (
          <p className="error-text">
            Email must not be empty and has the correct format ..@..
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
