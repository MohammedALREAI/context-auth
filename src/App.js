import './App.css';
import AllRouter from './AllRouter';
import Navbar from './components/Navbar';
import { UserAuth } from './context/UserAuth';
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/Login";
import Aboutus from "./components/Aboutus";
function App()
{
  return (
    <>
      <UserAuth>
        <Navbar />

        {/* <AllRouter /> */}
        <Routes>

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Aboutus />} />

        </Routes>
      </UserAuth>

    </>
  );
}

export default App;
