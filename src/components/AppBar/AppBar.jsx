import React from 'react';

import Navigation from './Navigation/Navigation';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import './app-bar.scss';

const AppBar = () => {
    return (
        <header className="header">
            <Navigation />
            <LanguageSwitcher />
        </header>
    );
};

export default AppBar;
