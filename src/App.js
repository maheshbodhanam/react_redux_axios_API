import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetAllPosts from "./Containers/GetAllPosts";
import Header from "./Containers/Header";
import AddNewpost from "./Containers/AddNewpost";

import "./App.css";
import GetSinglePost from "./Containers/GetSinglePost";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/GetAllPosts" element={<GetAllPosts />} />
          <Route path="/AddNewPost" element={<AddNewpost />} />
          <Route path="/p/:id" element={<GetSinglePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
