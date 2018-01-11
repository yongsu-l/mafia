import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './Scenes/App';
import Home from './Scenes/Home';
import About from './Scenes/About';
export default () => {
 return (
   <BrowserRouter>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route path='/about' component={About}/>
     </Switch>
   </BrowserRouter>
 )
}
