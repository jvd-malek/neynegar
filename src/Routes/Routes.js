import Articles from "../Pages/Articles";
import GroupPage from "../Pages/GroupPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";


const routes = [
    {path: '/' , element: <Home/>},
    {path: '/caligraphic-product' , element: <GroupPage header='محصولات خوشنویسی' txt2='فروش ابزار و لوازم خوشنویسی خاص' />},
    {path: '/painting-product' , element: <GroupPage header='محصولات نقاشی' txt2='فروش ابزار و لوازم نقاشی خاص' />},
    {path: '/traditional-product' , element: <GroupPage header='محصولات هنر‌های سنتی' txt2='فروش ابزار و لوازم هنر‌های سنتی' />},
    {path: '/login' , element: <Login isLogin={true}/>},
    {path: '/signup' , element: <Login isLogin={false}/>},
    {path: '/articles' , element: <Articles/>},
]

export default routes