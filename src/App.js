import React from "react";

function App() {
  const blog = {
    title: "My first blog",
    description: "hello this is my first blog post",
    author: "ramesh",
  };

  const styles = {
    margin: "16px",
    padding: "16px",
    boxSizing: "border-box",
    borderRadius: "5px",
    textAlign: "center",
  };

  return (
    <div className="App">
      <div style={styles}>
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
        <i>{blog.author}</i>
      </div>
      <div style={styles}>
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
        <i>{blog.author}</i>
      </div>
      <div style={styles}>
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
        <i>{blog.author}</i>
      </div>
    </div>
  );
}

export default App;
