import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onPostAdded(this.state.title);
    this.setState({
      title: ''
    });
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  render() {
    return (
      <form className="mb-3" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="userName">Post title</label>
          <input type="text"
                 className="form-control"
                 id="userName"
                 value={this.state.title}
                 onChange={this.handleChange}/>
        </div>
        <button type="submit"
                className="btn btn-primary">Add post
        </button>
      </form>
    );
  }
}

export default Form;