import React from 'react'
import { createRoot } from 'react-dom/client'

// Styles
import './styles/index.css'

// Components
import { App } from './components/App/App'

const root = createRoot(document.getElementById('root'))
root.render(
  <App />
)
