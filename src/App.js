import logo from './logo.svg';
import './App.css';
import Todo from './todo';
import Alert from './samplealert'

function App() {
  return (
    <div>
      <header className="App-header">
        <Todo color="white"/>
      </header>
      <footer>
        <Alert />
      </footer>
    </div>
  );
}

export default App;
