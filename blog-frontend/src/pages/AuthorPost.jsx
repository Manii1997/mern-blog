import React, { useState } from "react";
import { PostData } from "../components/PostData";
import PostItem from "../components/PostItem";

const AuthorPost = () => {
  const [posts, setPosts] = useState(PostData);

  return (
    <section className="container mx-auto mt-20">
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(
            ({ id, thumbnail, category, title, description, authorId }) => (
              <PostItem
                key={id}
                postID={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={description}
                authorId={authorId}
              />
            ),
          )}
        </div>
      ) : (
        <div className="text-center text-2xl font-bold">
          <p className="">No Post found</p>
        </div>
      )}
    </section>
  );
};

export default AuthorPost;
