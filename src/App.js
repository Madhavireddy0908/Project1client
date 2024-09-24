import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import Routing from "./Routing";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routing/>
      <Footer/>
    </div>
  );
}

export default App;
