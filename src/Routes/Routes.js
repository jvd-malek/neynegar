import ArticlePage from "../Pages/ArticlePage";
import Basket from "../Pages/Basket";
import Category from "../Pages/Category";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Product from "../Pages/ProductPage";
import CmsPage from "../Pages/CmsPage"
import CmsChild from "../Pages/CmsChild";
import Account from "../Pages/Account";
import AccountChild from "../Pages/AccountChild";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/caligraphic-product', element: <Category header='محصولات خوشنویسی' txt2='فروش ابزار و لوازم خوشنویسی خاص' /> },
    { path: '/painting-product', element: <Category header='محصولات نقاشی' txt2='فروش ابزار و لوازم نقاشی خاص' /> },
    { path: '/traditional-product', element: <Category header='محصولات هنر‌های سنتی' txt2='فروش ابزار و لوازم هنر‌های سنتی' /> },
    { path: '/login', element: <Login isLogin={true} /> },
    { path: '/register', element: <Login isLogin={false} /> },
    { path: '/articles', element: <Category header='مقالات' txt2='با نی‌نگار به روز باشید.' article={true} /> },
    { path: '/article', element: <ArticlePage /> },
    { path: '/basket', element: <Basket /> },
    { path: '/product', element: <Product /> },
    {
        path: '/cms/*', element: <CmsPage />,
        children: [
            { path: '', element: <CmsChild type='home' /> },
            { path: 'products', element: <CmsChild type='products' /> },
            { path: 'articles', element: <CmsChild type='articles' /> },
            { path: 'comments', element: <CmsChild type='comments' /> },
            { path: 'orders', element: <CmsChild type='orders' /> },
            { path: 'discounts', element: <CmsChild type='discounts' /> },
        ]
    },
    { path: '/account', element: <Account /> },
]

export default routes