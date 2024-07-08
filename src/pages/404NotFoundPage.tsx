import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;