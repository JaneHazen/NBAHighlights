import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// components
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Teams from './teams'
import Team from './team'

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/teams" component={Teams}/>
          <Route exact path="/team/:id" component={Team}/>
          <Footer/>
        </div>
      </BrowserRouter>
      )
  }
}

export default App;