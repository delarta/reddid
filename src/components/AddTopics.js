import React, { Component } from "react";

class AddTopics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.addTopic(this.state.title, this.state.body);
    this.setState({ title: "", body: "" });
  };
  onchange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="uk-container">
        <div className="uk-card uk-card-default">
          <div className="uk-card-body">
            <form onSubmit={this.onSubmit}>
              <fieldset className="uk-fieldset">
                <legend>
                  <h3>Write a Topic</h3>
                </legend>
                <div>
                  <input
                    onChange={this.onchange}
                    value={this.state.title}
                    type="text"
                    className="uk-input"
                    name="title"
                    placeholder="Write the title"
                  />
                </div>

                <div className="uk-margin">
                  <textarea
                    onChange={this.onchange}
                    value={this.state.body}
                    name="body"
                    className="uk-textarea"
                    rows="5"
                    placeholder="Write about something (Max Character 255)"
                  />
                </div>
                <div>
                  <button className="uk-width-1-1@s uk-button uk-button-primary">
                    Post
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTopics;
