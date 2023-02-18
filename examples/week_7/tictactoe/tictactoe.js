function Square(props) {
  return (
    <button className="square" 
      id={"square"+props.squareId}
      onClick={() => {props.handleClick()}}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={this.props.squares[i]} 
      squareId={i} 
      handleClick={()=>{
        this.props.handler(i);
      }} 
    />; // React.createComponent("Square") ...
  }

  render() {
    return (
      <div>
        <div className="status">{this.props.status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          xIsNext: true,
          winner: null,
        }
      ]
    };
  }

  handleClick = (i) => {
    const history = this.state.history;
    const now = history[history.length-1];
    let newHistory = history.slice();
    const newSquares = now.squares.slice();

    // Don't allow moves if the game is over for if the user clicks on a filled square
    if(now.winner || newSquares[i]) return; 

    // Otherwise, mark this square in the new grid
    newSquares[i] = now.xIsNext ? "X" : "O"; // if(xIsNext) return "X" else return "Y"
    let newState = {
      squares: newSquares,
      xIsNext: !now.xIsNext,
      winner: calculateWinner(newSquares)
    }

    newHistory.push(newState);
    this.setState({history: newHistory});
  }

  timeTravel = (turn) => {
    const newHistory = this.state.history.slice(0,turn+1);
    this.setState({history: newHistory});
  }

  render() {
    const now = this.state.history[this.state.history.length-1];

    let status;
    if (now.winner) {status = now.winner+" wins the game!"}
    else {
      status = "Next player: "+ (now.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
          squares={now.squares}
          xIsNext={now.xIsNext}
          handler={this.handleClick} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{this.state.history.map((s, i)=>{
            return(<li>
              <button onClick={()=>{this.timeTravel(i)}}>Go to {i==0 ? "game start" : "move #"+i}</button>
            </li>);
          })}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);