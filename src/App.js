import './App.css';
import Message from './Message';

function App() {
  return (
    <div className="App">
      <Message className="id" place = "world"></Message>
      <Message place = "Earth"></Message>
      <Message place = "Jupiter"></Message>
      <Message place = "Moon"></Message>
      <Message place = "Sun"></Message>
    </div>
  );
}

export default App;
