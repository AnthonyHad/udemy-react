import { useState } from 'react';

import styles from './UserForm.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const UserForm = (props) => {
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
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    // console.log(enteredAge, enteredUsername);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={styles['new-user__controls']}>
          <div className={styles['new-user__control']}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={enteredUsername}
              onChange={usernameChangeHandler}
            />
          </div>
          <div className={styles['new-user__control']}>
            <label htmlFor="age">Age(Years)</label>
            <input
              id="age"
              type="number"
              min="10"
              step="1"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
          </div>
          <div className={styles['new-user__actions']}>
            <Button type="submit">Add User</Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
