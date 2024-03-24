import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AdviceComponent from "./components/adviceComponents";
import DogComponent from "./components/dogsComponent";

function App() {
  return (
    <div className="main-container">
      <div className="content">
        <div className="card">
          <AdviceComponent />
          <DogComponent />
        </div>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </div>
      <div className="form-container">
        <form>
          <label>
            Nome:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
