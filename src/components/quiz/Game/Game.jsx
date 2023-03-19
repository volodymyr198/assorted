import { questions } from '../../../pages/QuizPage/questions-ua';
import './game.scss';

const Game = ({ getQuestion, onClickVariant, question }) => {
    const percent = Math.round((question / questions.length) * 100);

    const element = getQuestion.variants.map((variant, index) => (
        <li onClick={() => onClickVariant(index)} key={index}>
            {variant}
        </li>
    ));

    return (
        <div className="progress">
            <div
                style={{ width: `${percent}%` }}
                className="progress__inner"
            ></div>
            <h1>{getQuestion.title}</h1>
            <ul>{element}</ul>
        </div>
    );
};

export default Game;
