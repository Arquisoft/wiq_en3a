'use client'

import React, { useState } from 'react';
import Link from 'next/link'

const RegisterPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your registration logic here
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/3">
                <h1 className="text-2xl font-bold mb-4">Register Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="username">
                            Username:
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
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
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="confirmPassword">
                            Confirm Password:
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Register
                    </button>
                </form>
                <div className="mt-4">
                    <Link href="/login" className='text-blue-500 hover:text-blue-700'>
                        Already have an account? Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;