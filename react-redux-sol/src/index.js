import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/* redux 연결 */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
/* reducer 연결을 위해 rootReducer 가져와 */
import rootReducer from './modules';
/* 가져온 reducer를 store로 연결 */
const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
