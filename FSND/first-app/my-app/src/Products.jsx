import { Link, Outlet } from "react-router-dom"
export default function Products(){
   return(
    <>
        <h2>Product page</h2>
        <nav>
            <Link to="Phone">Phone</Link> |
            <Link to="Laptop">Laptop</Link>
        </nav>
        <Outlet/>
    </>

   )
}