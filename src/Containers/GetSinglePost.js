import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GET_SINGLE_POST } from "../Actions/PostActions";

const GetSinglePost = () => {
  const post = useSelector((state) => state.singlepost);

  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);
  console.log(post);

  const fetchSinglePost = async () => {
    const response = await axios
      .get(`https://hashtags-n-mentions.herokuapp.com/api/post/${id}`)
      .then((response) => {
        console.log(response.data.post);
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
    <div>
      <div className="card text-white bg-primary  mb-3">
        <div className="card-header">{post.title}</div>
        <div className="card-body">
          <h5 className="card-title">{post.content}</h5>
          <h5 className="card-title">{post.createdAt}</h5>
        </div>
      </div>
    </div>
  );
};

export default GetSinglePost;
