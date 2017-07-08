import React, {Component} from 'react'
import Form from './Components/Form'
import CardList from './Components/CardList'

class App extends Component {
  state = {
    cards: [],
  }

  addNewCard = cardInfo => {
    this.setState(prevState => ({cards: prevState.cards.concat(cardInfo)}))
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    )
  }
}

export default App
