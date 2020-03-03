import React, {Component} from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openChangeBlock: false,
      userName: ''
    };
  }

  openBlock = () => {
    let openChangeBlock = this.state.openChangeBlock;

    this.setState({
      openChangeBlock: !openChangeBlock
    });
  };

  handleChange = (e) => {
    this.setState({
      userName: e.target.value
    });
  };

  handleChangeName = () => {
    this.props.onChangeUserName(this.state.userName);

    this.setState({
      userName: ''
    });
  };

  render() {
    const {name, onDeleted, handlerGetPosts} = this.props;
    let {openChangeBlock} = this.state;

    const changeBlock = openChangeBlock ? <div className="d-flex">
      <input type="text"
             className="form-control"
             id="userName"
             value={this.state.userName}
             onChange={this.handleChange}/>
      <button type="button"
              onClick={this.handleChangeName}>OK
      </button>
    </div> : false;

    return (
      <li className="list-group-item d-flex flex-column align-items-center">
        {name}
        <div>
          <button type="button"
                  className="text-uppercase m-1"
                  onClick={onDeleted}>delete
          </button>
          <button type="button"
                  className="text-uppercase m-1"
                  onClick={this.openBlock}>change
          </button>
          <button type="button"
                  className="text-uppercase m-1"
                  onClick={handlerGetPosts}>get posts
          </button>
        </div>
        {changeBlock}
      </li>
    );
  }
}

export default User;