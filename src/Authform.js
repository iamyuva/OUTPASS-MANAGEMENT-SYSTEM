import React, { useState } from 'react';

export default function Authform() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button
                        className={isLogin ? 'active' : ''}
                        onClick={() => setIsLogin(true)}
                    >
                        Login

                    </button>
                    <button
                        className={!isLogin ? 'active' : ''}
                        onClick={() => setIsLogin(false)}
                    >
                        Signup
                    </button>
                </div>

                {isLogin ? (
                    <div className='form'>
                        <input type='name' placeholder='Name' />
                        <input type='email' placeholder='Email' />
                        <input type='password' placeholder='Password' />
                        <div className='forgot-password'>
                            <a href='#'>Forgot Password?</a>
                        </div>
                        <button>Login</button>
                        <p>
                            Not a Member?{' '}
                            <a href='#' onClick={() => setIsLogin(false)}>Signup now</a>
                        </p>
                    </div>
                ) : (
                    <div className='form'>
                        <input type='text' placeholder='Name' />
                        <input type='email' placeholder='Email' />
                        <input type='password' placeholder='Password' />
                        <input type='password' placeholder='Confirm Password' />
                        <button>Signup</button>
                        <p>
                            Already have an account?{' '}
                            <a href='#' onClick={() => setIsLogin(true)}>Login here</a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
