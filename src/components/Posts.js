import React, { useEffect, useState } from "react";
import PostManager from "../data-manager";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Posts = () => {
  const notify = () => toast.success("You deleted the post successfully !");
  const [posts, setPosts] = useState([]);
  const [number, setNumber] = useState(0);
  const [auth, setAuth] = useState(localStorage.getItem("isAuth"));
  const getAllPosts = async () => {
    const data = await PostManager.getAllPosts();
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setNumber(data.docs.length);
  };
  const deletePost = async (id) => {
    const data = await PostManager.deleteOnePost(id);
    notify();
    getAllPosts();
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div className="posts">
      <div className="container pt-5 mt-5">
        <div className="container">
          <div className="row">
            {!number ? (
              <h1>Sorry, no posts in the blog.</h1>
            ) : (
              posts.map((post) => (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
                  key={post.id}
                >
                  <div className="card card-margin">
                    <div className="card-header no-border">
                      <h5 className="card-title w-100 d-flex justify-content-between align-items-center">
                        <span>{post.tag}</span>{" "}
                        {auth ? (
                          <button
                            className="btn"
                            onClick={() => deletePost(post.id)}
                          >
                            <i className="bi bi-trash btn"></i>
                          </button>
                        ) : (
                          <React.Fragment></React.Fragment>
                        )}
                      </h5>
                    </div>
                    <div className="card-body pt-0">
                      <div className="widget-49">
                        <div className="widget-49-title-wrapper">
                          <div className="widget-49-meeting-info">
                            <span className="widget-49-pro-title">
                              {post.title}
                            </span>
                            <span className="widget-49-meeting-time">
                              {post.writer}
                            </span>
                          </div>
                        </div>
                        <ol className="widget-49-meeting-points">
                          {post.content.substring(0, 20) + "....."}
                        </ol>
                        <div className="widget-49-meeting-action">
                          <Link
                            className=" btn btn-sm btn-flash-border-primary"
                            to={`/posts/${post.id}`}
                          >
                            View all
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Posts;
