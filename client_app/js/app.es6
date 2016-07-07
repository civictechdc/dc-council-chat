import React from 'react';
import { render } from 'react-dom';
import ChatWindow from './components/ChatWindow';

var chats = [
    {
        text: 'this thing',
        id: 1
    },
    {
        text: 'that thing',
        id: 2
    }
];

render(
  <ChatWindow chats={chats} />,
  document.getElementById('app')
);