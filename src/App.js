import Footer from "./components/Footer";
import FormComponent from "./components/FormComponent";
import HeaderSection from "./components/HeaderSection";
import ImpressionenScreen from "./components/ImpressionenScreen";
import KonzertScreen from "./components/KonzertScreen";
import Phonova from "./components/Phonova";
import Termine from "./components/Termine";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <Phonova />
      <Termine />
      <KonzertScreen />
      <ImpressionenScreen />
      <FormComponent />
      <Footer />
    </div>
  );
}

export default App;
