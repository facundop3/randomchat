import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Font Awesome stuff 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faPaperPlane, faWindowMinimize, faSearch, faUserAstronaut,faFrownOpen } from '@fortawesome/free-solid-svg-icons'

library.add(faTimes, faPaperPlane,faWindowMinimize, faSearch, faUserAstronaut, faFrownOpen)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
