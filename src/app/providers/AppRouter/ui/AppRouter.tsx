import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import {routesConfig} from "../config/routeConfig";

export const AppRouter = () => {

	const router = createBrowserRouter(
		routesConfig.map(({ path, element, errorElement }) => (
			{
				path,
				element,
				errorElement,
			}

		)),
	);

	return (
		<Suspense fallback={'Loading...' }>
			<RouterProvider router={ router } />
		</Suspense>
	);
};
