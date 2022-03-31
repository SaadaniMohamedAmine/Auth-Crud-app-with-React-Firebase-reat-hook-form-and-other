import React from "react";
import schema from "../schema/postSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import PostManager from "../data-manager";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const CreatePost = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("data"));
  const notify = () => toast.success("New post is added !");
  const writer = user.displayName;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const submit = (data) => {
    PostManager.addPost(data);
    notify();
    reset();
    navigate("/feed");
  };
  return (
    <div className="container pt-5 mt-5">
      <Helmet>
        <title>Blog Post | New post</title>
      </Helmet>
      <form
        className="border w-50 mx-auto mt-3 p-3"
        onSubmit={handleSubmit(submit)}
      >
        <h3 className="text-primary text-center">New Post</h3>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className={clsx("form-control", errors.title ? "is-invalid" : "")}
            {...register("title")}
          />
          <div className="invalid-feedback">{errors.title?.message}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            name=""
            id="content"
            cols="30"
            rows="3"
            className={clsx("form-control", errors.content ? "is-invalid" : "")}
            {...register("content")}
          ></textarea>
          <div className="invalid-feedback">{errors.content?.message}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className={clsx("form-control", errors.tag ? "is-invalid" : "")}
            id="tag"
            {...register("tag")}
          />
          <div className="invalid-feedback">{errors.tag?.message}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="writer" className="form-label">
            Writer
          </label>
          <input
            type="text"
            id="writer"
            defaultValue={writer}
            className={clsx("form-control", errors.writer ? "is-invalid" : "")}
            {...register("writer")}
          />
          <div className="invalid-feedback">{errors.writer?.message}</div>
        </div>
        <div className="mb-2 text-end">
          <button className="btn btn-primary mx-3">Add a post</button>
          <button className="btn btn-warning" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreatePost;
