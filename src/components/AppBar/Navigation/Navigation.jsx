import { NavLink } from 'react-router-dom';

import useLang from 'hooks/useLang';
import locale from './locale.json';
import './navigation.scss';

const Navigation = () => {
    const { lang } = useLang();

    const home = locale.home[lang];
    const quiz = locale.quiz[lang];

    return (
        <nav className="nav">
            <NavLink className="link" to="/">
                {home}
            </NavLink>
            <NavLink className="link" to="/quiz">
                {quiz}
            </NavLink>
        </nav>
    );
};

export default Navigation;
