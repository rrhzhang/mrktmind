import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PinterestLayout from './components/PinterestLayout'; 
import LoginPage from './components/login';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <div>
                {/* Route to login if not authenticated, else redirect to Pinterest Board */}
                <Switch>
                    <Route exact path="/">
                        {isAuthenticated ? <Redirect to="/board" /> : <LoginPage onLogin={handleLogin} />}
                    </Route>

                    {/* Pinterest board route with the search bar */}
                    <Route path="/board">
                        {isAuthenticated ? (
                            <div>
                                <SearchBar />
                                <PinterestLayout />
                            </div>
                        ) : (
                            <Redirect to="/" />
                        )}
                    </Route>

                    {/* Add other routes here if needed */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
