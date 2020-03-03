import React, {Component} from 'react';
import User from "./User/User";

class Users extends Component {
  render() {
    const {usersList, onDeleted, onChangeUserName, handlerGetPosts} = this.props;

    const user = usersList.map(user => {
      return (
        <User name={user.name}
              key={user.id}
              onDeleted={() => {
                onDeleted(user.id)
              }}
              onChangeUserName={(name) => {
                onChangeUserName(name, user.id)
              }}
              handlerGetPosts={() => {
                handlerGetPosts(user.id)
              }}
        />
      )
    });

    return (
      <ul className="list-group">
        {user}
      </ul>
    );
  }
}

export default Users;