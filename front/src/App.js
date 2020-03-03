import React, {Component} from 'react';
import Users from "./components/Users/Users";
import ApiService from "./sevice/apiService";
import Form from "./components/Users/Form/Form";
import Posts from "./components/Posts/Posts";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: false,
      showPosts: false,
      usersList: [],
      userPosts: [],
      activeUserPosts: ''
    };
  }

  apiService = new ApiService();

  handlerGetUsers = () => {
    this.apiService.getUsers()
      .then(res => {
        this.setState({
          usersList: res,
          showUsers: true
        })
      })
      .catch(error => console.error('Error', error));
  };

  onUserAdded = (name) => {
    this.apiService.postUser({name})
      .then(res => {
        this.setState({
          todoData: res
        })
      })
      .then(this.handlerGetUsers)
      .catch(error => console.error('Error', error));
  };

  deleteUser = (id) => {
    this.apiService.deleteUser(id);
    let newData = this.state.usersList;
    newData = newData.filter((user) => (user.id !== id));
    this.setState({usersList: newData});
  };

  onChangeUserName = (name, id) => {
    const usersList = this.state.usersList;

    usersList.forEach(user => {
      if (user.id === id) {
        user.name = name;
      }
    });

    this.apiService.changeUser(id, {name})
      .catch(error => console.error('Error', error));

    this.setState({
      usersList
    });
  };

  handlerGetPosts = (id) => {
    this.apiService.getPosts(id)
      .then(res => {
        this.setState({
          userPosts: res,
          showPosts: true,
          activeUserPosts: id
        })
      })
      .catch(error => console.error('Error', error));
  };

  onPostAdded = (title) => {
    this.apiService.postPost(this.state.activeUserPosts, {title})
      .then(res => {
        this.setState({
          userPosts: res
        })
      })
      .then(this.handlerGetUsers)
      .catch(error => console.error('Error', error));
  };

  deletePost = (id) => {
    this.apiService.deletePost(id);
    let newData = this.state.userPosts;
    newData = newData.filter((post) => (post.id !== id));
    this.setState({userPosts: newData});
  };

  onChangePost = (title, id) => {
    const userPosts = this.state.userPosts;

    userPosts.forEach(post => {
      if (post.id === id) {
        post.title = title;
      }
    });

    this.apiService.changePost(id, {title})
      .catch(error => console.error('Error', error));

    this.setState({
      userPosts
    });
  };

  render() {
    let {showUsers, usersList, showPosts, userPosts} = this.state;

    let usersBlock = showUsers > 0 ?
      <Users usersList={usersList} onDeleted={this.deleteUser} onChangeUserName={this.onChangeUserName}
             handlerGetPosts={this.handlerGetPosts}/> : false;

    let postsBlock = showPosts ?
      <Posts userPosts={userPosts} onPostAdded={this.onPostAdded} deletePost={this.deletePost}
             onChangePost={this.onChangePost}/> : false;

    return (
      <div className="container">
        <button type="buutton"
                className="mt-2 mb-2"
                onClick={this.handlerGetUsers}>Get users
        </button>
        <div className="col-6">
          <Form onUserAdded={this.onUserAdded}/>
          {usersBlock}
        </div>
        {postsBlock}
      </div>
    );
  }
}

export default App;