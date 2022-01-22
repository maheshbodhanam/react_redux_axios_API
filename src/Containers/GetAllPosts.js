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
    console.log("all", response.data.posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <section className="main-card-container my-5 ">
          {Posts.map((p, index) => (
            <div className="card-container">
              <div
                key={p._id}
                className="card text-white  mb-5 text-break border-dark"
              >
                <Link
                  key={index}
                  to={`/p/${p._id}`}
                  style={{
                    textDecoration: "none",
                    width: "100%",
                  }}
                >
                  <div className="card-header bg-dark text-white">
                    {p.title}
                  </div>
                  <div className="p-2">
                    <p>
                      Posted on :{" "}
                      {new Intl.DateTimeFormat("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      }).format(p.createdAt)}
                    </p>
                  </div>
                  <div className="card-body text-decoration-none">
                    <p className="card-title text-dark text-center">
                      {p.content}
                    </p>
                  </div>
                  <center>
                    {" "}
                    <button className="btn btn-primary mb-3 px-5">VIEW</button>
                  </center>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default GetAllPosts;
