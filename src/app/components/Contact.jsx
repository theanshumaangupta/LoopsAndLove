import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className="bg-[#F3F0EC] flex items-center justify-center min-h-[60vh] p-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">

                    
                    {/* WhatsApp Card */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-green-500 mb-4" viewBox="0 0 448 512" fill="currentColor">
                            <path d="M380.9 97.4C339.4 55.7 283.4 33 224 33c-119.8 0-216.9 97.2-216.9 216.9 0 40.5 11.1 79.4 32.4 113.8L9.9 454.4c-3.1 9.2-.9 19.5 5.8 26.2.7.7 1.6 1.1 2.5 1.4L44.8 488c9.5 2.9 20.2-.4 26.2-6.5l82.1-82.1c32.7 17.5 70.1 26.4 108.9 26.4 119.8 0 216.9-97.2 216.9-216.9S380.9 97.4 380.9 97.4zM224 402.1c-1.2 0-2.3 0-3.5-.1-39.7-1.1-77.9-15.1-110.1-41.2L116.3 331 46.5 400.8l20.4-79.5 2.2-8.5-7.9-10c-15.6-20.7-27.1-44.4-33.8-69.8-6.1-23.7-9.2-48.4-9.2-73.4C28.2 135 129.4 34.1 251.3 34.1S474.5 135 474.5 256.9 373.3 478.7 251.3 478.7c-38.3 0-75-9.6-106.8-28.7l-94 94.1c-1.4 1.4-3.5 1.5-5 .2l-1.9-2.2c-1.6-1.5-1.7-3.9 0-5.4l91.6-91.6c-2.3-2.9-4.5-5.9-6.7-8.9-3.2-4.5-6.1-9.2-8.8-14-11.2-19.4-19.7-40.4-25.1-62.8-5.9-24.1-8.9-49.3-8.9-75.1C28.2 135 129.4 34.1 251.3 34.1 373.3 34.1 474.5 135 474.5 256.9S373.3 478.7 251.3 478.7c-38.3 0-75-9.6-106.8-28.7l-94 94.1c-1.4 1.4-3.5 1.5-5 .2l-1.9-2.2c-1.6-1.5-1.7-3.9 0-5.4l91.6-91.6zM224 402.1c-1.2 0-2.3 0-3.5-.1-39.7-1.1-77.9-15.1-110.1-41.2L116.3 331 46.5 400.8l20.4-79.5 2.2-8.5-7.9-10c-15.6-20.7-27.1-44.4-33.8-69.8-6.1-23.7-9.2-48.4-9.2-73.4C28.2 135 129.4 34.1 251.3 34.1S474.5 135 474.5 256.9 373.3 478.7 251.3 478.7c-38.3 0-75-9.6-106.8-28.7l-94 94.1c-1.4 1.4-3.5 1.5-5 .2l-1.9-2.2c-1.6-1.5-1.7-3.9 0-5.4l91.6-91.6z"/>
                        </svg>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp</h3>
                        <p className="text-sm text-gray-500 mb-4">Chat with us directly on WhatsApp for quick support and questions.</p>
                        <a href="https://wa.me/15551234567" target="_blank" className="text-sm text-gray-700 font-medium hover:underline">(555) 123-4567</a>
                    </div>

                    {/* Instagram Card */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-purple-600 mb-4" viewBox="0 0 448 512" fill="currentColor">
                            <path d="M224.1 129.8C209 133.5 194.2 135.2 179.3 135.2c-47.9 0-87.3-39.4-87.3-87.3S131.4 0 179.3 0c47.9 0 87.3 39.4 87.3 87.3s-39.4 87.3-87.3 87.3zM288 288c-15.2 0-29.2-2.1-42.5-5.9l-61.9 61.9c-2.4 2.4-5.3 4-8.7 4-5.4 0-9.8-4.4-9.8-9.8V179.3c0-5.4 4.4-9.8 9.8-9.8 3.4 0 6.3 1.6 8.7 4l61.9 61.9c3.8-13.3 5.9-27.3 5.9-42.5 0-47.9-39.4-87.3-87.3-87.3S131.4 72 131.4 120s39.4 87.3 87.3 87.3c15.2 0 29.2-2.1 42.5-5.9l61.9 61.9c2.4 2.4 4 5.3 4 8.7s-1.6 6.3-4 8.7L288 288zM448 118.5v275.4c0 36.6-29.7 66.3-66.3 66.3h-275.4C30.7 460.2 1 430.5 1 393.9V118.5c0-36.6 29.7-66.3 66.3-66.3h275.4c36.6 0 66.3 29.7 66.3 66.3zM224.1 405.2c-100 0-181.1-81.1-181.1-181.1s81.1-181.1 181.1-181.1 181.1 81.1 181.1 181.1-81.1 181.1-181.1 181.1z"/>
                        </svg>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Instagram</h3>
                        <p className="text-sm text-gray-500 mb-4">Follow us on Instagram to see our latest updates and stories.</p>
                        <a href="https://www.instagram.com/example_username" target="_blank" className="text-sm text-gray-700 font-medium hover:underline">@example_username</a>
                    </div>

                    {/* Gmail Card */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-red-500 mb-4" viewBox="0 0 512 512" fill="currentColor">
                            <path d="M48 96c0-17.7 14.3-32 32-32H432c17.7 0 32 14.3 32 32V384c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32V96zm22.6 15.6l189.9 146.4c1.6 1.2 3.3 1.8 5.1 1.8s3.5-.6 5.1-1.8l189.9-146.4c3.2-2.5 4.5-6.7 3.3-10.6s-4.5-6.7-8.3-6.7H53c-3.8 0-7.1 2.8-8.3 6.7s0-8.1 3.3-10.6z"/>
                        </svg>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Gmail</h3>
                        <p className="text-sm text-gray-500 mb-4">Send us an email for detailed inquiries and business questions.</p>
                        <a href="mailto:info@example.com" className="text-sm text-gray-700 font-medium hover:underline">info@example.com</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
