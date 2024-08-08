import Catalog from "./components/catalog/Catalog";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { ModalDelivery } from "./components/modal/ModalDelivery";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <ModalDelivery />
      <Footer />
    </>
  );
}

export default App;
