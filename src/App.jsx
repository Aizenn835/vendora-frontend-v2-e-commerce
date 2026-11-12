import { Routes , Route , BrowserRouter } from "react-router-dom"
import Authentication from './pages/Authentication'
import SellerApprovePage from "./pages/SellerApprovePage"
import Seller from "./pages/SellerPage"
import Home from './pages/HomePage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="login" element={<Authentication />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/seller" element={<Seller/>}></Route>
          <Route path="/seller-status" element={<SellerApprovePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
