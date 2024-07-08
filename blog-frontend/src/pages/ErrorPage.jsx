import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const ErrorPage = () => {
  return (
    <section className="container mx-auto mt-20 flex flex-col justify-center">
      <img
        src="https://res.cloudinary.com/drdl4pdnx/image/upload/v1719841552/not_found_usoyec.png"
        alt="not-found"
        className="w-full max-w-[600px] self-center"
      />
      <Link to="/" className="mt-10 text-center">
        <Button variant="contained" color="primary">
          Go Back Home
        </Button>
      </Link>
    </section>
  );
};

export default ErrorPage;
