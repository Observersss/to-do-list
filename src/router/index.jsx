import Tasks from '/src/pages/Tasks.jsx';
import About from '/src/pages/About.jsx';
import Error from '/src/pages/Error.jsx';
import Login from '/src/pages/Login.jsx';

export const privateRoutes = [
    { path: '/tasks', element: <Tasks/> },
    { path: '/*', element: <Error/> },
    { path: '/about', element: <About/> },
];

export const publicRoutes = [
    { path: '/login', element: <Login /> }
];
