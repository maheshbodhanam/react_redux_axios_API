import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GET_SINGLE_POST } from "../Actions/PostActions";
import { ADD_UPDATED_POST } from "../Actions/PostActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddNewUpdatedPost = () => {
  const navigate = useNavigate();

  const post = useSelector((state) => state.singlepost);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const { id } = useParams();
  const dispatch = useDispatch();

  /*const fetchSinglePost = async () => {
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
  }, []);*/

  const onUpdatehandle = (e) => {
    e.preventDefault();
    const date = new Date();
    const createdAt = date.getTime();
    const updateData = {
      title,
      content,
      createdAt,
    };
    axios
      .put(
        `https://hashtags-n-mentions.herokuapp.com/api/post/${id}`,
        updateData
      )
      .then((response) => {
        dispatch(ADD_UPDATED_POST(updateData));
        console.log("update", response);
        toast.success("updated successfully");
        navigate(`/p/${id}`);
      });
  };
  return (
    <div>
      <div className="container">
        <div className="col-md-6 shadow mx-auto p-5 mt-5 rounded ">
          <form action="" onSubmit={onUpdatehandle}>
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
              />
              <Link to={`/p/${id}`}>
                <button className="btn btn-danger my-3 mx-3">CANCEL</button>
              </Link>
              <button className="btn btn-primary my-3">UPDATE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewUpdatedPost;
