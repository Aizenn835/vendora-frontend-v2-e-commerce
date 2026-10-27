import { Routes , Route , BrowserRouter } from "react-router-dom"
import Authentication from './pages/Authentication'
import Seller from "./components/Seller/Seller";
import Home from './pages/HomePage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="login" element={<Authentication />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/seller" element={<Seller/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
