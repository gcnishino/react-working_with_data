import React, {Component} from 'react'
import Card from './Card'

class CardList extends Component {
  render() {
    return (
      <div className="CardList">
        {this.props.cards.map(card => <Card {...card} />)}
      </div>
    )
  }
}

export default CardList
