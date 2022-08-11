import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiFactory from './shared/factory/factory.api';
import client from './apps/client';
import serviceFactory from './shared/factory/factory.service';
import { DepProvider } from './shared/context/context.dep';
import configureStore from './apps/store';
import { Provider } from 'react-redux';
import Loginview from './pages/login/loginView';


const root = ReactDOM.createRoot(document.getElementById('root'));
const apiClient = apiFactory(client);
const service = serviceFactory(apiClient);
const store = configureStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DepProvider service={service}>
        {/* <App /> */}
        <Loginview />
      </DepProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
