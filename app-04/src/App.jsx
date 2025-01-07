import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  async function sendReq() {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    sendReq();
  }, []);

  return (
    <>
      <h1>Users</h1>
      {users.map((user) => {
        return <li key={user.id}>{user.firstName}</li>;
      })}
    </>
  );
}

export default App;
