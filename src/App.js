// import NavBar from './Components/NavBar';
import Login from './Pages/Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/login">
                {/* <NavBar /> */}
                <Login />
            </Route>

            <Route>
                <Redirect to="/login" />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
