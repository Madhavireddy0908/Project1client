import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import Routing from "./Routing";
import { createContext, useState } from 'react';
export let Store = createContext();

function App() {
  const [token,setToken] = useState("");
  return (
    <Store.Provider value={[token, setToken]}>
      <Header/>
      <Routing/>
      <Footer/>
    </Store.Provider>
  );
}

export default App;