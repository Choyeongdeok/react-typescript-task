import React from 'react'
// import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// const rootNode = document.getElementById('root')! // non-null assertion

// ReactDOM.createRoot(rootNode).render( // React 18 부터 ReactDOM.render => ReactDOM.createRoot(node).render
//     <App/>
// )


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)