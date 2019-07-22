import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import EstiloGlobal from './styles/global';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      {<Header />}
      <Routes />
      <EstiloGlobal />
    </BrowserRouter>
  );
}

export default App;
