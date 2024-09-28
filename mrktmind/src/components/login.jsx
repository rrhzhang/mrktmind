import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Import the auth object
import '../styles/login.css'; // Import login.css

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      navigate('/final-board'); // Navigate to FinalBoard after successful login
    } catch (error) {
      setError('Login failed: ' + error.message);
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      navigate('/final-board'); // Navigate to FinalBoard after account creation
    } catch (error) {
      setError('Account creation failed: ' + error.message);
    }
  };

  return (
    <div className="login-container">
      <h1>{isCreatingAccount ? 'Create an Account' : 'Login'}</h1>

      {user ? (
        <div className="welcome-message">
          <p>Welcome, {user.email}!</p>
          <button onClick={() => setUser(null)}>Logout</button>
        </div>
      ) : (
        <form onSubmit={isCreatingAccount ? handleCreateAccount : handleLogin}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">
            {isCreatingAccount ? 'Create Account' : 'Login'}
          </button>
        </form>
      )}

      {error && <p className="error">{error}</p>}

      {!user && (
        <p>
          {isCreatingAccount ? (
            <span>
              Already have an account?{' '}
              <button className="toggle-button" onClick={() => setIsCreatingAccount(false)}>
                Login
              </button>
            </span>
          ) : (
            <span>
              Don't have an account?{' '}
              <button className="toggle-button" onClick={() => setIsCreatingAccount(true)}>
                Create Account
              </button>
            </span>
          )}
        </p>
      )}
    </div>
  );
}

export default Login;
