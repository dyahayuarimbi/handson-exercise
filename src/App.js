import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Trending from "./pages/trending";
import { Provider } from "react-redux";
import Store from "./store";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/trending" component={Trending} />
          <Route path="/search" component={Search} />

          <Route path="/">
            <h1>Welcome to our homepage</h1>
            <Link to="/search">Search</Link>
            <Link to="/trending">Trending</Link>
          </Route>
        </Switch>
      </Router>
      {/* <Router>
      <Switch>
      <Route path='/trending' component={Trending} />
      <Route exact path='/' component={Search} />
          </Switch>
          </Router> */}

      {/* <Router>
        <Switch>
          <Route path="/Search"> */}
      {/* <Search/> */}
      {/* </Route>
          <Route path="/Trending">
            <Trending/>
          </Route>
        </Switch>
      
      </Router> */}
    </Provider>
  );
}

export default App;