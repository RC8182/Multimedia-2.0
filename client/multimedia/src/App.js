import { Route, Routes } from "react-router-dom";
import { Page } from "./pages/Page";
import './css/index.css';
import { Home } from "./pages/Home";
import NavBar from "./Navbar/NavBar.tsx";






function App() {

  return (
    <div >
       <NavBar /> 

    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/leo" element={ <Page name='leo'/> } />
      <Route path="/vlad" element={ <Page name='vlad'/> } />
    </Routes>
      
      
    </div>
  );
}

export default App;
