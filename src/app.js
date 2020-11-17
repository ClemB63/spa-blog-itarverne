import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Articles from "./Articles";
import Categories from "./Categories";
import ReactDOM from "react-dom";
import { useTranslation, Trans } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>{t("Bienvenue sur notre Blog")}</h1>
        <div class='langSelect'>
        <button onClick={() => changeLanguage("fr")} class='langBtn' value='lang'>fr</button>
        <button onClick={() => changeLanguage("en")} class='langBtn' value='lang'>en</button>
        </div>
      </div>

      <HashRouter>
            <div>
            <ul className="header">
                <li><NavLink exact to="/"><Trans>Accueil</Trans></NavLink></li>
                <li><NavLink to="/articles"><Trans>Artciles</Trans></NavLink></li>
                <li><NavLink to="/categories"><Trans>Catégories</Trans></NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/articles" component={Articles}/>
                <Route path="/categories" component={Categories}/>
            </div>
            </div>
        </HashRouter>
    </div>
  );
}