import React, { Fragment } from "react";

const CSS01BoxSizing = () => {
  const contentBox: React.CSSProperties = {
    width: "200px",
    height: "100px",
    padding: "20px",
    border: "5px solid black",
    boxSizing: "content-box",
  };
  const borderBox: React.CSSProperties = {
    width: "200px",
    height: "100px",
    padding: "20px",
    border: "5px solid black",
    boxSizing: "border-box",
  };
  return (
    <Fragment>
      <div className="prose dark:prose-dark">
        <h2>CSS01BoxSizing</h2>
      </div>

      <div className="shadow-2xl bg-[#1a1a1af5] p-5 m-5 rounded-lg flex">
        <div className="mr-2 font-bold">box-sizing:</div>
        <div className="">content-box | border-box | inherit</div>
      </div>
      <div>
        content-box (default) The width and height properties include only the
        content. Padding and border are not included in the specified
        dimensions.
      </div>
      <div className="bg-[#1a1a1af5]" style={contentBox}>
        contentBox
      </div>
      <div>
        The width and height properties include content, padding, and border.
        This makes it easier to manage element dimensions.
      </div>
      <div className="bg-[#1a1a1af5]" style={borderBox}>
        contentBox
      </div>
    </Fragment>
  );
};

export default CSS01BoxSizing;
