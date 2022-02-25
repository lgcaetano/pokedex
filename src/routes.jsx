import Home from "./pages/Home"
import Pokemon from "./pages/Pokemon"
import Favorites from "./pages/Favorites"
import Quiz from "./pages/Quiz"
import { Routes as Switch, Route } from "react-router-dom"

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/pokemon/:id" exact element={<Pokemon/>}/>
            <Route path="/favorites" exact element={<Favorites/>}/>
            <Route path="/quiz" exact element={<Quiz/>}/>
        </Switch>
    )
}

export default Routes 
