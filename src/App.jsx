import { Routes , Route , BrowserRouter } from "react-router-dom"
import Authentication from './pages/Authentication'
import SellerApprovePage from "./pages/SellerApprovePage"
import Seller from "./pages/SellerPage"
import OAuthCallback from "./components/Auth/OAuthCallBack"
import Home from './pages/HomePage'
import { RoleRoute } from './routes/RoleRoute.jsx'
import Overview from './components/Admin/Overview/Overview.jsx'
import SellerApplicationAdmin from './components/Admin/SellerApplicationAdmin/SellerApplicationAdmin.jsx'
import Admin from "./pages/AdminPage.jsx"
import Sales from "./components/Admin/Sales/Sales.jsx"
import Commission from "./components/Admin/Commision/Commision.jsx"
import SettingsAdmin from "./components/Admin/SettingsAdmin/SettingsAdmin.jsx"
import { Navigate } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='oauth/callback' element={<OAuthCallback />}></Route>
          <Route path="login" element={<Authentication />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="seller" element={<Seller/>}></Route>
          <Route path="seller-status" element={<SellerApprovePage />}></Route>
          <Route element={<RoleRoute allowed={"ADMIN"}/>}>
            <Route path="admin" element={<Admin />}>
              <Route index element={<Navigate to="overview" replace />} />
              <Route path="overview" element={<Overview />}></Route>
              <Route path="seller-application" element={<SellerApplicationAdmin />}/>
              <Route path="sales" element={<Sales />}></Route>
              <Route path="commission" element={<Commission />}></Route>
              <Route path="settings" element={<SettingsAdmin />}></Route>
            </Route>
          </Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
