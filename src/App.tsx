import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Menu />,
	},
	{
		path: '/cart',
		element: <Cart />,
	},
	{
		path: '*',
		element: <Error />,
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
