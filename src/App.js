import './App.css';
import Home from './pages/Home';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import RootLayout from './components/root/RootLayout';
import Product from './pages/Product';
import Error from './pages/Error';
import About from './pages/About';
import Contacts from './pages/Contacts';


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Contacts' element={<Contacts/>}></Route>
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
