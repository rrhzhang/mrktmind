import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // import usenavigate
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import '../styles/login.css';
import googleIcon from '../assets/imgs/google.png'; // import the google image

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false); // controls whether login or account creation is shown
  const navigate = useNavigate(); // initialize navigate hook

  // handle user login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      navigate('/final-board'); // navigate to final-board after successful login
    } catch (error) {
      setError('login failed: ' + error.message);
    }
  };

  // handle new account creation
  const handleCreateAccount = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      navigate('/final-board'); // navigate to final-board after account creation
    } catch (error) {
      setError('account creation failed: ' + error.message);
    }
  };

  // handle google sign-in
  const handleGoogleLogin = async () => {
    setError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      navigate('/final-board'); // navigate to final-board after successful google login
    } catch (error) {
      setError('google sign-in failed: ' + error.message);
    }
  };

  return (
    <div className={`container ${isCreatingAccount ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-up-container">
        <form onSubmit={handleCreateAccount}>
          <h1>create account</h1>
          <div className="social-container" onClick={handleGoogleLogin}>
            <img
              src={googleIcon}
              alt="sign in with google"
              className="google-button"
            />
            <span>or sign up through google</span>
          </div>
          <input
            type="text"
            placeholder="email"
            value={email} onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password} onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">sign up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleLogin}>
          <h1>sign in</h1>
          <div className="social-container" onClick={handleGoogleLogin}>
            <img
              src={googleIcon}
              alt="sign in with google"
              className="google-button"
            />
            <span>or sign in through google</span>
          </div>
          <input
            type="email"
            placeholder="email"
            value={email} onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password} onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#">forgot your password?</a>
          <button type="submit">sign in</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>mrktmind</h1>
            <p>a smart market, tailored for you</p>
            <button className="ghost" id="signIn" onClick={() => setIsCreatingAccount(false)}>sign in</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>mrktmind</h1>
            <p>a smart market, tailored for you</p>
            <button className="ghost" id="signUp" onClick={() => setIsCreatingAccount(true)}>sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
