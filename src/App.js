import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/home";
import Contacts from "./pages/contacts";
import Clients from "./pages/clients";
import About from "./pages/about";



function App() {
  return (
    <div>
<BrowserRouter>
    <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/about'} element={<About />}/>
        <Route path={'/clients'} element={<Clients />}/>
        <Route path={'/contacts'} element={<Contacts />}/>
    </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
