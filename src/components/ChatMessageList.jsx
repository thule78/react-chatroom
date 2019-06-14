import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ChatMessage from './ChatMessage';

class ChatMessageList extends Component {

  componentWillUpdate(){
    const node = ReactDOM.findDOMNode(this)
    this.shouldScrollToBottom = node.scrollTop + node.clientHieght + 100 >= node.scrollHieght
  }


  componentDidUpdated(){
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this)
      node.scrollTop = node.scrollHeight
    }
  }
    render(){
      if(!this.props.roomId) {
        return (
          <div>
            Join a channel !
          </div>
          )
      }
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
