import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const login = async () => {
    const result = await signInWithPopup(auth, provider);
    if (result) {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("data", JSON.stringify(result.user));
      navigate("/feed");
    }
  };
  return (
    <div className="container-fluid">
      <Helmet>
        <title>Blog Post | Login</title>
      </Helmet>
      <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image"></div>
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto py-4 border-top border-bottom">
                  <h3 className="display-4 login-title">Login</h3>
                  <p className="text-muted mb-4">
                    In order to be able to create posts and manipulate them ,you
                    have to login with google
                  </p>
                  <div className="text-start">
                    <button className="btn btn-dark" onClick={login}>
                      <i className="bi bi-google mx-3"></i> Connect with google
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
