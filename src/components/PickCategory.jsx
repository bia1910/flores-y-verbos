import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import Foto from "../img/logo_floresyverbos.png";

import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (

    <div id="category">
      <img id="foto" src={Foto} alt="logo" />
      <div className="escolha">
        <h2>¿Como jugar?</h2>
      <p>¡Hola bienvenido al juego Flores y Verbos!

El juego funciona de la seguinte manera: serán seis oracines en enpañol con un verbo en cada oración en el modo presente perfecto compuesto. Habrá un espacio vacío donde estará las conjugación del verbo, donde tendrás que completar con una de las seis alternativas que estarán disponibles.

Solo puede elegir una opción para cada oración que tendras durante el juego y cada oración equivale a 1 punto.</p></div>
      {quizState.questions.map((question) => (
        <button
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category}
        </button>
      ))}


    </div>
  );
};

export default PickCategory;
