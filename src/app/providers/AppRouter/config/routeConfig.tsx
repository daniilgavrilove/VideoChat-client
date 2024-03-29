import { RouteObject } from 'react-router-dom';

import {ErrorPage} from '@/pages/ErrorPage';
import {MainPage} from "@/pages/MainPage";
import {RoomPage} from "@/pages/RoomPage";

export enum AppRoutes {
    MAIN = '/',
    ROOM = '/room/:id',

}

export const routesConfig: RouteObject[] = [
	{ path: AppRoutes.MAIN, element: <MainPage />, errorElement:<ErrorPage/>  },
    { path: AppRoutes.ROOM, element: <RoomPage /> },






];
