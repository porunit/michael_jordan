import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InteractiveText from './InteractiveText';
import ImageGallery from './ImageGallery';

function App() {
  return (
    <Router basename="/michael_jordan/">
      <div className="App">
        <Routes>
          <Route path="/" element={<InteractiveText />} />
          <Route path="/images" element={<ImageGallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
