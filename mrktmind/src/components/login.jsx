import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import '../styles/login.css'; // Make sure you have this CSS file set up
import googleIcon from '../assets/imgs/google.png'; // Import the Google image

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false); // Controls whether login or account creation is shown
  const navigate = useNavigate();

  // Handle user login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      navigate('/final-board'); // Redirect to final-board after successful login
    } catch (error) {
      setError('Login failed: ' + error.message);
    }
  };

  // Handle new account creation
  const handleCreateAccount = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home-page'); // Redirect to final-board after account creation
    } catch (error) {
      setError('Account creation failed: ' + error.message);
    }
  };

  // Handle Google sign-in
  const handleGoogleLogin = async () => {
    setError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      navigate('/home-page'); // Redirect to final-board after successful login
    } catch (error) {
      setError('Google Sign-In failed: ' + error.message);
    }
  };

  return (
    <div className={`container ${isCreatingAccount ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-up-container">
        <form onSubmit={handleCreateAccount}>
          <h1>Create Account</h1>
          <div className="social-container" onClick={handleGoogleLogin}>
            <img
              src={googleIcon}
              alt="Sign in with Google"
              className="google-button"
            />
            <span>or sign up through Google</span>
          </div>
          <input
            type="text"
            placeholder="Email"
            value={email} onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleLogin}>
          <h1>Sign in</h1>
          <div className="social-container" onClick={handleGoogleLogin}>
            <img
              src={googleIcon}
              alt="Sign in with Google"
              className="google-button"
            />
            <span>or sign in through Google</span>
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email} onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>mrktmind</h1>
            <p>a smart market, tailored for you</p>
            <button className="ghost" id="signIn" onClick={() => setIsCreatingAccount(false)}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>mrktmind</h1>
            <p>a smart market, tailored for you</p>
            <button className="ghost" id="signUp" onClick={() => setIsCreatingAccount(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
