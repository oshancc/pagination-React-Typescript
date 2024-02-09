import React from 'react';

type PostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type PostProp={
  posts:PostData[];
  loading:Boolean;
}


const Posts = ({ posts, loading }:PostProp) => {
  if (loading) {
    console.log(posts)
    return <h2>Loading...</h2>;
      }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
