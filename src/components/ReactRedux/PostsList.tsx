"use client";
import { FC, Fragment } from "react";

import { useSelector } from "react-redux";

import { selectAllPosts } from "@/store/slices/postsSlice";

const PostsList: FC = () => {
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts
    ? posts.map((post) => (
        <article className="posts" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}</p>
        </article>
      ))
    : "";
  return (
    <Fragment>
      <div>
        <strong>Component:</strong> PostsList
      </div>
      <section>
        <h2>Posts</h2>
        {renderPosts}
      </section>
    </Fragment>
  );
};
export default PostsList;
