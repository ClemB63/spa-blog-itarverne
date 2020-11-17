import React, { Component } from "react";
import { useTranslation, Trans } from "react-i18next";
 
class Articles extends Component {
  render() {
    return (
      <div>
        <h2><Trans>Articles</Trans></h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}
 
export default Articles;