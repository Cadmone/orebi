import './App.css';
import Home from './pages/Home';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import RootLayout from './components/root/RootLayout';
import Product from './pages/Product';
import Error from './pages/Error';
import About from './pages/About';
import Contacts from './pages/Contacts';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Loging from './pages/Loging';
import Signup from './pages/Signup';
import Myaccount from './pages/Myaccount';


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/product/:id' element={<ProductDetails/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Contacts' element={<Contacts/>}></Route>
    <Route path='/Cart' element={<Cart/>}></Route>
    <Route path='/Loging' element={<Loging/>}></Route>
    <Route path='/Signup' element={<Signup/>}></Route>
    <Route path='/Myaccount' element={<Myaccount/>}></Route>
    <Route path='*' element={<Error/>}></Route>
  </Route>
))
function App() {
  return (
   <>
   <RouterProvider router={router}></RouterProvider>
   </>
  );
}

export default App;
