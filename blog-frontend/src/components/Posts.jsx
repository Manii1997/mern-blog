import React, { useState } from "react";
import PostItem from "./PostItem";
import { PostData } from "./PostData";

const Posts = () => {
  const [posts, setPosts] = useState(PostData);
  return (
    <section>
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
        <div className="text-center text-2xl font-bold">No Post found</div>
      )}
    </section>
  );
};

export default Posts;
