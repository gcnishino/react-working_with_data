import React, {Component} from 'react'
import Card from './Card'

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <input type="text" placeholder="Github username" />
        <button type="submit">Add card</button>
      </div>
    )
  }
}

export default Form
