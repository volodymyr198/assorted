import React from 'react';

import useLang from 'hooks/useLang';
import './languageSwitcher.scss';

const LanguageSwitcher = () => {
    const { lang, toggleLang } = useLang();
    return (
        <div>
            <span
                onClick={toggleLang}
                className={lang === 'ua' ? 'currentLang' : 'langEl'}
            >
                UA
            </span>
            |
            <span
                onClick={toggleLang}
                className={lang === 'en' ? 'currentLang' : 'langEl'}
            >
                EN
            </span>
        </div>
    );
};

export default LanguageSwitcher;
