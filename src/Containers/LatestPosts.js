import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const LatestPosts = () => {
  const newPost = useSelector((state) => state.newpost);

  //const { id } = useParams();
  console.log(newPost);
  return (
    <div>
      <h1>{newPost}</h1>
    </div>
  );
};

export default LatestPosts;
