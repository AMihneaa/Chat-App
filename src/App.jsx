import { Switch, Route, BrowserRouter } from 'react-router-dom';

import 'rsuite/dist/styles/rsuite-default.css';
import StartPage from './Pages/StartPage';
import Login from './Pages/Login';
import SignIn from './Pages/Signup';
import './styles/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup">
          <SignIn />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
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
