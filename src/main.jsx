import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
// import {AuthProvider} from "./components/AuthProvider"

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
  // <React.StrictMode>
  //   <AuthProvider>
  //     <Router>
  //       <App />
  //     </Router>
  //   </AuthProvider>
  // </React.StrictMode>
)
