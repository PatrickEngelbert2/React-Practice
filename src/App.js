import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

function App() {
  const [posts, setPosts] = useState([]);
  // const secondIrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {posts.map(post => <PostDetail post={post} />)}
    </div>
  );
}

export default App;
