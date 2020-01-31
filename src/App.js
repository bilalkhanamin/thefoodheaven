import React from 'react';
 import './saas/style.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Homepage'
import About from './Pages/AboutPage'
import Chefs from './Pages/ChefsPage'
import Menu from './Pages/MenuPage'
import Contact from './Pages/ContactPage'
import Book from './Pages/Booktablepage'
import Error from './Pages/Error'
import { Switch, Route } from "react-router-dom";
 


function App() {
  return (
    <div  >
      <Navbar />
      <Switch>
      <Route exact path="/thefoodheaven" component={Home} />
      <Route exact path="/About" component={About} />
      <Route  exact path="/Chefs" component={Chefs}  />
      <Route  exact path="/menu" component={Menu} />
      <Route  exact path="/contact" component={Contact} />
      <Route  exact path="/bookTable" component={Book} />
      <Route  exact path="*" component={Error} />

       </Switch>
    </div>
  );
}

export default App;
