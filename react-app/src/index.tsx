import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Fudge from '@fudge-ai/browser'
import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: 'https://b887865c0acb4f8eb67c80e5870d7bd1@o1166542.ingest.sentry.io/6257010',
})

Fudge.init('test8394-1627-44c9-848f-38971fcaef34')

Fudge.getSessionURL().then((url) => {
  Sentry.setContext('Fudge', {'Session URL': url})
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
