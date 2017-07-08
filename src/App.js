import React, {Component} from 'react'
import Form from './Components/Form'
import CardList from './Components/CardList'

class App extends Component {
  state = {
    cards: [
      {
        name: 'Paul O’Shannessy',
        avatar_url: 'https://avatars2.githubusercontent.com/u/8445?v=3',
        company: 'Facebook',
      },
      {
        name: 'Ben Alpert',
        avatar_url: 'https://avatars2.githubusercontent.com/u/6820?v=3',
        company: 'Facebook',
      },
    ],
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
