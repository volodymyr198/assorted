import { Routes, Route } from 'react-router-dom';
import LangContext from 'langContext';

import AppBar from './components/AppBar/AppBar';
import QuizPage from './pages/QuizPage/QuizPage';
import Home from './pages/Home/Home';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import './App.scss';

function App() {
    return (
        <LangContext>
            <div className="wrapper">
                <AppBar />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/quiz" element={<QuizPage />}></Route>
                    <Route path="*" element={<NotFoundPage />}></Route>
                </Routes>
            </div>
        </LangContext>
    );
}

export default App;
