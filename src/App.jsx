import { Routes , Route , BrowserRouter } from "react-router-dom";
import Authentication from "./pages/Authentication";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="login" element={<Authentication />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
