'use client'

import React, { useState } from 'react';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/3">
                <h1 className="text-2xl font-bold mb-4">Login Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;