import React, { Component } from "react";

class EditNotes extends Component {
  state = {
    name: "",
    text: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ name: "", text: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="editNotes">
        <h4 className="title">Edit Note:</h4>
        <form>
          <input
            className="newTitle"
            type="text"
            name="name"
            placeholder="New Title"
            onChange={this.handleChange}
          />
          <input
            className="newContent"
            type="text"
            name="text"
            placeholder="New Content"
            onChange={this.handleChange}
          />
          <button className="save" onClick={this.handleSubmit}>
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default EditNotes;