import React from 'react';
import { FcApproval } from 'react-icons/fc';

import { questions } from '../../../pages/QuizPage/questions';
import './result.scss';

const Result = ({ correct }) => {
    return (
        <div className="result">
            <FcApproval />
            <h2>
                Ви відповіли вірно {correct} з {questions.length} разів!
            </h2>
            <a href="/assorted/quiz">
                <button>Спробувати ще</button>
            </a>
        </div>
    );
};

export default Result;
