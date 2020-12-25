// import NavBar from './Components/NavBar';
import Login from './Pages/Login';
import Register from './Pages/Register';

import NotFound from './Pages/NotFound';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Redirect
} from 'react-router-dom';

function App() {
  return (
    <Router>
        {/* <NavBar /> */}
        <Switch>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>

            {/* <Route>
                <Redirect to="/login" />
            </Route> */}
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
