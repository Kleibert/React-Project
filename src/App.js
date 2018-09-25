import React, { Component } from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBarApp from './components/NavBarApp';

class App extends Component {
  render() {
    return (
      <div className="App">
      
       
       <BrowserRouter>
          <div>
            {/*Call component Navbar*/}
            <NavBarApp />
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
                
                </Switch>
            </div>
       </BrowserRouter>
       
      </div>
    );
  }
}

export default App;
