import "./App.css";
import Boton from "./components/Boton";
import BotonClear from "./components/BotonClear";
import Pantalla from "./components/pantalla";
import { evaluate } from "mathjs";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram , faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const quitarInput = () => {
    setInput(input.slice(0, -1));
  };

  const calcularResultado = () => {
    if (input === setInput("")) {
      setInput("");
    } else {
      setInput(evaluate(input));
    }
  };


  return (
    <div className="App">
      <div className=" Me">
        <p> Axolotl </p>
      </div>

      <div className=" content">
        <div className=" calculadora">
          <Pantalla input={input} />

          <div className=" filas">
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={quitarInput}> C </Boton>
          </div>
          <div className=" filas">
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className=" filas">
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className="filas">
            <Boton manejarClic={agregarInput}>/</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className="filas">
            <BotonClear manejarClic={() => setInput("")}> Clear </BotonClear>

            <Boton manejarClic={calcularResultado}>=</Boton>
          </div>
        </div>
      </div>

      <div className="contact">
        <p> contact</p>
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100008858807221"> <FontAwesomeIcon icon={ faFacebook} /> Facebook</a>
      <br />
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/snowman_jcb/"> <FontAwesomeIcon icon={ faInstagram }/> Instagram </a>
      <br />
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/joel11210"> <FontAwesomeIcon icon={faGithub} /> Github</a>
      <br />
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/javier-cabrales-1ba86b241/"> <FontAwesomeIcon icon={ faLinkedin} /> Linkedin</a>
      </div>

    </div>
  );
}

export default App;
