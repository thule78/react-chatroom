import React from 'react';

import ChatForm from './ChatForm';
import ChatMessage from './ChatMessage';
import ChatChannel from './ChatChannel';
import NewChannel from './NewChannel';

const App = () =>{
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

export default App
