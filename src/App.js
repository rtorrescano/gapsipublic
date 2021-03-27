//Importar el uso de componentes
import Header from './components/Header';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Products from './components/Products';


function App() {
  return (
    <main role="main">
      <div className="conteiner">
        <Header />
        <Welcome />
        <Products />        
        <Footer />
      </div>
    </main>
    
  );
}

export default App;
