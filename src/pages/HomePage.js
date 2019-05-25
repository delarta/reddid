import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class HomePage extends Component {
  render() {
    var posts = this.props.posts.sort((a,b) => (a.vote < b.vote) ?  1 : (a.vote > b.vote) ? -1 : 0 );
    return (
      <div className="uk-container">
        {posts.map(item => (
          <div
          key={item.id}
            className="uk-card uk-card-default uk-grid-collapse topics"
            uk-grid="true"
          >
            <div className="uk-card-media-left uk-cover-container uk-width-auto@s vote">
              <div onClick={() => this.props.upVote(item.id)}><i className="ti-arrow-up"></i></div>
              <div>
                {item.vote}
              </div>
              <div onClick={() => this.props.downVote(item.id)}><i className="ti-arrow-down"></i></div>
            </div>
            <div className="uk-width-expand@s">
              <div className="uk-card-body">
                <h3 className="uk-card-title">
                  {item.title}
                </h3>
                <div>
                  {item.body}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(HomePage);
