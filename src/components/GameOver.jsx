import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import Foto from "../img/logo_floresyverbos.png";

import WellDone from "../img/welldone.svg";

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="containero">
      <img id="foto" src={Foto} alt="logo" />
      
    <div id="gameover">
      <h2>¡FIN DEL JUEGO!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
      Respondiste correctamente {quizState.score} de {quizState.questions.length}{" "}
      preguntas.
      </p>
      <button 
      onClick={() => dispatch({ type: "NEW_GAME" })}>
        Reanundar</button>
    </div>
    </div>
  );
};

export default GameOver;
