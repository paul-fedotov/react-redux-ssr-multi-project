import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('bb-app');

ReactDOM.render(
  <React.Fragment>
    <h1>Hello, world!</h1>
    <BannerComponent/>
  </React.Fragment>,
  root
);