import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header, Main } from './components';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
