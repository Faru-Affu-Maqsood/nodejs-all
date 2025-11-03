import { useState } from "react";

function App () {
  const [friends, setFriends] = useState(['Farheen', 'Afshaan']);
  const addNewFriend = () => {
    const data = prompt("Enter Name", "");
    setFriends([...friends, data]);
  };

  const removeFriend = () => {
    const data = prompt("Enter Name", "");
    if (!friends.includes(data))
    {
      alert("No records found!");
      return;
    }

    setFriends(friends.filter(f => f !== data));
  };

  const updateOneFriend = () => {
    const data = prompt("Enter Name", "");
    const updatedData = prompt("Enter Updated Name", "");
    if (!friends.includes(data))
    {
      alert("No records found!");
      return;
    }

    setFriends(friends.map(f => f === data ? updatedData : f));
  };
  return (
    <>
      {
        friends.map((f) => <li key={crypto.randomUUID()}>{f}</li>)
      }

      <button onClick={addNewFriend}>Add New Friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
      <button onClick={updateOneFriend}>Update One Friend</button>
    </>
  );
}

export default App;
