import './App.css';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>

  );
}

export default App;
