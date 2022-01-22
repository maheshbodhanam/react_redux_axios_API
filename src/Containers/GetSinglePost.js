import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { GET_SINGLE_POST } from "../Actions/PostActions";

const GetSinglePost = () => {
  const post = useSelector((state) => state.singlepost);
  console.log("sigle", post);
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchSinglePost = async () => {
    const response = await axios
      .get(`https://hashtags-n-mentions.herokuapp.com/api/post/${id}`)
      .then((response) => {
        dispatch(GET_SINGLE_POST(response.data.post));
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };

  useEffect(() => {
    fetchSinglePost();
  }, []);

  return (
    <div className="container">
      <div className="col-md-6 shadow mx-auto p-5 mt-5">
        <div className="border border-success p-3 rounded">
          <div className="card-header bg-success text-white">
            <h2>{post.title}</h2>
          </div>
          <div className="mt-2">
            <p>
              {" "}
              Posted On :{" "}
              {new Intl.DateTimeFormat("en-IN", {
                year: "numeric",
                month: "long",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              }).format(post.createdAt)}
            </p>
          </div>
          <div className="card-body">
            <p className="card-title">{post.content}</p>
          </div>

          <Link to="/GetAllPosts">
            <button className="btn btn-primary px-5 mb-3 mx-3">Back</button>
          </Link>

          <Link to={`/e/${post._id}`}>
            <button className="btn btn-warning px-5 mb-3">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetSinglePost;
