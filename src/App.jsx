import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InteractiveText from './InteractiveText';
import Images from './Images'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/michael_jordan" element={<InteractiveText />} />
        <Route path="/images" element={<Images />} />
      </Routes>
    </Router>
  );
};

export default App;
