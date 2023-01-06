import { createBrowserRouter} from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';
import Product from '../../Pages/Services/Product';
import Services from '../../Pages/Services/Services';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element:<Services></Services>
            },
            {
                path: '/watch',
                element:<Product></Product>
            }
        ]
    }
]);

export default router;