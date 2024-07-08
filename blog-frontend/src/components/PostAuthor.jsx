import React from "react";
import { Link } from "react-router-dom";

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/vhgvh`} className="flex gap-2">
      <div className="self-center">
        <img
          src="https://res.cloudinary.com/drdl4pdnx/image/upload/v1719882769/profile_yykkbr.png"
          alt="user"
          className="w-10"
        />
      </div>
      <div className="self-center">
        <h3 className="font-semibold">By: Author</h3>
        <p className="">Just Now</p>
      </div>
    </Link>
  );
};

export default PostAuthor;
