import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-[100%] bg-slate-800 pb-4 pt-10">
      <ul className="mb-10 flex flex-wrap justify-center gap-3 p-2 text-sm text-white">
        <li className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 hover:bg-gray-200 hover:text-gray-700">
          <Link to="posts/categories/Agriculture">Agriculture</Link>
        </li>
        <li className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 hover:bg-gray-200 hover:text-gray-700">
          <Link to="posts/categories/Business">Business</Link>
        </li>
        <li className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 hover:bg-gray-200 hover:text-gray-700">
          <Link to="posts/categories/Education">Education</Link>
        </li>
        <li className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 hover:bg-gray-200 hover:text-gray-700">
          <Link to="posts/categories/Entertainment">Entertainment</Link>
        </li>
        <li className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 hover:bg-gray-200 hover:text-gray-700">
          <Link to="posts/categories/Art">Art</Link>
        </li>
        <li className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 hover:bg-gray-200 hover:text-gray-700">
          <Link to="posts/categories/Investment">Investment</Link>
        </li>
        <li className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 hover:bg-gray-200 hover:text-gray-700">
          <Link to="posts/categories/Uncategorized">Uncategorized</Link>
        </li>
        <li className="cursor-pointer rounded-md bg-gray-700 px-4 py-2 hover:bg-gray-200 hover:text-gray-700">
          <Link to="posts/categories/Weather">Weather</Link>
        </li>
      </ul>
      <hr />
      <div className="mt-5 text-center text-white">
        <p>All Rights Reserved &copy; Copyright, Blog.</p>
      </div>
    </footer>
  );
};

export default Footer;
