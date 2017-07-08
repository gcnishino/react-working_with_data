import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CardList from './Components/CardList'
import registerServiceWorker from './registerServiceWorker'

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

ReactDOM.render(<CardList cards={data} />, document.getElementById('root'))
registerServiceWorker()
