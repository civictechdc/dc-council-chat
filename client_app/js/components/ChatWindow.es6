import React from 'react';
import ChatMessage from './ChatMessage';
import ChatBar from './ChatBar'

class ChatWindow extends React.Component {
    render() {
        return (
            <div className="chat-window">
                {this.props.chats.map(function(chat) {
                    return (<ChatMessage chat={chat} key={chat.id}/>)
                })}
                <ChatBar />
            </div>
        );
    }
}

ChatWindow.propTypes = {
    chats: React.PropTypes.array.isRequired
}

export default ChatWindow;