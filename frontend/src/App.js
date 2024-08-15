import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// user pages
import About from './user_panel/pages/about/index';
import Home from './user_panel/pages/home/index';
import Cart from './user_panel/pages/cart/index';
import Contact from './user_panel/pages/contact/index';
import Category from './user_panel/pages/product_category/index';
import Detail from './user_panel/pages/product_detail/index';
import Overview from './user_panel/pages/product_overview/index';
import Login from './user_panel/pages/login';
import Register from './user_panel/pages/register';
import NotFound from './user_panel/pages/notFound';
import OrderPage from './user_panel/pages/contact/components/OrderPage';
import General from './user_panel/pages/contact/components/General';

// user layouts
import ProductsCart from './user_panel/pages/cart/components/Products';

// admin pages
import Dashboard from './admin_panel/pages/dashboard/index';
// content
import ContentManagement from './admin_panel/pages/content/index';
import AboutContent from './admin_panel/pages/content/components/About';
import EditTestimonial from './admin_panel/pages/content/components/EditTestimonial';
import AddTestimonial from './admin_panel/pages/content/components/AddTestimonial';
import HomeContent from './admin_panel/pages/content/components/Home';
import AddHeaderSlide from './admin_panel/pages/content/components/AddHeaderSlide';
import EditHeaderSlide from './admin_panel/pages/content/components/EditHeaderSlide';
// customers
import Customers from './admin_panel/pages/customers/index';
import AllCustomers from './admin_panel/pages/customers/components/AllCustomers';
import Chat from './admin_panel/pages/customers/components/Chat';
// Products
import Products from './admin_panel/pages/products/index';
import AllProducts from './admin_panel/pages/products/components/AllProducts';
import ProductCategories from './admin_panel/pages/products/components/ProductCategories';
import AddProduct from './admin_panel/pages/products/components/AddProduct';
import AddCategory from './admin_panel/pages/products/components/AddCategory';
import EditCategory from './admin_panel/pages/products/components/EditCategory';
import LoginAdmin from './admin_panel/pages/login/index';
import RegisterAdmin from './admin_panel/pages/register/index';
// Notfound
import NotFoundAdmin from './admin_panel/pages/NotFound';
// admin layouts
import AdminRootLayout from './admin_panel/layout/RootLayout';
import Reviews from './admin_panel/pages/reviews';
import Orders from './admin_panel/pages/orders';
import OrderDetails from './admin_panel/pages/orders/components/OrderDetails';
import EditProduct from './admin_panel/pages/products/components/EditProduct';
import EmailVerification from './user_panel/pages/verifyEmail/verifyemail';
import ResetPassword from './user_panel/pages/ResetPassword/EnterNewPassWord/reset';
import EnterEmail from './user_panel/pages/ResetPassword/enterEmail/enterEmail';
// import RootLayout from './user_panel/layout/RootLayout';
// creating various routers
const router = createBrowserRouter(
  
  createRoutesFromElements(
    // rootlayout
    <>
      <Route path="/">
        {/* ==============================
      ==========user Routes=============
      ============================== */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path=":name" element={<Category />} />
        <Route path="buy/:name" element={<Detail />} />
        <Route path="overview/:name" element={<Overview />} />
        <Route path="cart" element={<Cart />} />
        {/* contact */}
        <Route path="contact" element={<Contact />}>
          <Route path="general" element={<General />} />
          <Route path="order" element={<OrderPage />} />
        </Route>
        {/* products */}
        <Route path="products" element={<ProductsCart />} />
      </Route>
      {/* login and register */}
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login redirectTo="/" />} />
      <Route path="verify-reset/verify" element={<EmailVerification/>}/>
      <Route  path="verify-reset/reset-password/email" element={<EnterEmail/>}/>
      <Route path="verify-reset/reset-password/new-password" element={<ResetPassword/>}/>

      {/* ==============================
      ==========Admin Routes============
      ============================== */}
      <Route path="/admin" element={<AdminRootLayout />}>
        <Route index element={<Dashboard />} />
        {/* products */}
        <Route path="products" element={<Products />}>
          <Route path="all" element={<AllProducts />}></Route>
          <Route path="categories" element={<ProductCategories />}></Route>
          <Route path="add" element={<AddProduct />}></Route>
          <Route path="edit/:id" element={<EditProduct />}></Route>
          <Route path="categories/add" element={<AddCategory />} />
          <Route path="categories/edit/:id" element={<EditCategory />} />
        </Route>
        {/* orders */}
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:id" element={<OrderDetails />} />

        {/* customers */}
        <Route path="customers" element={<Customers />}>
          <Route path="all" element={<AllCustomers />} />
          <Route path="chat" element={<Chat />} />
        </Route>

        {/* analytics */}
        <Route path="analytics" element={<h1>analytics</h1>} />

        {/* content */}
        <Route path="content" element={<ContentManagement />}>
          {/* home */}
          <Route path="home" element={<HomeContent />} />
          <Route path="home/add" element={<AddHeaderSlide />} />
          <Route path="home/edit/:id" element={<EditHeaderSlide />} />
          {/* about */}
          <Route path="about" element={<AboutContent />} />
          <Route path="about/add" element={<AddTestimonial />} />
          <Route path="about/edit/:id" element={<EditTestimonial />} />
        </Route>

        {/* reviews */}
        <Route path="reviews" element={<Reviews />} />
        {/* promotions */}
        <Route path="promotions" element={<h1>promotions</h1>} />
        {/* notfound */}
        <Route path="*" element={<NotFoundAdmin />} />
      </Route>
      {/* admin login and register */}
      <Route path="/admin/login" element={<LoginAdmin />} />
      <Route path="/admin/register" element={<RegisterAdmin />} />
      
      {/* notfound */}
      // <Route path="*" element={<NotFound />} />
      // <Route path='/verify-reset' element={<EmailVerification/>}>
      
      // </Route>
    </>
  )
);

function App() {
  
  return <RouterProvider router={router} />;
}

export default App;
