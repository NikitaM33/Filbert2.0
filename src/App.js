import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  Header,
  Main,
  News,
  CreateAnnouncement,
  Footer
} from './components';
import { NotFound } from './components/common';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Main />} />
            <Route path="news" element={<News />} />
            {/* <Route path="auth" element={<Auth />} /> */}
            <Route path="createAnnouncement" exact element={<CreateAnnouncement/>} />

            {/* TODO: Доделать NotFound! */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
