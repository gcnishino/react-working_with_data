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

  render() {
    return (
      <div className="App">
        <Form />
        <CardList cards={this.state.cards} />
      </div>
    )
  }
}

export default App
