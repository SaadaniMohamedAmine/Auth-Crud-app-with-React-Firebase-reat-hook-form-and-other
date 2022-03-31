import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostManager from "../data-manager";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Post = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const getOnePost = async (id) => {
    const doc = await PostManager.getOnePost(id);
    setPost(doc.data());
  };
  useEffect(() => {
    getOnePost(id);
  });
  return (
    <section className="py-5 post">
      <Helmet>
        <title>Blog Post | post</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto mx-auto mt-5">
            <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
              <div className="blockquote-custom-icon bg-info shadow-sm">
                <i className="bi bi-quote"></i>
              </div>
              <p className="mb-0 mt-2 font-italic">
                {post.content}
                ."
              </p>
              <p className="text-end">
                {" "}
                Tag: <span className="text-muted">{post.tag}</span>
              </p>
              <footer className="blockquote-footer pt-4 mt-4 border-top">
                Written by &nbsp; &nbsp; &nbsp;
                <cite title="Source Title">{post.writer}</cite>
              </footer>
            </blockquote>
          </div>
          <Link to="/posts" className="btn text-info">
            Return to posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Post;
