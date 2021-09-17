import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from './components/layout/Footer';
import { Home } from "./components/home/Home";
import { Reserve } from "./components/reserve/Reserve";
import { Contact } from "./components/contact/Contact";
import { Browse } from "./components/browse/Browse";
import { LogIn } from "./components/admin/LogIn";
import { Admin } from "./components/admin/Admin";
import { Properties } from "./components/browse/Properties";
import { AuthProvider } from "./components/context/AuthContext";

function App() {

  return (
    <>
      <AuthProvider>
      <main>
          <Router>
            <Navigation />
            <Switch>
					    <Route path="/" exact component={Home} />
              <Route path="/reserve" exact component={Reserve} />
					    <Route path="/contact" component={Contact} />
              <Route path="/browse" component={Browse} />
              <Route path="/properties" component={Properties} />
              <Route path="/login" component={LogIn} />
					    <Route path="/admin" component={Admin} />
				    </Switch>
          </Router>
      </main>
      <footer>
        <Footer />
      </footer>
      </AuthProvider>
    </>
  );
}

export default App;
