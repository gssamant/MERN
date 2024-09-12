import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Counter from './Counter.jsx'
import Tailwind from './Tailwind.jsx'
import BGcolor from './BGcolor.jsx'
import Passwordgenerator from './Passwordgenerator.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Passwordgenerator />
  </React.StrictMode>,
)
