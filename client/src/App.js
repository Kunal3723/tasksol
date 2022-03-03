import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

function App() {
  const check = useSelector((state) => state.check);
  const trigger = true;
  const message = "Wrong Credentials";

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
          {!check && <Modal trigger={trigger} message={message} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
