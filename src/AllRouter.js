import Home from "./components/Home";
import Login from "./components/Login";
import Aboutus from "./components/Aboutus";
import { Routes, Route } from "react-router-dom"


function AllRouter()
{
  const user = localStorage.getItem('user');
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact={true} path="/" element={<Home />} />
        <Route exact path="/about" element={<Aboutus />} />

      </Routes>
    </>
  );
}

export default AllRouter;
