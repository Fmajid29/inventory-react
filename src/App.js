import "./App.css";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import Login from "./Pages/Login/Login";
import AddProduct from "./Pages/AddProduct/AddProduct";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { app } from "./firebaseconfig";

function App() {
  console.log(app);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/adminpanel" element={<AdminPanel />} />
          <Route exact path="/addproduct" element={<AddProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
