import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="container pt-5 mt-5">
        <h1>
          Sorry,this address may be wrong !<i className="bi bi-bug"></i>
        </h1>
        <p className="my-3">
          <Link to="/" className="btn btn-primary">
            Return to home{" "}
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
