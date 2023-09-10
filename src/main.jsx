import React from 'react'
import ReactDOM from 'react-dom/client'
import {CartApp} from './CartApp'
import {BrowserRouter} from 'react-router-dom'
import '../src/styles/styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
  <React.StrictMode>
    <CartApp />
  </React.StrictMode>
 </BrowserRouter>
)
