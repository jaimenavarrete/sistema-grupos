import NavBar from './Components/Header/NavBar';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login';
import Register from './Pages/Register';

import UserProfile from './Pages/UserProfile';
import UserModify from './Pages/UserModify';
import Reports from './Pages/Reports';
import SubjectRegistration from './Pages/SubjectRegistration';
import SubjectGroups from './Pages/SubjectGroups';
import ProjectGroups from './Pages/ProjectGroups';

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
            <Route exact path="/reports">
                <NavBar />
                <Reports />
                <Footer />
            </Route>
            <Route exact path="/subjects-registration">
                <NavBar />
                <SubjectRegistration />
                <Footer />
            </Route>
            <Route exact path="/subjects-groups">
                <NavBar />
                <SubjectGroups />
                <Footer />
            </Route>
            <Route exact path="/project-groups">
                <NavBar />
                <ProjectGroups />
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
