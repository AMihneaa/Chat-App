import { Switch, Route, BrowserRouter } from 'react-router-dom';

import 'rsuite/dist/styles/rsuite-default.css';
import StartPage from './Pages/StartPage';
import Login from './Pages/Login';
import Signin from './Pages/Signin';
import './styles/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact="true" path="/signin">
          <Signin />
        </Route>
        <Route exact="true" path="login">
          <Login />
        </Route>
        <Route exact="true" path="/">
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
