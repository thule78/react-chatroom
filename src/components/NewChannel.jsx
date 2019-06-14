import React, { Component } from 'react';

class NewChannel extends Component{
  state = {
    roomName: ""
  }
  handleNewChannel = (e) => {
    this.setState({
      roomName: e.target.value
    })
  }

  handleChannelSubmit = (event) => {
    event.preventDefault();
    this.props.createRoom(this.state.roomName)
    this.setState({
      roomName: ""
    })
  }
  render(){
    console.log(this.props.createRoom)
    return(
      <div>
        <form onSubmit={this.handleChannelSubmit}>
          <input
            type="text"
            onChange={this.handleNewChannel}
            placeholder="New Channel"
            value={this.state.roomName}
            required
             />
             <button id="create-room-btn" type="submit">+</button>
        </form>
      </div>

      )
  }
}

export default NewChannel;
