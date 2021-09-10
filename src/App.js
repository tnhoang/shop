import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
