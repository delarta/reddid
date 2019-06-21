import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PostItem from "../components/PostItem";

class HomePage extends Component {
  render() {
    var posts = this.props.posts.sort((a, b) =>
      a.vote < b.vote ? 1 : a.vote > b.vote ? -1 : 0
    );
    return (
      <div className="uk-container">
        {posts.map(item => (
          <PostItem
            key={item.id}
            upVote={this.props.upVote}
            downVote={this.props.downVote}
            post={item}
          />
        ))}
      </div>
    );
  }
}

export default withRouter(HomePage);
