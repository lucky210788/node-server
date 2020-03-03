import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onUserAdded(this.state.userName);
    this.setState({
      userName: ''
    });
  };

  handleChange = (e) => {
    this.setState({
      userName: e.target.value
    });
  };

  render() {
    return (
      <form className="mb-3" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="userName">User name</label>
          <input type="text"
                 className="form-control"
                 id="userName"
                 value={this.state.userName}
                 onChange={this.handleChange}/>
        </div>
        <button type="submit"
                className="btn btn-primary">Add user
        </button>
      </form>
    );
  }
}

export default Form;