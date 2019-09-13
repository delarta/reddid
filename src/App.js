import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddTopics from "./components/AddTopics";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          upvote: false,
          downvote: false,
          vote: 34,
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          upvote: false,
          downvote: false,
          vote: 444,
          userId: 1,
          id: 2,
          title: "qui est esse",
          body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          upvote: false,
          downvote: false,
          vote: 1500,
          userId: 1,
          id: 3,
          title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          upvote: false,
          downvote: false,
          vote: 566,
          userId: 1,
          id: 4,
          title: "eum et est occaecati",
          body:
            "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          upvote: false,
          downvote: false,
          vote: 66,
          userId: 1,
          id: 5,
          title: "nesciunt quas odio",
          body:
            "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
          upvote: false,
          downvote: false,
          vote: 999,
          userId: 1,
          id: 6,
          title: "dolorem eum magni eos aperiam quia",
          body:
            "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        },
        {
          upvote: false,
          downvote: false,
          vote: 624,
          userId: 1,
          id: 7,
          title: "magnam facilis autem",
          body:
            "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
        },
        {
          upvote: false,
          downvote: false,
          vote: 647,
          userId: 1,
          id: 8,
          title: "dolorem dolore est ipsam",
          body:
            "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
        },
        {
          upvote: false,
          downvote: false,
          vote: 875,
          userId: 1,
          id: 9,
          title: "nesciunt iure omnis dolorem tempora et accusantium",
          body:
            "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
        },
        {
          upvote: false,
          downvote: false,
          vote: 986,
          userId: 1,
          id: 10,
          title: "optio molestias id quia eum",
          body:
            "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
        },
        {
          upvote: false,
          downvote: false,
          vote: 895,
          userId: 2,
          id: 11,
          title: "et ea vero quia laudantium autem",
          body:
            "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
        },
        {
          upvote: false,
          downvote: false,
          vote: 123,
          userId: 2,
          id: 12,
          title: "in quibusdam tempore odit est dolorem",
          body:
            "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
        },
        {
          upvote: false,
          downvote: false,
          vote: 234,
          userId: 2,
          id: 13,
          title: "dolorum ut in voluptas mollitia et saepe quo animi",
          body:
            "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
        },
        {
          upvote: false,
          downvote: false,
          vote: 345,
          userId: 2,
          id: 14,
          title: "voluptatem eligendi optio",
          body:
            "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
        },
        {
          upvote: false,
          downvote: false,
          vote: 456,
          userId: 2,
          id: 15,
          title: "eveniet quod temporibus",
          body:
            "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
        },
        {
          upvote: false,
          downvote: false,
          vote: 657,
          userId: 2,
          id: 16,
          title:
            "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
          body:
            "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
        },
        {
          upvote: false,
          downvote: false,
          vote: 445,
          userId: 2,
          id: 17,
          title: "fugit voluptas sed molestias voluptatem provident",
          body:
            "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
        },
        {
          upvote: false,
          downvote: false,
          vote: 987,
          userId: 2,
          id: 18,
          title: "voluptate et itaque vero tempora molestiae",
          body:
            "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
        },
        {
          upvote: false,
          downvote: false,
          vote: 789,
          userId: 2,
          id: 19,
          title: "adipisci placeat illum aut reiciendis qui",
          body:
            "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
        },
        {
          upvote: false,
          downvote: false,
          vote: 777,
          userId: 2,
          id: 20,
          title: "doloribus ad provident suscipit at",
          body:
            "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
        }
      ]
    };
  }

  upVote = id => {
    this.setState({
      id: this.state.posts.map(item => {
        if (item.id === id) {
          item.vote = item.vote + 1;
          item.upvote = true;
          item.downvote = false;
        }
        return item;
      })
    });
  };
  downVote = id => {
    this.setState({
      id: this.state.posts.map(item => {
        if (item.id === id) {
          item.vote = item.vote - 1;
          item.upvote = false;
          item.downvote = true;
        }
        return item;
      })
    });
  };

  addTopic = (title, body) => {
    const newTopic = {
      title: title,
      body: body,
      id: this.state.posts.length + 1,
      userId: 1,
      upvote: false,
      downvote: false,
      vote: 0,
    }
    this.setState({posts: [...this.state.posts, newTopic]})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                
                <AddTopics addTopic={this.addTopic} />
                <HomePage
                  downVote={this.downVote}
                  upVote={this.upVote}
                  posts={this.state.posts}
                />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
