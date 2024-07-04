import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = (e) => {
        e.preventDefault();
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        setLoading(true);
        const message = checkValidData(
            isSignInForm ? null : name.current.value,
            email.current.value,
            password.current.value
        );
        setErrorMessage(message);

        if (message) {
            setLoading(false);
            return;
        }

        if (!isSignInForm) {
            // Sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(`User signed up: ${user.email}`);
                    return updateProfile(auth.currentUser, {
                        displayName: name.current.value,
                        photoURL: "https://avatars.githubusercontent.com/u/112824495?v=4"
                    });
                })
                .then(() => {
                    const {uid,email,displayName,photoURL} = auth.currentUser;

                    dispatch(
                        addUser({uid: uid , email:email, displayName:displayName,photoURL:photoURL,})
                    );
                    console.log('Profile updated!');
                    navigate("/browse");
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            // Sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(`User signed in: ${user.email}`);
                    navigate("/browse");
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    return (
        <div>
            <Header />
            <div className='absolute w-full h-full'>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg"
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>
            <main>
                <form className='p-12 bg-black w-1/4 my-36 mx-auto text-white absolute inset-0 m-auto rounded-lg bg-opacity-80'>
                    <h1 className='font-bold py-4 text-white text-3xl'>
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                    {!isSignInForm && (
                        <input
                            type="text"
                            ref={name}
                            placeholder='Full Name'
                            className='p-4 m-2 rounded-lg w-full bg-gray-800'
                            aria-label='Full Name'
                        />
                    )}
                    <input
                        ref={email}
                        type="email"
                        placeholder='Email Address'
                        className='p-4 m-2 rounded-lg w-full bg-gray-800'
                        aria-label='Email Address'
                    />
                    <input
                        ref={password}
                        type="password"
                        placeholder='Password'
                        className='p-4 m-2 rounded-lg w-full bg-gray-800'
                        aria-label='Password'
                    />
                    <button
                        className='p-4 m-2 my-6 text-white bg-red-700 rounded-lg w-full cursor-pointer'
                        onClick={handleButtonClick}
                        disabled={loading}
                        aria-label={isSignInForm ? "Sign In" : "Sign Up"}
                    >
                        {loading ? 'Loading...' : (isSignInForm ? "Sign In" : "Sign Up")}
                    </button>
                    {errorMessage && <p className='text-red-500 font-bold text-lg p-2'>{errorMessage}</p>}
                    <button className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                        {isSignInForm
                            ? "New to Netflix? Sign Up Now"
                            : "Already have an account? Sign In"}
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Login;
