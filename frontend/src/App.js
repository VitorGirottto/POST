import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MedievalDashboard from "./components/MedievalDashboard";
import FolderView from "./components/FolderView";

function App() {
  return (
    <div className="App medieval-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MedievalDashboard />} />
          <Route path="/folder/:folderId" element={<FolderView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;