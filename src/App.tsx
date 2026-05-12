import { Route, Routes } from 'react-router-dom';
import { ScrollToHash } from './components/layout/ScrollToHash';
import { Home } from './pages/Home';
import { Karriere } from './pages/Karriere';
import { UeberUns } from './pages/UeberUns';
import { Dienstleistungen } from './pages/Dienstleistungen';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';

export function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/karriere" element={<Karriere />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/dienstleistungen" element={<Dienstleistungen />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </>
  );
}
