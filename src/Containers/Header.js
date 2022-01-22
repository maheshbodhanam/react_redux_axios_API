import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      {/*  <ul className="nav justify-content-end p-5 bg-dark mb-2">
        <li className="nav-item">
          {" "}
          <Link className="nav-link" to="/LatestPosts">
            LatestPosts
          </Link>
        </li>
        <li className="nav-item">
          {" "}
          <Link className="nav-link" to="/GetAllPosts">
            Allposts
          </Link>{" "}
        </li>
        <li className="nav-item">
          {" "}
          <Link className="nav-link" to="/AddNewPost">
            NewPost
          </Link>
        </li>
      </ul> */}

      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Posts</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/GetAllPosts">
                <button className="btn btn-warning mx-3">All Posts</button>
              </Link>
              <Link to="/AddNewPost">
                <button className="btn btn-warning">New Post</button>
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
