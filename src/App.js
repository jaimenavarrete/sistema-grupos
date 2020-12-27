import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Register from './Pages/Register';

import UserProfile from './Pages/UserProfile';
import UserModify from './Pages/UserModify';

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
        <Switch>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route exact path="/user">
                <NavBar />
                <UserProfile />
                <Footer />
            </Route>
            <Route exact path="/user-modify">
                <NavBar />
                <UserModify />
                <Footer />
            </Route>


            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
