import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <Link to="/GetAllPosts">Allposts</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/AddNewPost">NewPost</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
