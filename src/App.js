import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../src/components/Home";
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import Logout from '../src/components/Logout';
import Navigation from "../src/components/navigation";
import OddajRzeczy from '../src/components/OddajRzeczy';


const App = () => {
  return (
    <Router>
        <Navigation/>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/oddaj-rzeczy' component={OddajRzeczy}/>
        </div>
    </Router>
  );
}

export default App;
