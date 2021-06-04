import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostDetail from './components/PostDetail/PostDetail';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Users from './pages/Users';

export const MyContext = createContext();

function App() {
    const [user, setUser] = useState({});
	const [userPosts, setUserPosts] = useState([]);

    return (
        <MyContext.Provider value={{ userInfo: [user, setUser], userPost: [userPosts, setUserPosts] }}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/users">
                        <Users /> 
                    </Route>
                    <Route path="/post/:postId">
                        <PostDetail />
                    </Route>
                    <Route path="/profile/:userId">
                        <Profile />
                    </Route>
                </Switch>
            </Router>
        </MyContext.Provider>
    );
}

export default App;
