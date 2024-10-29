import React from 'react'
import ReactDOM from 'react-dom/client'
import '/src/index.css'
import lfc from '/src/assets/lfc.jpg'
import Card from '/src/Components/card/Card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container'>
    <Card name="Gaurav" image={lfc} style={{"border-radius":"10px"}} />
    <Card name="Rakesh" image={lfc} style={{"border-radius":"10px"}}/>
    <Card name="Prajwal" image={lfc} style={{"border-radius":"10px"}} />
  </div>
)
