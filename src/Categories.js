import React, { Component } from "react";
import { useTranslation, Trans } from "react-i18next";
 
class Categories extends Component {
  render() {
    return (
      <div>
        <h2><Trans>Catégories</Trans></h2>
        <ul className="categories">
                <li>Python</li>
                <li>React</li>
                <li>Redux</li>
            </ul>
      </div>
    );
  }
}
 
export default Categories;