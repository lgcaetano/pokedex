import Home from "./pages/Home"
import Pokemon from "./pages/Pokemon"
import { Routes as Switch, Route } from "react-router-dom"

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/pokemon/:id" exact element={<Pokemon/>}/>
        </Switch>
    )
}

export default Routes 
