import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostDetail from './components/PostDetail/PostDetail';
import Home from './pages/Home';
import Profile from './pages/Profile';

export const MyContext = createContext();
const userId = 2;

function App() {
    const [user, setUser] = useState({});
	const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = await res.json();
            setUser(data);
        };
        fetchUser();
    }, [ ]);

    return (
        <MyContext.Provider value={{ userInfo: [user], userPost: [userPosts, setUserPosts] }}>
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
