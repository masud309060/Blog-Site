import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostDetail from './components/PostDetail/PostDetail';
import Home from './pages/Home';
import Profile from './pages/Profile';

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
                    <Route exact path="/post/:postId">
                        <PostDetail />
                    </Route>
                    <Route path="/users">
                        <h1>hello</h1>
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                </Switch>
            </Router>
        </MyContext.Provider>
    );
}

export default App;
