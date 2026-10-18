import { Routes , Route , BrowserRouter } from "react-router-dom"
import Authentication from './pages/Authentication'
import Home from './pages/HomePage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="login" element={<Authentication />}></Route>
          <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
