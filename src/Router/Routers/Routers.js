import { createBrowserRouter} from 'react-router-dom';
import Main from '../../Layout/Main';
import Accosories from '../../Pages/Home/Accsories/Accosories';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Home/Login/Login';
import Product from '../../Pages/Services/Product';
import Services from '../../Pages/Services/Services';
import Signup from '../../Pages/Signup/Signup';
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
            },
            {
                path: '/accosories',
                element:<Accosories></Accosories>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<Signup></Signup>
            }
        ]
    }
]);

export default router;