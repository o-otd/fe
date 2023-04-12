import React from 'react';
import Router from './Router';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost';

function App() {
  return <Router />;
}

export default App;
