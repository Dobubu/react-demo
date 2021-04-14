import logo from './logo.svg';

import UserList from './UserList';
import LoginControl from './LoginControl';
import './App.css';

const userList = [
  {
    id: 5,
    name: 'Mary',
  },{
    id: 6,
    name: 'Jack',
  },{
    id: 7,
    name: 'Bob',
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LoginControl />
        <UserList name="Mary" userList={userList} />
      </header>
    </div>
  );
}

export default App;
