import React, {Component} from 'react';
import Form from "./Form/Form";
import Post from "./Post/Post";

class Posts extends Component {
  render() {
    const {userPosts, onPostAdded, deletePost, onChangePost} = this.props;

    const post = userPosts.map(post => {
      return (
        <Post title={post.title}
              key={post.id}
              deletePost={() => {
                deletePost(post.id)
              }}
              onChangePost={(title) => {
                onChangePost(title, post.id)
              }}/>
      )
    });

    return (
      <div className="col-6">
        <Form onPostAdded={onPostAdded}/>
        <ul className="list-group">
          {post}
        </ul>
      </div>
    );
  }
}

export default Posts;