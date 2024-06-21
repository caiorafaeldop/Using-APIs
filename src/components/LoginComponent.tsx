import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const LoginComponent: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulação de validação de login
    if (email === "caio@c.com" && password === "123") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/success");
    } else {
      alert("Login falhou. Verifique suas credenciais.");
      localStorage.setItem("isAuthenticated", "false");
    }
  };

  return (
    <form onSubmit={handleLogin} className="form-container">
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginComponent;
