import React from 'react';
import { FcApproval } from 'react-icons/fc';

import useLang from 'hooks/useLang';
import { questions } from '../../../pages/QuizPage/questions-ua';
import './result.scss';

const Result = ({ correct }) => {
    const { lang } = useLang();

    return lang === 'ua' ? (
        <div className="result">
            <FcApproval />
            <h2>
                Ви відповіли вірно {correct} з {questions.length} разів!
            </h2>
            <a href="/assorted/quiz">
                <button>Спробувати ще</button>
            </a>
        </div>
    ) : (
        <div className="result">
            <FcApproval />
            <h2>
                You answered correctly {correct} out of {questions.length}{' '}
                times!
            </h2>
            <a href="/assorted/quiz">
                <button>Try again</button>
            </a>
        </div>
    );
};

export default Result;
