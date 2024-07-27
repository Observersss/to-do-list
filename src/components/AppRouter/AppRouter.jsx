import {useContext} from 'react';
import {AuthContext} from "../context/index.js";
import {Route, Routes, useRoutes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../router";

const AppRouter = () => {
    //const [isAuth] = useContext(AuthContext);

    const { isAuth } = useContext(AuthContext);
    //
    // const routes = isAuth ? privateRoutes : publicRoutes;
    // return useRoutes(routes);
    return (
        <Routes>
            {isAuth
                ? privateRoutes.map(route => <Route key={route.path} path={route.path} element={route.element} />)
                : publicRoutes.map(route => <Route key={route.path} path={route.path} element={route.element} />)
            }
        </Routes>
    );
};

export default AppRouter;