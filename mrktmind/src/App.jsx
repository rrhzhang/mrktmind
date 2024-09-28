import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Import the auth object from firebase.js
import './style.css'; // Import the CSS file
import Pin from './components/Pin.jsx'
import Modal from './components/Modal.jsx'
import PinterestLayout from './components/PinterestLayout'; // Import the layout component

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Clear error message before attempting login

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      setError('Login failed: ' + error.message);
    }
  };

  const handleLogout = () => {
    setUser(null); // Simple logout by clearing the user state
  };

  return (
    <div>
      <Modal />
      {user ? (
        <div>
          <div className="welcome-message">
            <p>Welcome, {user.email}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
          {/* Display Pinterest-style layout after user is logged in */}
          <PinterestLayout />
        </div>
      ) : (
        <div className="login-container">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
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
            <button type="submit">Login</button>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
