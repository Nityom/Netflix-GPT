import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = (e) => {
        e.preventDefault();
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img 
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg" 
                    alt="background" 
                    width="100%" 
                    height="auto"
                />
            </div>
            <main>
                <form className='p-12 bg-black w-1/4 my-36 mx-auto text-white right-0 left-0 absolute rounded-lg bg-opacity-80'>
                    <h1 className='font-bold py-4 text-white text-3xl'>
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                    {!isSignInForm&&(<input 
                        type="text" 
                        placeholder='Full Name ' 
                        className='p-4 m-2 rounded-lg w-full bg-gray-300' 
                    />)}
                    <input 
                        type="text" 
                        placeholder='Email Address' 
                        className='p-4 m-2 rounded-lg w-full bg-gray-300' 
                    />
                
                    <input 
                        type="password" 
                        placeholder='Password' 
                        className='p-4 m-2 rounded-lg w-full bg-gray-300' 
                    />
                    <button className='p-4 my-6 text-white bg-red-700 rounded-lg w-full cursor-pointer'>
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                    <button className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                        {isSignInForm 
                            ? "New to Netflix? Sign Up Now" 
                            : "Already have an account? Sign In"
                        }
                    </button>
                </form>
            </main>
        </div>
    )
}

export default Login