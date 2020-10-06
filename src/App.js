import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import SignIn from './pages/SignIn'
import Routes from './routes'
import AppConverter from './hooks'

function App() {
  return (
    <Router>
      <AppConverter>
        <Routes />
      </AppConverter>
    </Router>
    );
}

export default App;
