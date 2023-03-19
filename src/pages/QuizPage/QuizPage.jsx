import { useState } from 'react';

import Game from '../../components/quiz/Game/Game';
import Result from '../../components/quiz/Result/Result';
import useLang from 'hooks/useLang';
import { questions as uaQuestions } from './questions-ua';
import { questions as enQuestions } from './questions-en';

const QuizPage = () => {
    const [question, setQuestion] = useState(0);
    const [correct, setCorrect] = useState(0);
    const { lang } = useLang();

    const questions = lang === 'ua' ? uaQuestions : enQuestions;

    const getQuestion = questions[question];

    const onClickVariant = index => {
        setQuestion(question + 1);

        if (index === getQuestion.correct) {
            setCorrect(correct + 1);
        }
    };

    return (
        <main className="main">
            {question !== questions.length ? (
                <Game
                    question={question}
                    getQuestion={getQuestion}
                    onClickVariant={onClickVariant}
                />
            ) : (
                <Result correct={correct} />
            )}
        </main>
    );
};

export default QuizPage;
