import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
    return (
        <main className="main">
            <h2>Page not found</h2>
            <Link to="/">To Home page</Link>
        </main>
    );
};

export default NotFoundPage;
