import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

  

  const [userData, setUserData] = useState([]);

  // const [] = useState('');

  const saveUserDataHandler = (userInput) => {
    setUserData( (prev) => {
      return [
        userInput,
        ...prev
      ];
    });
  }

  return (
    <>
      <AddUser onSaveData={saveUserDataHandler}/>
      <UsersList users={userData} />
    </>
  );
}

export default App;
