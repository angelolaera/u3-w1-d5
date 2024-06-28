import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import CustomGallery from "./components/CustomGallery";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App bg-container">
      <Container>
        <CustomNavbar />
        <CustomGallery />
      </Container>
      <CustomFooter />
    </div>
  );
}

export default App;
