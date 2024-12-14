import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing"
import AboutUsPage from "../pages/about-us/about-us.page";
import AllProductGridPage from "../pages/product/all-products.page";
import CategoryWiseProductList from "../pages/category/category-product-list";
import HomePageLayout  from "../pages/layout/home-layout.page";
import LoginPage from "../pages/auth/login/login.page";
import RegisterPage from "../pages/auth/register/register.page";
import NotFoundPage from "../pages/errors/not-found.page";

const Routing = () => {
    return (
        <>
            {/*<RouterProvider router={router} /> */}
            <BrowserRouter>
             <Routes>
                    <Route path="/" element={<HomePageLayout />}>
                        <Route index element={<LandingPage />} ></Route>
                        <Route path='about-us' element={<AboutUsPage />} ></Route>
                        <Route path="product" element={<AllProductGridPage />} ></Route>
                        <Route path="category/:slug" element={<CategoryWiseProductList />} ></Route>
                        <Route path="login" element={<LoginPage />} ></Route>
                        <Route path="register" element={<RegisterPage />} ></Route>
                        <Route path="*" element={<NotFoundPage />} ></Route> 
                    </Route>  
             </Routes>
                    
            </BrowserRouter>
        </>

    );
};



export default Routing;