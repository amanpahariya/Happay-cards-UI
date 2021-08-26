import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Cart from "./components/Cart/Cart";

function App() {

    return (
        <>
            <BrowserRouter>

                <Switch>
                    <Route exact path={"/"} component={HomePage}/>
                    <Route path={"/cart"} component={Cart}/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
