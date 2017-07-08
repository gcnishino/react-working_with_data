import React, {Component} from 'react'
import Card from './Card'

class Form extends Component {
  handleSubmit = event => {
    event.preventDefault()
    console.log('Event: From Submit', this.userNameInput.value)
  }

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <input type="text" ref={input => (this.userNameInput = input)} placeholder="Github username" required />
        <button type="submit">Add card</button>
      </form>
    )
  }
}

export default Form
