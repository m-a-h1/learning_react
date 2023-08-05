import logo from "./logo.svg";
import "./App.css";
import LearningReact from "./LearnReact";
import { useEffect, useState } from "react";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Comments from "./pages/comments/Comments";

function App() {
  const [customerList, setCustomerList] = useState([]);

  const callApi = () => {
    return [1, 2, 3, 4, 5];
  };

  const getCustomer = () => {
    const data = callApi();

    setCustomerList(data);
  };

  console.log(">>>>> here in component ");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/comments" element={<Comments />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
