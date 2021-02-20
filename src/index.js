import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './MyStyle.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServiceClassComponent from './ServiceClassComponent';
import ServiceFunctionalComponent from './ServiceFunctionalComponent';

ReactDOM.render(
  <StrictMode>
    {/* <App /> */}
    <ServiceClassComponent/>
    <ServiceFunctionalComponent/>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
