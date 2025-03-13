import React, { useState } from 'react';
import { IoChatbubbleEllipses, IoNotificationsOutline } from 'react-icons/io5';
import { FaUserCircle } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Messenger = () => {
    const {isDarkMode} = useTheme();
    const [contacts, setContacts] = useState([
        { id: 1, name: 'Alice', status: 'online' },
        { id: 2, name: 'Bob', status: 'offline' },
        { id: 3, name: 'Charlie', status: 'online' },
    ]);

    const [selectedContact, setSelectedContact] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { text: newMessage, sender: 'You' }]);
            setNewMessage('');
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="w-full flex space-x-4 p-4 bg-purple-500 text-white">
                {contacts.map((contact) => (
                    <div
                        key={contact.id}
                        className={`p-3 rounded cursor-pointer ${isDarkMode ? 'bg-darkCard text-white' : "bg-white"} text-purple-500`}
                        onClick={() => setSelectedContact(contact)}
                    >
                        <FaUserCircle className="text-3xl" />
                        <span>{contact.name}</span>
                    </div>
                ))}
            </div>

            <div className={`flex-1 flex flex-col ${isDarkMode ? "bg-darkCard text-white" : "bg-white"} shadow-md p-4`}>
                {selectedContact ? (
                    <div className="flex-1">
                        <h2 className="text-lg font-bold mb-4 text-purple-500">Chat with {selectedContact.name}</h2>
                        <div className="flex-1 overflow-y-auto border p-3 rounded mb-4">
                            {messages.map((msg, index) => (
                                <div key={index} className={`p-2 rounded ${msg.sender === 'You' ? 'bg-purple-500 text-white ml-auto w-fit' : 'bg-gray-200 text-black w-fit'}`}> 
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                value={newMessage}                                                                     
                                onChange={(e) => setNewMessage(e.target.value)}
                                className="flex-1 p-2 border rounded"
                            />
                            <button onClick={handleSendMessage} className="bg-purple-500 text-white px-4 py-2 rounded">Send</button>
                        </div>
                    </div>    
                ) : (
                    <div className="flex flex-col items-center justify-center flex-1 text-gray-500">
                        <IoChatbubbleEllipses size={50} />
                        <p>Select a contact to start chatting</p>
                    </div>
                )}
            </div>

            <div className="w-full bg-purple-500 p-4 flex items-center justify-center text-white">
                <IoNotificationsOutline size={30} />
                <span className="ml-2">No new notifications</span>
            </div>
        </div>
    );
};

export default Messenger;
