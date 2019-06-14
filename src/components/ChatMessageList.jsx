import React, {Component} from 'react';

import ChatMessage from './ChatMessage';

class ChatMessageList extends Component {
    render(){
      return (
        <div>
          {this.props.messages.map((message, index) => {
            return (
              <ChatMessage
                key={index}
                user={message.senderId}
                text={message.text}  />
              )
          })}
        </div>
        )
    }
}


export default ChatMessageList;
