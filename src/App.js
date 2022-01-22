import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetAllPosts from "./Containers/GetAllPosts";
import Header from "./Containers/Header";
import AddNewpost from "./Containers/AddNewpost";
import GetSinglePost from "./Containers/GetSinglePost";
import AddNewUpdatedPost from "./Containers/AddNewUpdatedPost";
import LatestPosts from "./Containers/LatestPosts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <ToastContainer />

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/GetAllPosts" element={<GetAllPosts />} />
          <Route path="/AddNewPost" element={<AddNewpost />} />
          <Route path="/p/:id" element={<GetSinglePost />} />
          <Route path="/e/:id" element={<AddNewUpdatedPost />} />
          <Route path="/LatestPosts" element={<LatestPosts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
