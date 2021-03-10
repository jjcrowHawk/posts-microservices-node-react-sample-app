import react from 'react';
import ReactDOM from 'react-dom';
import PostCreate from './PostCreate';
import PostList from './PostList';



export default () => {
  return (
    <div>
      <h1>Create Post</h1>
      <PostCreate/>
      <hr />
      <h1>Posts</h1>
      <PostList/>
      <hr/>
    </div>
  );
}