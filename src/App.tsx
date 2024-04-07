import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './routes/Home';
import './App.css';

const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				path: '/',
				element: <Home />,
			},
		]
	}
]);

export default function App() {
	return (
		<RouterProvider router={router} />
	);
}
