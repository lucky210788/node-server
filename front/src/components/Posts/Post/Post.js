import React, {Component} from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openChangeBlock: false,
      title: ''
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
      title: e.target.value
    });
  };

  handleChangeName = () => {
    this.props.onChangePost(this.state.title);

    this.setState({
      title: ''
    });
  };

  render() {
    const {title, deletePost} = this.props;
    const {openChangeBlock} = this.state;

    const changeBlock = openChangeBlock ? <div className="d-flex">
      <input type="text"
             className="form-control"
             value={this.state.title}
             onChange={this.handleChange}/>
      <button type="button"
              onClick={this.handleChangeName}>OK
      </button>
    </div> : false;

    return (
      <li className="list-group-item d-flex flex-column align-items-center">
        {title}
        <div>
          <button type="button"
                  className="text-uppercase m-1"
                  onClick={deletePost}>delete
          </button>
          <button type="button"
                  className="text-uppercase m-1"
                  onClick={this.openBlock}>change
          </button>
        </div>
        {changeBlock}
      </li>
    );
  }
}

export default Post;