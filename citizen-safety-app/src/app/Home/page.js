import React from 'react';
import Navbar from '@/components/Navbar/Navbar';

const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>

            <main className="container mx-auto py-8">
                <h1 className="text-4xl font-bold mb-4">Welcome to Citizen Safety App</h1>
                <p className="text-lg text-gray-600">
                    We are here to help you detect scams, verify SMS headers and templates, manage Bitcoin wallets,
                    report fraud, and educate you about privacy.
                </p>
                {/* Add your content here */}
                <div className="flex justify-center mt-8">
                    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Start Exploring
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <img src="awesome-animation.gif" alt="Awesome Animation" />
                </div>
            </main>

            <footer className="bg-gray-800 py-4 text-white text-center">
                <div className="container mx-auto">
                    &copy; {new Date().getFullYear()} Citizen Safety App. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default HomePage;