import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter as Router } from 'react-router-dom'
import { UserProvider } from './hooks/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <Router>
      <StrictMode>
        <App />
      </StrictMode>
    </Router>
  </UserProvider>,
)
