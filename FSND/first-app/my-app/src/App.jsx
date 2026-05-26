import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'

import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import Hello from "./Hello"
import Condition from "./Condition"
import Props from "./Props"
import State from "./State"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Products from "./Products"
import Phone from "./Phone"
import Laptop from ".//Laptop"
import Bye from './Bye'

function App() {
 
  function User(){
    console.log(useParams())
    const {id} = useParams()
    return <h2>Usre profile for id: {id}</h2>
  }

  function NotFound(){
    return <h2>404 - page not found</h2>
  }

  return (
    <>
      <BrowserRouter>
      <h1>React Router Example</h1>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/About">About</Link> |
        <Link to="/Contact">Contact</Link> |
        <Link to="/user/10">User</Link> |
        <Link to="/products">Products</Link> 
      </nav>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/user/:id' element={<User/>} />
          <Route path='/products' element={<Products/>} >
              <Route path='phone' element={<Phone/>} />
              <Route path='laptop' element={<Laptop/>} />
          </Route>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>

      {/* <Hello/>
      <Condition/>
      <Props name="bhumi" age={19} city="ahmedabad" />
      <Props name="bhumi" />
      <State />} */}
      
    </>
  )
}

export default App
