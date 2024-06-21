import React from "react";
import AdviceComponent from "./components/adviceComponents";
import DogComponent from "./components/dogsComponent";
import { useNavigate } from "react-router-dom";
import "./App.css";

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    localStorage.setItem("isAuthenticated", "false");
    navigate("/");
  };
  return (
    <div>
      <AdviceComponent />
      <DogComponent />
      <button onClick={handleNavigate}>Desconectar</button>
    </div>
  );
};

export default SuccessPage;

/*Validar no fetch

200
409 
500
502
505
*/
