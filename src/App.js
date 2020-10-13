import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Stations from './routes/Stations'
import Header from './components/Header';
import InformationBox from './components/InformationBox';
import BottomInfo from './components/BottomInfo';
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <InformationBox topic='NOTICE' body='Development of web application is still ongoing!' />
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/stations" exact component={ Stations } />
            <Route path="/signup" exact component={ SignUp } />
            <Route path="/signin" exact component={ SignIn }/>
          </Switch>
        <BottomInfo />
      </Router>
    </div>
  );
}

export default App;
