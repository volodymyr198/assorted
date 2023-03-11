import React from 'react';

import Navigation from './Navigation/Navigation';
import './app-bar.scss';

const AppBar = () => {
    return (
        <header className="header">
            <Navigation />
        </header>
    );
};

export default AppBar;
