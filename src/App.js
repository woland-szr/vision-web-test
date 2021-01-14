import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/signup" component={SignupPage} exact />
      <Route path="/login" component={LoginPage} exact />
    </Switch>
  );
}

export default App;
