import { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Game from "./Components/Game";

class App extends Component {
  constructor() {
    super();
    this.state = {
    items: [],
    currentScore: 0,
    bestScore: 0,
    };
    this.handleScore = this.handleScore.bind(this);
  }

  handleScore(increment) {
    let newBestScore = this.state.bestScore;
    if(increment) {
      if (newBestScore < this.state.currentScore + 1) {
        newBestScore = this.state.currentScore + 1
        }
      this.setState({
      currentScore: this.state.currentScore + 1, bestScore: newBestScore 
    });
  } else {
    this.setState({
      
      currentScore: 0, bestScore: newBestScore
  });
  const items2 = this.state.items.map((i) => {
    i.displayed = false;
    return i;
 });
 this.setState({ items: items2 });
}
}
render() {
  const {currentScore, bestScore} = this.state;
return (
<div className="App">
<Header currentScore={currentScore} bestScore ={bestScore}/>
<Game handleScore={this.handleScore} />
</div>
);
}
}
export default App;

