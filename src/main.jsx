import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// import { registerSW } from 'virtual:pwa-register'

// if (typeof window !== 'undefined') {
//   import('./pwa')
// }

// const updateSW = registerSW({
//   onNeedRefresh() {},
//   onOfflineReady() {},
// })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
