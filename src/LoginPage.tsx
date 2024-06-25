import React from "react";
import LoginComponent from "./components/LoginComponent";
import NavBar from "./components/NavBar/NavBar";
import "./LoginPage.css";
import imagemCachorro from "../src/assets/cachorro.jpeg";

const SuccessPage: React.FC = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <div className="left-band">
          <img src={imagemCachorro} alt="Cachorro" />
        </div>
        <div className="right-band">
          <div className="login-wrapper">
            <LoginComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
