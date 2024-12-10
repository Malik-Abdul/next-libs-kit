"use client";
import { FC, Fragment } from "react";
import { useState } from "react";

import { useDispatch, UseDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmmount,
} from "@/store/slices/counterSlice";

import { selectAllPosts } from "@/store/slices/postsSlice";

const PostsList: FC = () => {
  const posts = useSelector(selectAllPosts);
  //   const [incrementAmmount, setIncrementAmmount] = useState(0);
  //   const count = useSelector((state: RootState) => state.counter.count);
  //   const addValue = Number(incrementAmmount) || 0;
  //   const resetAll = () => {
  //     setIncrementAmmount(0);
  //     dispatch(reset());
  //   };
  //   const dispatch = useDispatch();
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
