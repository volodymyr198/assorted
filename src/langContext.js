import { createContext, useEffect, useState } from 'react';

export const langContext = createContext('ua');

const LangContext = ({ children }) => {
    const [lang, setLang] = useState(() => {
        return JSON.parse(localStorage.getItem('lang')) || 'ua';
    });

    useEffect(() => {
        localStorage.setItem('lang', JSON.stringify(lang));
    }, [lang]);

    const toggleLang = () =>
        setLang(prevLang => (prevLang === 'ua' ? 'en' : 'ua'));

    return (
        <langContext.Provider value={{ lang, toggleLang }}>
            {children}
        </langContext.Provider>
    );
};

export default LangContext;
