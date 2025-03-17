import React, { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const NotificationIcon = () => {
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    // Mock data for notifications (can be replaced with API calls)
    useEffect(() => {
        const interval = setInterval(() => {
            const newNotification = {
                id: Date.now(),
                message: `New job alert received at ${new Date().toLocaleTimeString()}`,
                read: false
            };
            setNotifications(prev => [newNotification, ...prev]);
            setUnreadCount(prev => prev + 1);
            playNotificationSound();
        }, 100000); // Simulating real-time updates every 10 sec

        return () => clearInterval(interval);
    }, []);

    const playNotificationSound = () => {
        const audio = new Audio('/sounds/notification.mp3');
        audio.play();
    };

    const handleMarkAsRead = (id) => {
        const updatedNotifications = notifications.map(notif =>
            notif.id === id ? { ...notif, read: true } : notif
        );
        setNotifications(updatedNotifications);
        setUnreadCount(updatedNotifications.filter(n => !n.read).length);
    };

    return (
        <div className="relative">
            <div
                className="relative cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Bell size={24} className="text-purple-500" />
                {unreadCount > 0 && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full"
                    >
                        {unreadCount}
                    </motion.span>
                )}
            </div>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-3">
                    <h3 className="text-lg font-bold mb-2">Notifications</h3>
                    {notifications.length === 0 ? (
                        <p className="text-gray-500">No new notifications</p>
                    ) : (
                        notifications.map((notif) => (
                            <div
                                key={notif.id}
                                className={`p-2 border-b ${notif.read ? 'bg-gray-100' : 'bg-blue-50'}`}
                                onClick={() => handleMarkAsRead(notif.id)}
                            >
                                {notif.message}
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default NotificationIcon;
