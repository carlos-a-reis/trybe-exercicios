import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['conteudo', 'fixaçao', 'aula', 'exercicios'];

function App() {
  return (
    <ul>{tasks.map((task) => Task(task))}</ul>
  );
}

export default App;
