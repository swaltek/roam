import './App.css';
import AuthAPI from './utils/auth_utils';
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <header className="App-header">
              ROAM
            </header>
          } />
      </Routes>
    </Router>
  );
}

export default App;
