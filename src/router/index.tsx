import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import { PublicRoutesInterface } from "./routeName";
import { Home } from "../views/home/home";
import { PublicRoutes } from './publicRoutes';


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>

            <Route path="/" element={<PublicRoutes />}>
                <Route index path={PublicRoutesInterface.home} element={<Home />} />
                <Route path="*" element={<Navigate to={PublicRoutesInterface.home} replace />} />
            </Route>
        </>
    )
);