import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  Header,
  Main,
  News,
  Footer
} from './components';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Main />} />
            <Route path="news" element={<News />} />
            {/* <Route path="*" element={<NotFound />} /> */}
            {/* <Route element={<NotFound />} /> */}
          </Route>
        </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
