import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Chat from "./components/Chat";


function App() {
  const [showChat, setShowChat] = useState(false);
  const [name, setName] = useState("");
  const getName = (name) => {
    setName(name);
    setShowChat(true);
  };
  return (
    <div className="App">
      {!showChat && <Login callback={getName} />}
      {showChat && <Chat name={name} />}
    </div>
  );
}

export default App;
