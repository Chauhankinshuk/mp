import { useState } from 'react'
import { Route, Routes ,Router,NavLink,Link} from 'react-router-dom';
import  Home  from './pages/home';
import Collections from './pages/collections';
import About from './pages/about';
import Contact from './pages/contact';
import Product from './pages/product';
import BecomeSeller from './pages/becomeSeller';
import Login from './pages/login';
import Cart from './pages/cart';
import Signup from './pages/signup';
import Nav from './components/nav';
import Footer from './components/footer';
import './App.css'
import SearchBar from './components/searchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlaceOrder from './pages/placeOrder';
import Orders from './pages/orders';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >   
           <ToastContainer/>
           <Nav></Nav>
           <SearchBar></SearchBar>
           <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/collections" element={<Collections/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/product/:productId" element={<Product/>}/>
              <Route path="/becomeSeller" element={<BecomeSeller/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/placeOrder" element={<PlaceOrder/>}/>
              <Route path="/orders" element={<Orders/>}/>
          </Routes>   

          <Footer></Footer>
    </div>
  )
}

export default App
