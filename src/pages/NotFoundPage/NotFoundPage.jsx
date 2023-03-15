import { Link } from 'react-router-dom';

import useLang from 'hooks/useLang';
import locale from './locale.json';

export const NotFoundPage = () => {
    const { lang } = useLang();

    const title = locale.title[lang];
    const link = locale.link[lang];

    return (
        <main className="main">
            <h2>{title}</h2>
            <Link to="/">{link}</Link>
        </main>
    );
};

export default NotFoundPage;
