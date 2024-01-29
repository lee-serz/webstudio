import "./App.css";
import About from "./components/About/About";
import Cases from "./components/Cases/Cases";
import Footer from "./components/Footer/Footer";
import CompleteForm from "./components/Form/CompleteForm";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

function App() {
  const SectionStyle = {
    height: "100vh",
    maxWidth: "1110px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  return (
    <div className="wrapper">
      <Fullpage className="container">
        <FullPageSections>
          <FullpageSection style={SectionStyle}>
            <Header />
            <Home />
          </FullpageSection>

          <FullpageSection style={SectionStyle}>
            <About />
          </FullpageSection>
          <FullpageSection style={SectionStyle}>
            <Cases />
          </FullpageSection>
          <FullpageSection style={SectionStyle}>
            <Footer />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}

export default App;
