import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Counter from './Counter.jsx'
import Tailwind from './Tailwind.jsx'
import BGcolor from './BGcolor.jsx'
import Passwordgenerator from './Passwordgenerator.jsx'
import CurrencyConverter from './CurrencyConverter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CurrencyConverter />
  </React.StrictMode>,
)
