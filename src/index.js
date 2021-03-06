import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

ReactDOM.render(<Provider store={configureStore}><App /></Provider>
    , document.getElementById('root'));
registerServiceWorker();
