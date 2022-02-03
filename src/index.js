import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css'
import MessengerCustomerChat from 'react-messenger-customer-chat';

import App from './App';

import { store } from './app/store';
import { Provider } from 'react-redux';

// import Custom Css
import "./assets/css/style.css"
import "./assets/css/color.css"
import "./assets/css/responsive.css"
import "./assets/css/animate.min.css"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MessengerCustomerChat pageId="383273655072064" appId="940218140171982" />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
