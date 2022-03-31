import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Blog Post | Home</title>
      </Helmet>
      <div>
        <h1>The Blog Site</h1>
        <h3>This is our Blog site !Please connect and have fun.</h3>
        <div>
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
          <Link to="posts" className="btn btn-secondary mx-3">
            Check Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
