import React, { Component } from 'react';
import Prompt from './Prompt';
const items = []; 
for(let i = 65; i < 75; i++) {
    items.push({
    id: i,
    content: String.fromCharCode(i),
    displayed: false,
});
}

class Game extends Component {
constructor(props) {
super(props);

this.state = {
items,
};
this.handleAnswer = this.handleAnswer.bind(this);
}
handleAnswer(event, item, index, answer) {
this.props.handleScore(item.displayed === answer);


const items = this.state.items.map((i) => {
    if(i === item) {
    if (i.displayed) {
    i.displayed = true;
    return i;
    }
 } else return i;

});
this.setState({ items });

}

randomItemIndex() {
    let rand = Math.floor(Math.random() * items.length);
    return rand;
}
render() {
const { items } = this.state;
const index = this.randomItemIndex()
const item = items[index];
return (
<main className="d-flex justify-content-around align-items-center">
<p id={items.indexOf(item)}>{item.content}</p>
<Prompt item={item} index={items.indexOf(item)} handleAnswer={this.handleAnswer} />
</main>
)
}
}

export default Game;