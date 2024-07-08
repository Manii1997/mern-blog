import React, { useState } from "react";
import { Link } from "react-router-dom";

const authorsData = [
  {
    id: 1,
    avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    name: "User1",
    posts: 3,
  },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);
  return (
    <section className="authors container mx-auto mt-20">
      {authors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {authors.map(({ id, avatar, name, posts }) => {
            return (
              <Link
                key={id}
                to={`/posts/users/${id}`}
                className="flex gap-3 rounded-md bg-white p-4 hover:shadow-md"
              >
                <div className="w-[50px] rounded-full">
                  <img src={avatar} alt={name} />
                </div>
                <div>
                  <h4 className="font-bold">{name}</h4>
                  <p>{posts}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div>
          <h2>No Authers/Users found</h2>
        </div>
      )}
    </section>
  );
};

export default Authors;
