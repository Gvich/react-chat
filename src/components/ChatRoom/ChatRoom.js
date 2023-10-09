import React from 'react';
import { MessageForm } from './MessageForm';
import { MessageList } from './MessageList';
import { UserList } from './UserList';
import { useChat } from '../../hooks';

export const ChatRoom= ({ roomId, username }) => {
    // Use the useChat hook to manage users, messages, and send/remove messages
    const { users, messages, sendMessage, removeMessage } = useChat(roomId);

    return (
        <div>
            <UserList users={users} />
            <MessageList messages={messages} removeMessage={removeMessage} />
            <MessageForm username={username} sendMessage={sendMessage} />
        </div>
    );
};

