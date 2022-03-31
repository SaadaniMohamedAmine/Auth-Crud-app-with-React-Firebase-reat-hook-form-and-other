import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Helmet } from "react-helmet";

const Feed = ({ setIsAuth }) => {
  const user = JSON.parse(localStorage.getItem("data"));
  const logOut = async () => {
    signOut(auth);
    localStorage.clear();
    setIsAuth(false);
  };
  return (
    <div className="feed">
      <Helmet>
        <title>Blog Post | {user.displayName}</title>
      </Helmet>
      <div className="wrapper mx-auto my-5">
        <div className="profile">
          <img src={user.photoURL} className="thumbnail" alt="profile" />
          <div className="check">
            <i className="fas fa-check"></i>
          </div>
          <h3 className="name">{user.displayName}</h3>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            aliquam aliquid porro!
          </p>
          <div className="d-flex justify-content-between">
            <Link className="btn btn-primary feed-btn" to="/newPost">
              Create a post
            </Link>
            <button type="button" className="btn feed-btn" onClick={logOut}>
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
