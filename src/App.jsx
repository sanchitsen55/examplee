import Navbar from './Home/nav';
import Footer from './Home/Footer';
import First from  './Components/first'
import Second from  './Components/second'
import Third from './Components/third'
import Fourth from './Components/fourth'

function App() {
  return (
    <>
      <Navbar />
      <First /> {/* Capitalized usage */}
      <Second /> {/* Capitalized usage */}
      <Third/>
      <Fourth/>
      <Footer />
    </>
  );
}

export default App;
