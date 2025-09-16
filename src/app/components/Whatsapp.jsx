"use client"
import React, { useState } from 'react';

const Whatsapp = () => {
    const [message, setMessage] = useState('');

    // IMPORTANT: Replace this with your client's actual WhatsApp phone number.
    // Use the international format without any plus signs or special characters.
    const phoneNumber = '918858684812'; // Example: '1234567890' for +1 (234) 567-890

    const handleSendMessage = () => {
        if (message.trim()) {
            const encodedMessage = encodeURIComponent(message.trim());
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
        }
    };

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div id='whatsapp' className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#F3F0EC]">
            {/* Header for mobile view */}
            <h1 style={{ fontFamily: "Merriweather" }} className='text-black text-2xl md:text-4xl font-bold mb-[2rem] md:hidden'>WhatsApp Us</h1>

            {/* Main Two-Panel Container for desktop */}
            <div className="flex w-full md:max-w-7xl h-[85vh] md:h-[90vh] rounded-2xl shadow-xl overflow-hidden">
                
                {/* Left Panel (Hidden on mobile) */}
                <div className="hidden md:flex flex-col w-full md:w-1/3 bg-white border-r border-gray-200">
                    {/* Left panel header */}
                    <div className="p-4 flex items-center justify-between border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-800">WhatsApp Us</h2>
                    </div>
                    {/* Search bar */}
                    <div className="p-4 border-b border-gray-200">
                        <input
                            type="text"
                            placeholder="Search chats..."
                            className="w-full p-2 rounded-full text-black bg-gray-100 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#c0b59b]"
                        />
                    </div>
                    {/* Chat List Item */}
                    <div className="flex items-center p-4 bg-gray-100 border-l-4 border-[#c0b59b] cursor-pointer">
                        <img src="https://placehold.co/40x40/c0b59b/ffffff?text=C" alt="Client Profile" className="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <h3 className="font-semibold text-gray-800">Client Support</h3>
                            <p className="text-sm text-gray-500"> Loved The Products? Want to explore...</p>
                        </div>
                    </div>
                </div>

                {/* Right Panel (Chat Window) */}
                <div className="flex flex-col w-full md:w-2/3 bg-white">
                    {/* Chat Header */}
                    <div className="bg-white text-gray-800 p-4 flex items-center justify-between rounded-t-2xl md:rounded-tl-none border-b border-gray-200">
                        <div className="flex items-center">
                            <img src="https://placehold.co/40x40/c0b59b/ffffff?text=C" alt="Client Profile" className="w-10 h-10 rounded-full mr-3 border-2 border-white shadow" />
                            <div>
                                <h2 className="text-lg font-semibold">Client Support</h2>
                                <p className="text-xs text-gray-500">online</p>
                            </div>
                        </div>
                        {/* WhatsApp Logo */}
                        <img src="images/wp.svg" className='h-9 w-9' alt="" />
                    </div>
    
                    {/* Chat Messages Container */}
                    <div id="chat-messages" className="flex-1 p-4 text-[15px] md:text-base space-y-4 overflow-y-auto">
                        {/* End-to-end encryption message */}
                        <div className="flex justify-center text-center">
                            <span className="text-gray-500 text-xs italic">
                                Messages and calls are heart-to-heart encrypted.
                            </span>
                        </div>
                        {/* Initial welcome message from support */}
                        <div className="flex items-start">
                            <div className="bg-gray-100 text-gray-800 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm max-w-[80%]">
                                Loved The Products? Want to explore more ?
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-gray-100 text-gray-800 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm max-w-[80%]">
                                Just leave a message here.
                            </div>
                        </div>
                    </div>
    
                    {/* Chat Input Area */}
                    <div className="p-4 bg-gray-100 flex items-center rounded-b-2xl md:rounded-b-none">
                        <input
                            type="text"
                            id="message-input"
                            placeholder="Type your message here..."
                            className="flex-1 p-3 rounded-full border-2 border-transparent text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#c0b59b] focus:border-transparent transition-all duration-300"
                            value={message}
                            onChange={handleInputChange}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSendMessage();
                                }
                            }}
                        />
                        <button
                            id="send-button"
                            className="ml-2 bg-[#59487c] text-white p-3 rounded-full shadow-lg hover:bg-[#8d79a6] transition-colors duration-300"
                            onClick={handleSendMessage}
                        >
                            {/* Enter Icon */}
                            <svg className="w-6 h-6 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Whatsapp;