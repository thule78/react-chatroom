import React, {Component} from 'react';

class ChatChannel extends Component {

  render(){
    const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id)
    console.log(orderedRooms);
    return(
      <div>
        <h2>Chat Channels </h2>
        {this.props.rooms.map((room) => {
          const active = this.props.roomId === room.id? "active" : "";
          return (
              <ul key={room.id}>
                <li className={'room' + active}>
                  <a onClick={() => this.props.subscribeToRoom(room.id)} href="#">{room.name}</a>
                </li>
              </ul>
            )
        })}
      </div>

      )
  }
}


export default ChatChannel
