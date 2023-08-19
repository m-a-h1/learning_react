
import "./App.css";
// import LearningReact from "./LearnReact";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./comments/layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Photoes from "./pages/photoes/photoes"
import Todoes from "./pages/todoes/todoes"
import Users from "./pages/users/users"
import Albumes from "./pages/albumes/albumes"
import Posts from "./pages/postes/posts"
// import {Provider} from "react-redux"

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/photoes" element={<Photoes/>}></Route>
        <Route path="/albumes" element={<Albumes/>}></Route>
        <Route path="/posts" element={<Posts/>}></Route>
        <Route path="/todoes" element={<Todoes/>}></Route>
        {/* <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Route>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
