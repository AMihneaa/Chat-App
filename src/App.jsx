import { Switch, Route, BrowserRouter } from 'react-router-dom';

import 'rsuite/dist/styles/rsuite-default.css';
import StartPage from './Pages/StartPage';
import Login from './Pages/Login';
import SignIn from './Pages/Signup';
import LoginRegister from './Pages/LoginRegister';
import './styles/main.scss';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/signup">
          <SignIn />
        </Route>
        <Route exact={true} path="/login">
          <Login />
        </Route>
        <Route exact={true} path="/cont">
          <LoginRegister />
        </Route>
        <Route exact={true} path="/home">
          <Home />
        </Route>
        <Route exact={true} path="/">
          <StartPage />
        </Route>
        <Route>
          <div>Pagina nu exista! :D </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
