import React, { Component } from 'react';

class ChatForm extends Component {
  state = {
    query:""
  }

  handleChange = (event) => {
    this.setState({query: event.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.sendMessage(this.state.query);
    this.setState({
      query: ""
    })
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          disable={this.props.disable}
          type="text"
          onChange={this.handleChange}
          value={this.state.query}
          placeholder="Type your message here"
          />
      </form>

      )
  }
}

export default ChatForm;
