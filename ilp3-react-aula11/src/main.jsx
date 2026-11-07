import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Você pode apagar o arquivo index.css da pasta se quiser, ou deixar essa linha
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)