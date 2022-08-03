import "./App.css";
import Message from "./components/Message/Message";

function App() {
  const message =
    "Hi everybody! I am the first component of React. I'm fine :)";

  return (
    <div className="App">
      <Message message={message} />
    </div>
  );
}

export default App;
