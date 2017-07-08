import React, {Component} from 'react'

class Form extends Component {
  state = {userName: ''}

  handleSubmit = event => {
    event.preventDefault()
    console.log('Event: From Submit', this.state.userName)
    fetch(`https://api.github.com/users/${this.state.userName}`, {
      headers: {},
    })
      .then(response => response.json())
      .then(data => this.props.onSubmit(data))
      .catch(err => requestError(err, 'userData'))

    function requestError(e, part) {
      console.log(e)
      console.error(part)
    }
  }

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({userName: event.target.value})}
          placeholder="Github username"
          required
        />
        <button type="submit">Add card</button>
      </form>
    )
  }
}

export default Form
