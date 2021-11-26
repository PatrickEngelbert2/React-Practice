import React, { useEffect, useState } from "react";

export default function PostDetail({ post }) {
  const [comments, setComments] = useState(null);
  const [postId, setPostId] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then(setComments)
      .catch((error) => {
        console.log(error);
      });
  }, [postId]);
  let mappedComments
  if (comments) {
    mappedComments = comments.map((comment) => {
      return (<div key={comment.id}>{comment.body}</div>);
    });
  }

  return (
      <div key={post.id}>
          <h2>{post.title}</h2>
          <div onClick={()=> setPostId(post.id)}>{post.body}</div>
          {mappedComments && mappedComments}
      </div>
  )
}
