import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./view/home/home";
import Login from "./view/login/login";
import Register from "./view/register/register";

import './App.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/signin" component={Login}/>
                    <Route exact path="/signup" component={Register}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
