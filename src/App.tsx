import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuccessPage from "./successPage";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./LoginPage";

const App: React.FC = () => {
  return (
    <div className="home">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/success"
            element={
              <ProtectedRoute>
                <SuccessPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
