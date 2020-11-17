import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
            <h1>Mon Blog</h1>
            <h3>Séléctionnez une Langue</h3>
            <input type='radio' id='french' name='french' value='Français'></input>
            <label for="french">Français</label>
            <input type='radio' id='english' name='english' value='English'></input>
            <label for="english">English</label>
            <ul className="header">
                <li><NavLink exact to="/">Accueil</NavLink></li>
                <li><NavLink to="/stuff">Artciles</NavLink></li>
                <li><NavLink to="/contact">Catégories</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/stuff" component={Stuff}/>
                <Route path="/contact" component={Contact}/>
            </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;