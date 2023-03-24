import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // StrictMode is for highlighting potential problems within the
  // application.  It activates additional checks and warnings.  Only
  // runs in development.  It does not impact production build.  However,
  // should know that it renders twice.  Discuss later.
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
