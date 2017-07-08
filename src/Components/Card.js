import React, {Component} from 'react'

class Card extends Component {
  render() {
    return (
      <div className="Card" style={{margin: '1em'}}>
        <img src={this.props.avatar_url} alt="" width="75" />
        <div style={{display: 'inline-block', marginLeft: 10}}>
          <div style={{fontsize: '1.25em', fontWeight: 'bold'}}>
            {this.props.name}
          </div>
          <div>
            {this.props.company}
          </div>
        </div>
      </div>
    )
  }
}

export default Card
