import React from 'react';

class ChatMessage extends React.Component {
    render() {
        return (
            <div className="chat-message">
                {this.props.chat.text}
            </div>
        );
    }
}

ChatMessage.propTypes = {
    chat: React.PropTypes.shape({
        text: React.PropTypes.string.isRequired,
        id: React.PropTypes.number.isRequired
    }).isRequired
}

export default ChatMessage;