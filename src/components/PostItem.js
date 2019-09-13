import React, { Component } from "react";

class PostItem extends Component {
  render() {
    const {title, body, id, vote} = this.props.post;
    return (
      <div uk-scrollspy="cls: uk-animation-slide-left; repeat: false"
        className="uk-card uk-card-default uk-grid-collapse topics"
        uk-grid="true"
      >
        <div className="uk-card-media-left uk-cover-container uk-width-auto@s vote">
          <div onClick={() => this.props.upVote(id)}>
            <i className="ti-arrow-up" />
          </div>
          <div className="total-vote">{vote}</div>
          <div onClick={() => this.props.downVote(id)}>
            <i className="ti-arrow-down" />
          </div>
        </div>
        <div className="uk-width-expand@s">
          <div className="uk-card-body">
            <h3 className="uk-card-title">{title}</h3>
            <div>{body}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostItem;
