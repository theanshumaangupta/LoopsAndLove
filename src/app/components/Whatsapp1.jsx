    "use client";   
    import React, { useState } from 'react';

    const Whatsapp = () => {
        const [message, setMessage] = useState('');

        // IMPORTANT: Replace this with your client's actual WhatsApp phone number.
        // Use the international format without any plus signs or special characters.
        const phoneNumber = '1234567890'; // Example: '1234567890' for +1 (234) 567-890

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
            <>
                <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#F3F0EC]">
                    {/* Main Container */}
                    <h1 style={{fontFamily:"Merriweather"}} className='text-black text-2xl md:text-4xl bold mb-[2rem]'>WhatsApp Us</h1>
                    <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden md:max-w-md lg:max-w-lg">
                        {/* Chat Header */}
                        <div className="bg-white text-gray-800 p-4 flex items-center justify-between rounded-t-2xl border-b border-gray-200">
                            <div className="flex items-center">
                                <img src="https://placehold.co/40x40/c0b59b/ffffff?text=C" alt="Client Profile" className="w-10 h-10 rounded-full mr-3 border-2 border-white shadow" />
                                <div>
                                    <h2 className="text-lg font-semibold">Client Support</h2>
                                    <p className="text-xs text-gray-500">online</p>
                                </div>
                            </div>
                            {/* WhatsApp Logo */}
                            <svg className="w-6 h-6 fill-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.4C339.4 55.7 283.4 33 224 33c-119.8 0-216.9 97.2-216.9 216.9 0 40.5 11.1 79.4 32.4 113.8L9.9 454.4c-3.1 9.2-.9 19.5 5.8 26.2.7.7 1.6 1.1 2.5 1.4L44.8 488c9.5 2.9 20.2-.4 26.2-6.5l82.1-82.1c32.7 17.5 70.1 26.4 108.9 26.4 119.8 0 216.9-97.2 216.9-216.9S380.9 97.4 380.9 97.4zM224 402.1c-1.2 0-2.3 0-3.5-.1-39.7-1.1-77.9-15.1-110.1-41.2L116.3 331 46.5 400.8l20.4-79.5 2.2-8.5-7.9-10c-15.6-20.7-27.1-44.4-33.8-69.8-6.1-23.7-9.2-48.4-9.2-73.4C28.2 135 129.4 34.1 251.3 34.1S474.5 135 474.5 256.9 373.3 478.7 251.3 478.7c-38.3 0-75-9.6-106.8-28.7l-94 94.1c-1.4 1.4-3.5 1.5-5 .2l-1.9-2.2c-1.6-1.5-1.7-3.9 0-5.4l91.6-91.6c-2.3-2.9-4.5-5.9-6.7-8.9-3.2-4.5-6.1-9.2-8.8-14-11.2-19.4-19.7-40.4-25.1-62.8-5.9-24.1-8.9-49.3-8.9-75.1C28.2 135 129.4 34.1 251.3 34.1 373.3 34.1 474.5 135 474.5 256.9S373.3 478.7 251.3 478.7c-38.3 0-75-9.6-106.8-28.7l-94 94.1c-1.4 1.4-3.5 1.5-5 .2l-1.9-2.2c-1.6-1.5-1.7-3.9 0-5.4l91.6-91.6zM224 402.1c-1.2 0-2.3 0-3.5-.1-39.7-1.1-77.9-15.1-110.1-41.2L116.3 331 46.5 400.8l20.4-79.5 2.2-8.5-7.9-10c-15.6-20.7-27.1-44.4-33.8-69.8-6.1-23.7-9.2-48.4-9.2-73.4C28.2 135 129.4 34.1 251.3 34.1S474.5 135 474.5 256.9 373.3 478.7 251.3 478.7c-38.3 0-75-9.6-106.8-28.7l-94 94.1c-1.4 1.4-3.5 1.5-5 .2l-1.9-2.2c-1.6-1.5-1.7-3.9 0-5.4l91.6-91.6z"/></svg>
                        </div>

                        {/* Chat Messages Container */}
                        <div id="chat-messages" className="p-4 text-[15px] md:text-base space-y-4 overflow-y-auto min-h-[60vh] md:max-h-[65vh] lg:max-h-[70vh]">
                            {/* Example incoming message */}
                            <div className="flex items-start">
                                <div className="bg-gray-100 text-gray-800 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm max-w-[80%]">
                                    Hi! I'm here to help you get in touch. What's on your mind?
                                </div>
                            </div>

                            {/* Example outgoing message (from user) */}
                            {/* <div className="flex justify-end"> 
                                <div className="bg-[#EAE4D7] text-gray-800 p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl shadow-sm max-w-[80%]">
                                    I have a question about my order.
                                </div>
                            </div> */}

                            {/* More example messages... */}
                            <div className="flex items-start">
                                <div className="bg-gray-100 text-gray-800 ] p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm max-w-[80%]">
                                    Want to know more about our products? Just send us a message!
                                </div>
                            </div>
                        </div>

                        {/* Chat text Area */}
                        <div className="p-4 bg-gray-100 flex items-center rounded-b-2xl">
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
                
            </>
        );
    };

    export default Whatsapp;
