import { useState } from 'react';

import styles from './UserForm.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

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
