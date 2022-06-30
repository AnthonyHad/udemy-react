import React, { useState } from 'react';

import UsersList from './components/Users/UsersList';
import UserForm from './components/Users/UserForm';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    //React Fragments which would replace wrapper component
    // other syntax would be < React.Fragment> or named import Fragment
    <>
      <UserForm onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
