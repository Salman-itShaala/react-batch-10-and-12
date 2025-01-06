import "./App.css";
import Sports from "./Sports";
import UserName from "./UserName";

function App() {
  const sports = ["Cricket", "Kabaddi", "Boxing", "Racing", "Coding"];

  return (
    <>
      <h1>Sports</h1>
      <Sports sports={sports} />
      <Sports />
      <UserName firstName="Salman" />
      <UserName />
    </>
  );
}

export default App;
