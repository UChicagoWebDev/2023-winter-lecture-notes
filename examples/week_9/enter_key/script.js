class Posts extends React.Component {
  render() {
    const posts = this.props.posts.map((post, index) => {
      const lines = post.split(/\r\n|\r|\n/);

      return (<div key={index} id={"post_" + index}>
        {lines.map((line, lineIndex) => <div key={lineIndex}>{line}</div>)}
      </div>);
    });

    return (
      <div className="posts" id="posts">
        <h2>Posts</h2>
        {posts}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: window.PropTypes.array
}

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compose: "",
      composeHeight: 50,
      composeScroll: 0,
      posts: []
    };
  }

  composeChangeHandler = (event) => {
    console.log(event);
    const height = event.target.scrollHeight;
    this.setState({
      compose: event.target.value,
      composeHeight: height,
      composeScroll: height
    });
  }

  postListener = (event) => {
    // TODO: Listen for the Enter Key
    console.log("KeyCode: " +event.key);
    if(event.key === 'Enter' && !event.shiftKey) {
      this.postHandler(event);
      event.preventDefault();
    }
  }

  postHandler = (event) => {
    this.setState((state) => ({
      posts: [...state.posts, state.compose],
      compose: "",
      composeHeight: 50,
      composeScroll: 0
    }));
  }

  render() {
    const composeStyle = {
      height: this.state.composeHeight + 'px',
      scrollTop: this.state.composeScroll
    };

    const postsStyle = {
      paddingBottom: (this.state.composeHeight + 50) + 'px',
    }

    console.log("render Journal");
    return (
      <div className="weblog">
        <div className="title_bar">
          <h1>Using the Enter Key to Post</h1>
        </div>
        <div style={postsStyle}>
          <Posts posts={this.state.posts} />
        </div>
        <div className="compose" id="compose">
          <div className="post_form">
            <textarea
              value={this.state.compose}
              onChange={this.composeChangeHandler}
              onKeyPress={this.postListener}
              style={composeStyle}
            ></textarea>
            <button onClick={this.postHandler}>Post</button>
          </div>
        </div>
      </div>
    );
  }
}

// ========================================


ReactDOM.render(
  React.createElement(Journal),
  document.getElementById('root')
);
