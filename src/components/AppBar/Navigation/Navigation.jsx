import { NavLink } from 'react-router-dom';

import './navigation.scss';

const Navigation = () => {
    return (
        <nav className="nav">
            <NavLink className="link" to="/">
                Home
            </NavLink>
            <NavLink className="link" to="/quiz">
                Quiz
            </NavLink>
        </nav>
    );
};

export default Navigation;
