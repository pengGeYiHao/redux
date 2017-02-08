import React,{Component} from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import App from './containers/App'
import todoApp from './reducers/reducers'

let store = createStore(todoApp)
ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
,document.getElementById('app'))
