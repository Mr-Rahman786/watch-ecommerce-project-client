import { createBrowserRouter} from 'react-router-dom';
import Main from '../../Layout/Main';
import AccsoriesCheckout from '../../Pages/AccsoriesCheckOut/AccsoriesCheckout';
import Cheackout from '../../Pages/CheckOut/Cheackout';
import DashBord from '../../Pages/DashBord/DashBord';
import Accosories from '../../Pages/Home/Accsories/Accosories';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Home/Login/Login';
import PrivateRoute from '../../Pages/PrivateRoute/PrivateRoute';
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
                element: <PrivateRoute><Services></Services></PrivateRoute>
            },
            {
                path: '/watch',
                element: <Product></Product>
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
            },
            {
                path: '/cheackout/:id',
                element: <Cheackout></Cheackout>,
                loader: ({ params }) => fetch(`https://final-projects-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/accsoriesCheckout/:id',
                element: <AccsoriesCheckout></AccsoriesCheckout>,
                loader: ({ params }) => fetch(`https://final-projects-server.vercel.app/accsories/${params.id}`)
            },
            {
                path: '/dashbord',
                element: <PrivateRoute><DashBord></DashBord></PrivateRoute>
            }
        ]
    }
]);
    

export default router;