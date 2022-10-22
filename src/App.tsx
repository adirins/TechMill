import React from 'react';import './App.css';
import { Routes, Route } from "react-router-dom";
import NoMatch from "./pages/no-match/no-match";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
