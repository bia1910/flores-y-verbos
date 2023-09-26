import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "./Welcome.css";
import Category from "../img/logo_floresyverbos.png";

//import Quiz from "../img/quiz.svg";

const Welcome = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="inicio">
      <img src={Category} alt="Categoria do Quiz" />
      <br></br>
      <div className="button">
        <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
          Comenzar
        </button>
      </div>
    </div>
  );

};

export default Welcome;