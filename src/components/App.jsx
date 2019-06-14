import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'

import { tokenUrl, instanceLocator } from '../config'
import ChatForm from './ChatForm';
import ChatMessage from './ChatMessage';
import ChatChannel from './ChatChannel';
import NewChannel from './NewChannel';

class App extends Component {
  componentDidMount(){
    const chatManager = new ChatManager({
      instanceLocator: 'v1:us1:98503d45-efa0-4d8e-a2ae-e1d9f2d5c83c',
      userId: 'thule',
      tokenProvider: new TokenProvider({ url: tokenUrl


       })
    })
    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: "chatapp",
        messageLimit: 20,
        hooks: {
          onNewMessage: message => {
            console.log('message.text: ', message.text);
          }
        }
      })
    })
  }
  render(){
    return(
    <div className="container">
      <h1>Hello Chat</h1>
      <ChatForm />
      <ChatMessage />
      <ChatChannel />
      <NewChannel />
    </div>
    )
  }

}

export default App
