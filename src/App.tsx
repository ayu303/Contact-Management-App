import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacts from './pages/Contacts';
import ChartsAndMaps from './pages/ChartsAndMaps';
import HomePage from './Home';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
    

        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/charts-and-maps" element={<ChartsAndMaps />} />
      </Routes>
    </Router>
  );
};

export default App;
