import React, { useState, useEffect } from 'react';
import { IoChatbubbleEllipses, IoNotificationsOutline } from 'react-icons/io5';
import { FaUserCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Messenger = () => {
    const { isDarkMode } = useTheme();
    const [contacts, setContacts] = useState([
        { id: 1, name: 'Alice', status: 'online' },
        { id: 2, name: 'Bob', status: 'offline' },
        { id: 3, name: 'Charlie', status: 'online' },
    ]);

    const [selectedContact, setSelectedContact] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            setMessages([...messages, { text: newMessage, sender: 'You', timestamp }]);
            setNewMessage('');
            setIsTyping(false);
        }
    };

    const handleTyping = (e) => {
        setNewMessage(e.target.value);
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 2000); // Typing indicator timeout
    };

    return (
        <div className={`flex flex-col h-full ${isDarkMode ? 'bg-darkBg' : 'bg-white'}`}>
            <div className="w-full flex space-x-4 p-4 bg-purple-600 text-white shadow-md">
                {contacts.map((contact) => (
                    <motion.div
                        key={contact.id}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
                            selectedContact?.id === contact.id
                                ? 'bg-white text-purple-600 shadow-lg'
                                : 'bg-purple-700 text-white'
                        }`}
                        onClick={() => setSelectedContact(contact)}
                    >
                        <FaUserCircle className="text-3xl mb-1" />
                        <span>{contact.name}</span>
                    </motion.div>
                ))}
            </div>

            <div className={`flex-1 flex flex-col p-4 shadow-md ${isDarkMode ? 'bg-darkCard text-white' : 'bg-white'}`}>
                {selectedContact ? (
                    <div className="flex-1">
                        <h2 className="text-lg font-bold mb-4 text-purple-600">Chat with {selectedContact.name}</h2>
                        <div className="flex-1 overflow-y-auto border p-3 rounded-lg space-y-2">
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`p-2 rounded-lg shadow-md ${
                                        msg.sender === 'You'
                                            ? 'bg-purple-600 text-white ml-auto w-fit'
                                            : 'bg-gray-200 text-black w-fit'
                                    }`}
                                >
                                    {msg.text} <span className="text-xs text-gray-500 ml-2">{msg.timestamp}</span>
                                </motion.div>
                            ))}
                        </div>

                        {isTyping && (
                            <div className="text-sm text-gray-500 mt-2">{selectedContact.name} is typing...</div>
                        )}

                        <div className="flex items-center space-x-2 mt-4">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                value={newMessage}
                                onChange={handleTyping}
                                className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                            />
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleSendMessage}
                                className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md"
                            >
                                Send
                            </motion.button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center flex-1 text-gray-500">
                        <IoChatbubbleEllipses size={60} className="mb-3 animate-bounce" />
                        <p>Select a contact to start chatting</p>
                    </div>
                )}
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full bg-purple-600 p-4 flex items-center justify-center text-white shadow-lg"
            >
                <IoNotificationsOutline size={30} />
                <span className="ml-2">No new notifications</span>
            </motion.div>
        </div>
    );
};

export default Messenger;
