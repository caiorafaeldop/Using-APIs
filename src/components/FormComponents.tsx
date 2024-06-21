import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

interface FormErrors {
  email?: string;
  password?: string;
}

const FormComponents: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Validação do email (deve conter "@" e ".")
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email inválido.";
    }

    // Validação da senha (mínimo 8 caracteres)
    if (password.length < 8) {
      newErrors.password = "Senha deve ter no mínimo 8 caracteres.";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Formulário enviado com sucesso!");
      console.log({ email, password });

      // Limpar campos e erros após submissão bem-sucedida

      setEmail("");
      setPassword("");
      setErrors({});

      // Redirecionar para a página de sucesso
      navigate("/success");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label>Digite aqui seu Email e Senha</label>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormComponents;
