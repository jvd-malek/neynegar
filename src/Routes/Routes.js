import Article from "../Pages/Article";
import ArticlePage from "../Pages/ArticlePage";
import Basket from "../Pages/Basket";
import Category from "../Pages/Category";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Product from "../Pages/ProductPage";


const routes = [
    {path: '/' , element: <Home/>},
    {path: '/caligraphic-product' , element: <Category header='محصولات خوشنویسی' txt2='فروش ابزار و لوازم خوشنویسی خاص' />},
    {path: '/painting-product' , element: <Category header='محصولات نقاشی' txt2='فروش ابزار و لوازم نقاشی خاص' />},
    {path: '/traditional-product' , element: <Category header='محصولات هنر‌های سنتی' txt2='فروش ابزار و لوازم هنر‌های سنتی' />},
    {path: '/login' , element: <Login isLogin={true}/>},
    {path: '/register' , element: <Login isLogin={false}/>},
    {path: '/articles' , element: <ArticlePage/>},
    {path: '/article' , element: <Article/>},
    {path: '/basket' , element: <Basket/>},
    {path: '/product' , element: <Product/>},
]

export default routes