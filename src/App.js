import React, {Component} from 'react'
import Form from './Components/Form'
import CardList from './Components/CardList'

let data = [
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
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <CardList cards={data} />
      </div>
    )
  }
}

export default App
