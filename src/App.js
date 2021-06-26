import './App.css';
import TopBar from '../src/Components/TopBar/TopBar'
import Home from '../src/Components/Pages/Home/Home'
import SinglePage from '../src/Components/Pages/SinglePage/SinglePage'
import Write from '../src/Components/Pages/Write/Write'
import Settings from '../src/Components/Pages/Settings/Settings'
import Login from '../src/Components/Pages/Login/Login'
import Register from '../src/Components/Pages/Register/Register'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>

      <TopBar></TopBar>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/register'>{user ? <Home/> : <Register/>}</Route>
        <Route path='/login'>{user? <Home/> : <Login/>}</Route>
        <Route path='/settings'>{user ? <Settings/> : <Register/>}</Route>
        <Route path='/write'>{user ? <Write/> : <Register/>}</Route>
        <Route path='/post/:postId'>
          <SinglePage></SinglePage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
