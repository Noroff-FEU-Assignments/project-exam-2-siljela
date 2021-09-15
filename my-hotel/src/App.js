import "./App.css";
import HeaderContainer from "./components/layout/HeaderContainer";
import Navigation from "./components/layout/Navigation";
import Footer from './components/layout/Footer';

function App() {

  return (
    <>
      <main>
        <HeaderContainer>
          <Navigation />
        </HeaderContainer>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
