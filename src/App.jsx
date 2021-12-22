import "./App.scss";
import { Switch, Route } from "react-router-dom";
//   Pages---
import Home from "./Pages/Home/Home";
import Direction from "./Pages/Direction/Direction";
import Order from "./Pages/Order/Order";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Regiser";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Home" component={Home} exact />
        <Route path="/Direction" component={Direction} exact />
        <Route path="/Order" component={Order} exact />
        <Route path="/" component={Login} exact />
        <Route path="/Registration" component={Register} exact />
      </Switch>
    </div>
  );
}
export default App;
