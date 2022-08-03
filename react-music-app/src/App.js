import './App.css';
import {Routes, Route} from 'react-router-dom';
import Artist from './components/artist';
import Album from './components/album';
import Form from './components/form';
import { PageWrapper } from './layouts';

import * as Pages from './Pages';

function App() {
  return (
    <>
    {/* <Artist />
    <Album />
    <Form /> */}
    <Routes>
      <Route path="/" element={<PageWrapper />}>
      <Route path="/" element={<Pages.HomePage />} />
      <Route path="/artists" element={<Pages.ArtistPage />} />
      <Route path="/albums" element={<Pages.AlbumPage />} />
      <Route path="/albums/:id" element={<Pages.SongPage />} />
      <Route path="/*" element={<Pages.ErrorPage />} />
      </Route>
      </Routes>
    </>
    
)}

export default App;
