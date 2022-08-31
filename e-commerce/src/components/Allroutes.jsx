

import { Route,Routes} from "react-router-dom"
import { Cart } from "./Cart"
import { HomePage } from "./Home"
import { Products } from "./Product"

export const AllRoutes=()=>{
    return <>
    <Routes>
        <Route element={<HomePage/>} path="/"></Route>
        <Route element={<Cart/>} path="/cart"></Route>
        <Route element={<Products/> } path="/products"></Route>
    </Routes>
    </>
}