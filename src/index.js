import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import Router from "./Router/Router";


import 'bootstrap/scss/bootstrap.scss';
import './Assets/Style/Screen.scss';


//import registerServiceWorker from './registerServiceWorker';
ReactDOM.render((
    <BrowserRouter>
        <Router />
    </BrowserRouter>
), document.getElementById('root'));


//registerServiceWorker();