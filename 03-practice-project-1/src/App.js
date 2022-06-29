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
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
