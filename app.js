import Grid from './components/Grid.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux'
import configureStore from './store/storeConfig'

let store = configureStore();
injectTapEventPlugin();


var component = (
    <Provider store={store}>
        <Grid />
    </Provider>
)

ReactDOM.render(component,document.getElementById('root'));