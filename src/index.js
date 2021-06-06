import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import middleware from './middleware'
import App from './components/App'

const store = createStore(rootReducer, middleware)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
)
