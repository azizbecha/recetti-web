import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
//import PrimaryBtn from './components/styles/Styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import MainCarousel from './components/MainCarousel'
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Footer from './components/Footer';
export default function App() {
  return (
   
      <Router>
          <Switch>
            <Route path="/about">
            <NavBar />
              <About />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/">
            <NavBar />
   <MainCarousel />
   
              <Home />
            </Route>
          </Switch>
        
      </Router>
   
  );
}


class About extends React.Component {
  componentDidMount() {
    document.title = 'About';
  }
  render() {
    return (
      <div>
      <Switch>

        <Route path="/about">
        <h2>abouttt</h2>
        </Route>
        <Route path="/contact/:id">
        <h2>contactttt</h2>
        </Route>
        <Route path="/contact">
        <h2>alllllll</h2>
        </Route>

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
   );
  }
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>


      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}