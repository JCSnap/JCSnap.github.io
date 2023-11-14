import React, { useState, useEffect } from "react";
import { marked } from "marked";

const Blog = () => {
  const [content, setContent] = useState("");

  const mdFilePath = require("../blogs/test.md");
  useEffect(() => {
    fetch(mdFilePath)
      .then((response) => response.text())
      .then((text) => {
        setContent(marked(text));
      });
  }, [mdFilePath]);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Blog;
