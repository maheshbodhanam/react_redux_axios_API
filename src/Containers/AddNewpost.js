import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { ADD_NEW_POST } from "../Actions/PostActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddNewpost = () => {
  const newPost = useSelector((state) => state.newPost);

  console.log("new", newPost);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const onSubmitPost = (e) => {
    e.preventDefault();

    setSuccess(false);

    const date = new Date();
    const createdAt = date.getTime();

    const postData = {
      title,
      content,
      createdAt,
    };

    axios
      .post(`https://hashtags-n-mentions.herokuapp.com/api/post`, postData)
      .then((response) => {
        toast.success("Post Created Successfully");
        dispatch(ADD_NEW_POST(response.data.post));
        console.log("data", response.data.post);
        setTitle("");
        setContent("");

        setSuccess(true);
        navigate("/GetAllPosts");
      });
  };

  return (
    <div>
      <div className="container">
        <div className="col-md-6 shadow mx-auto p-5 mt-5  rounded">
          <form action="" onSubmit={onSubmitPost}>
            <div className="form-group">
              <input
                value={title}
                type="text"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Your Title"
                className="form-control my-3"
                id=""
              />
            </div>
            <div className="form-group">
              <textarea
                value={content}
                type="text"
                name="content"
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter Your Content"
                className="form-control my-2"
                id=""
              />{" "}
              <button className="btn btn-primary btn-block col-12 my-3">
                SUBMIT
              </button>
              <Link to="/GetAllPosts">
                <button className="btn btn-warning btn-block col-12 my-3">
                  CANCEL
                </button>{" "}
              </Link>
            </div>
          </form>
          <span>{success && "post is created"}</span>
        </div>
      </div>
    </div>
  );
};

export default AddNewpost;
