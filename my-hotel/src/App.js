import "./App.css";
import HeadingContent from "./components/content/header/HeadingContent";
import Title from "./components/content/header/Title";
import Container from './components/content/layout/Container';
import Nav from './components/content/header/navigation/Nav';
import Link from './components/content/header/navigation/Link';
import Grids from './components/content/grids/Grids';
import ThreeGrids from './components/content/grids/ThreeGrids';
import FourGrids from './components/content/grids/FourGrids';
import Text from './components/objects/Text';
import FooterContent from './components/content/footer/FooterContent';
import Button from "./components/objects/Button";

function App() {
  return (
    <Container>
      <HeadingContent>
        <Title content="Title"/>
        <Nav variant="top">
          <Link name="Top-nav"/>
          <Link name="Top-nav"/>
        </Nav>
        <Nav>
          <Link name="Homepage"/>
          <Link name="Contact us" variant="active"/>
        </Nav>
        </HeadingContent>
        <Grids>
          <ThreeGrids />
        </Grids>
        <Grids>
          <FourGrids />
        </Grids>
        <Grids>
          <Text content="Test"/>
        </Grids>
        <FooterContent />
        <Button />
    </Container>
  );
}

export default App;
