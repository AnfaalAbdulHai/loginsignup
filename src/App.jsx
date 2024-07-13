// import Login from './Login/Login';
// import Signup from './Signup/Signup';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [hasAccount, setHasAccount] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle the signup logic here
    setHasAccount(true);
    setIsLoggedIn(true);
  };

  const handleLogin = () => {
    // Handle the login logic here
    setIsLoggedIn(true);
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <h2>Welcome Back!</h2>
      ) : (
        <>
          {hasAccount ? (
            <LoginForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              setHasAccount={setHasAccount}
            />
          ) : (
            <SignupForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleSignup={handleSignup}
              setHasAccount={setHasAccount}
            />
          )}
        </>
      )}
    </div>
  );
}

function SignupForm({ email, setEmail, password, setPassword, handleSignup, setHasAccount }) {
  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup();
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account?{' '}
        <button className="link-button" type="button" onClick={() => setHasAccount(true)}>Login</button>
      </p>
    </div>
  );
}

function LoginForm({ email, setEmail, password, setPassword, handleLogin, setHasAccount }) {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <button className="link-button" type="button" onClick={() => setHasAccount(false)}>Signup</button>
      </p>
    </div>
  );
}

export default App;
