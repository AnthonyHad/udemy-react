import { useState } from 'react';

import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const emailReg = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  const enteredEmailIsValid = emailReg.test(enteredEmail.trim()) === true;
  const emaiInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredEmailTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    if (!enteredEmailIsValid) {
      return;
    }

    console.log(enteredName, enteredEmail);
    resetNameInput();
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputHasError
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
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
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
