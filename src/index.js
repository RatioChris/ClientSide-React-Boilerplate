import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import App from './App'
require('file?name=./index.html!./index.html')
require('./assets/scss/main.scss')

const routes = {
  path: '/',
  component: App
}

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
)
