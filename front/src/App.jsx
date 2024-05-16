import { BrowserRouter, Routes, Route } from "react-router-dom";
import './scss/main.scss'
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import AdminHome from "./pages/AdminHome";
import AdminUpdate from "./pages/AdminUpdate";
import Detail from "./pages/Detail";

function App() {


  return (
    <>
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
         
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="detail/:id" element={<Detail />} />

        </Route>
        <Route path="/admin" element={<AdminLayout />}>
    
          <Route path="/admin/adminhome" element={<AdminHome />} />
          <Route path="/admin/adminupdate" element={<AdminUpdate/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
