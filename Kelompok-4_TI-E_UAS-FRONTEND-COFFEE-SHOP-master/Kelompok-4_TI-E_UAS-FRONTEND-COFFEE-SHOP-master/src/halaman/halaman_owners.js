import './../App.css';
import '../assets/css/style.css';

import Navbar from '../components/navbar';
import Owner from '../components/owner/owners';
import Footer from '../components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Owner/>
      <Footer/>
    </div>
  );
}

export default App;