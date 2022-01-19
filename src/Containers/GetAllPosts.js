import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { GET_ALL_POSTS } from "../Actions/PostActions";

const GetAllPosts = () => {
  const Posts = useSelector((state) => state.AllPosts.posts);

  const dispatch = useDispatch();

  const fetchPosts = async () => {
    const response = await axios
      .get("https://hashtags-n-mentions.herokuapp.com/api/posts")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(GET_ALL_POSTS(response.data.posts));
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(Posts);

  return (
    <div className="allpost">
      <center>
        {Posts.map((p, index) => (
          <div key={index} className="card text-white  mb-3">
            <Link to={`/p/${p._id}`}>
              <div className="card-header">{p.title}</div>
              <div className="card-body">
                <h5 className="card-title">{p.content}</h5>
                <h5 className="card-title">{p.createdAt}</h5>
              </div>
            </Link>
          </div>
        ))}
      </center>
    </div>
  );
};

export default GetAllPosts;
