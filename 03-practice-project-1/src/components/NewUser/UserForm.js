import { useState } from 'react';

import styles from './UserForm.module.css';

const UserForm = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredAge, enteredUsername);
    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles['new-user__controls']}>
        <div className={styles['new-user__control']}>
          <label>Username</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className={styles['new-user__control']}>
          <label>Age(Years)</label>
          <input
            type="number"
            min="10"
            step="1"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </div>
        <div className={styles['new-user__actions']}>
          <button type="submit">Add User</button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
