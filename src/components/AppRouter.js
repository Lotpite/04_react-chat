import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './Routes';


const AppRouter = () => {

    const user = true;

    return (
    <Routes>
      {user
        ? (privateRoutes.map(({ path, Element, toPath }) => <Route key={path} path={path} element={<Element to={toPath ? toPath : ''}/>} />))
        : publicRoutes.map(({ path, Element, toPath }) => <Route key={path} path={path} element={<Element to={toPath ? toPath : ''}/>} />)}
    </Routes>
    )
       
}
 
export default AppRouter;