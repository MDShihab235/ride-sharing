import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import CreateAccount from './components/CreateAccount/CreateAccount';
import NoMatch from './components/NoMatch/NoMatch';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <nav className="navbar navbar-light bg-light d-flex justify-content-end">
            <div className="container-fluid">
              <span className="navbar-brand h1"> <strong>Affinity-Riders</strong> </span>
              <ul className="navbar">
                <li className="navbar-item">
                  <a className="nav-link text-decoration-none" ><Link to='/home'>Home</Link> </a>
                </li>
                <li className="navbar-item">
                  <a className="nav-link text-decoration-none" ><Link to='/destination'>Destination</Link></a>
                </li>
                <li className="navbar-item">
                  <a className="nav-link text-decoration-none" ><Link to='/blog'>Blog</Link></a>
                </li>
                <li class="navbar-item">
                  <a className="nav-link text-decoration-none" ><Link to='/contact'>Contact</Link></a>
                </li>
                <li class="navbar-item">
                  <button className="btn btn-danger text-decoration-none"><Link to='/login'>Login</Link></button>
                </li>
              </ul>
            </div>
            
          
        </nav>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/ride'>
            <Cart></Cart>
          </Route>
          <Route path='/create-account'>
            <CreateAccount></CreateAccount>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/destination/from/:ride'>
            <Destination></Destination>
          </PrivateRoute>
          <Route path='/blog'>
            <Blog></Blog>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
      </Router>
      
      
    </UserContext.Provider>
  );
}

export default App;
