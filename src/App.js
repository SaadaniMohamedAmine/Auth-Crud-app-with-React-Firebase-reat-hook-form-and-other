import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Posts from "./components/Posts";
import Login from "./components/Login";
import PrivateRoute from "./route-config/PrivateRoute";
import CreatePost from "./components/CreatePost";
import NotFound from "./components/NotFound";
import Post from "./components/Post";

const App = () => {
  //the root component for the application
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    setIsAuth(localStorage.getItem("isAuth"));
  }, []);
  return (
    <BrowserRouter>
      <Menu isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/feed" element={<PrivateRoute setIsAuth={setIsAuth} />} />
        <Route path="newPost" element={<CreatePost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
