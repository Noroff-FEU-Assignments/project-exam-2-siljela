import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from "./components/layout/Navigation";
import Footer from './components/layout/Footer';
import { AuthProvider } from "./components/context/AuthContext";
import Switcher from './components/layout/Switch';

function App() {

  return (
      <AuthProvider>
        <a href="#main" className="goToMain">Go to main content</a>
        <Router>
          <header>
            <Navigation />
          </header>
          <main id="main">
            <Switcher />
          </main>
        </Router>
        <footer>
          <Footer />
        </footer>
      </AuthProvider>
  );
}

export default App;
