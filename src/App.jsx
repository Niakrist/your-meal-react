import Catalog from "./components/catalog/Catalog";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
    </>
  );
}

export default App;
