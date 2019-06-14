import React from 'react';

const ChatMessage = props =>{
  return(
      <div>
        <div>{props.user}</div>
        <div>{props.text}</div>
      </div>
    )
}

export default ChatMessage;
