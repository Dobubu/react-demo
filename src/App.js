import logo from './logo.svg';

import UserList from './UserList';
import LoginControl from './LoginControl';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';

import { Route } from 'react-router-dom';
import routes from './routes';

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
        {routes.map((route, i) => {
          const { path, exact, routes } = route;
          return (
            <Route
              key={i}
              path={path}
              exact={exact}
              render={(routeProps) => (
                <route.component routes={routes} {...routeProps} />
              )}
            />
          );
        })}
        <LoginControl />
        <NameForm />
        <EssayForm />
        <FlavorForm />
        <Reservation />
        <UserList name="Mary" userList={userList} />
      </header>
    </div>
  );
}

export default App;
