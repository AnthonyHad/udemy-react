import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import styles from './UserForm.module.css';

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'please enter a valide age (>10)',
      });
      return;
    }
    // console.log(enteredAge, enteredUsername);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </Wrapper>
  );
};

export default UserForm;
