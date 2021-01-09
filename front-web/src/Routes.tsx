import { BrowserRouter, Switch } from "react-router-dom";

import { Route } from "react-router-dom"; // <BrowserRouter <Switch>
import Home from "./Home";
import Navbar from "./Navbar/Index";
import Orders from "./Orders";

function Routes(){
    return(
        <BrowserRouter>
        <Navbar/>
            <Switch>
                <Route path="/orders">
                    <Orders/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;