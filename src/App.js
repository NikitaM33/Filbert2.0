import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  Header,
  Main,
  News,
  CreateAnnouncement,
  CorpLive,
  PhotoGallery,
  VideoGallery,
  PhotoAlbum,
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
            <Route path="corpLive" element={<CorpLive />} />
            <Route path="photoGalery" element={<PhotoGallery />} />
            <Route path="album" element={<PhotoAlbum />} />
            <Route path="videoGalery" element={<VideoGallery />} />

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
