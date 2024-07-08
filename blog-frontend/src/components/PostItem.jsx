import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = ({
  postID,
  thumbnail,
  category,
  title,
  description,
  authorId,
}) => {
  const shortDescription =
    description.length > 145 ? description.substr(0, 145) + "..." : description;

  const shortTitle = title.length > 30 ? title.substr(0, 30) + "..." : title;

  return (
    <div className="rounded-md bg-white p-3 hover:shadow-lg">
      <div>
        <img src={thumbnail} alt="blog" className="rounded-md" />
      </div>
      <div className="mt-3">
        <Link to={`/post/${postID}`}>
          <h3 className="text-xl font-bold">{shortTitle}</h3>
        </Link>
        <p className="mt-2">{shortDescription}</p>
        <div className="mt-7 flex justify-between">
          <PostAuthor />
          <Link
            to={`/posts/categories/${category}`}
            className="self-end rounded-md bg-gray-100 px-3 py-1.5"
          >
            {category}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
