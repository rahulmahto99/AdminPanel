import AddUser from "./pages/AddUser";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/adduser" element={<AddUser/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
