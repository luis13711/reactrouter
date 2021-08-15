import React from 'react';
import * as ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './index.css';
import {
    Route,
    NavLink,
    Router,
  //  BrowserRouter as Router,
    Switch,
  } from 'react-router-dom'



import App from './App';

import Users from './users'
import Contact from './contact'
import Notfound from './notfound'
import Counter from './components/Counter.js'
import Vieja from './juegos/vieja/index.js';
import GoogleMap from './google/GoogleMap.js';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });

// Imports: Redux Persist Persister
//import { store, persistor } from './store/store';
//import { store } from './store/store';


export class Menu  extends React.PureComponent{
  constructor(props){
      super(props);
  }
  render(){
      return(
          <React.Fragment>
            <Router history={history}>
                  <header>
                  <div  className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                    <nav>
                      <ul class="nav nav-pills float-right">

                          <li>
                            <NavLink exact  class="nav-item nav-link" to="/">
                              Home
                            </NavLink>
                          </li>
                          <li>
                            <NavLink exact  class="nav-item nav-link" to="/googlemaps">
                              Google maps
                            </NavLink>
                          </li>
                          <li>
                            <NavLink exact  class="nav-item nav-link" to="/vieja">
                              Vieja
                            </NavLink>
                          </li>
                          <li>
                            <NavLink class="nav-item nav-link" to="/users">
                              Users
                            </NavLink>
                          </li>
                          <li>
                            <NavLink class="nav-item nav-link" to="/contact">
                              Contact
                            </NavLink>
                          </li>
                          <li>
                            <NavLink class="nav-item nav-link" to="/counter">
                              Counter Redux
                            </NavLink>
                          </li>
                      </ul>
                    </nav>

                    <hr />
                  
                  <Switch>
                    <Route exact path="/" component={Counter} />
                    <Route path="/googlemaps" component={GoogleMap} />
                    <Route path="/vieja" component={Vieja} />
                    <Route path="/users" component={Users} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/counter" component={Counter} />
                    <Route component={Notfound} />
                  </Switch>
                  
                </div>
              </header>
                
                
              </Router>
          </React.Fragment>
      );
  }
}

const routing = (
  <React.Fragment>

          <Menu />

  </React.Fragment>
   )  
/* const routing = (
  <React.Fragment>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        
          <Menu />
      
      </PersistGate>
    </Provider>
  </React.Fragment>
   )   */

  

  ReactDOM.render(routing, document.getElementById('root'))
