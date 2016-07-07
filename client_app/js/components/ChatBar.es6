import React from 'react';

class ChatBar extends React.Component {
    render() {
        return (
            <div className="chat-bar">
                <input type="text" value="Enter Chat" />
            </div>
        );
    }
}

export default ChatBar;