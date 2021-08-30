import "./App.css";
import HeaderContainer from "./components/layout/HeaderContainer";
import Layout from "./components/layout/Layout";
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <main>
        <HeaderContainer>
          <Layout />
        </HeaderContainer>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
