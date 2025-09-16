import React from 'react';

const Footer = () => {
    return (
        <>
            <hr />
            <footer className="w-full bg-[#ffffff] border-t border-b border-[#E1DCD3] py-12 px-4 md:px-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <div className="max-w-7xl mx-auto">
                    {/* Footer Content */}
                    <div className="flex flex-col md:grid md:grid-cols-3 gap-8 py-8 md:py-16">
                        {/* Column 1: Stay Up to Date */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                                Stay Up to Date
                            </h2>
                            <p className="text-sm md:text-base text-gray-600 mb-6">
                                Keep up to date with new collections and design.
                            </p>
                            {/* Social Media Links */}
                            <div className="flex space-x-6">
                                <a href="#" aria-label="Facebook">
                                    <img src="images/instagram.svg" alt=""  className="w-6 h-6 text-gray-600 hover:text-black transition-colors duration-200" viewBox="0 0 448 512"/>
                                </a>
                                <a href="#" aria-label="Facebook">
                                    <img src="images/gmail2.svg" alt=""  className="w-6 h-6 text-gray-600 hover:text-black transition-colors duration-200" viewBox="0 0 448 512"/>
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Store Links */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left md:border-l md:border-[#E1DCD3] md:pl-8 mt-8 md:mt-0">
                            <h3 className="text-base font-semibold text-gray-800 uppercase tracking-widest mb-4">Go To</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-black transition-colors duration-200">Home</a></li>
                                <li><a href="#explore" className="hover:text-black transition-colors duration-200">Explore</a></li>
                                <li><a href="#about" className="hover:text-black transition-colors duration-200">About Us</a></li>
                                <li><a href="#whatsapp" className="hover:text-black transition-colors duration-200">Blogs</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Useful Links */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left md:border-l md:border-[#E1DCD3] md:pl-8 mt-8 md:mt-0">
                            <h3 className="text-base font-semibold text-gray-800 uppercase tracking-widest mb-4">Useful Links</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><a href="#" className="hover:text-black transition-colors duration-200">Follow Us</a></li>
                                <li><a href="#whatsapp" className="hover:text-black transition-colors duration-200">Whatsapp Us</a></li>
                                <li><a href="#reviews" className="hover:text-black transition-colors duration-200">Customer Reviews</a></li>
                                <li><a href="#story" className="hover:text-black transition-colors duration-200">Stories</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Copyright Note */}
                <div className="max-w-7xl mx-auto text-center text-xs text-gray-500 mt-6">
                    &copy; 2024 Your Company. All rights reserved.
                </div>
            </footer>
        </>
    );
};

export default Footer;
