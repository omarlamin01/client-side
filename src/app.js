import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';

const app = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact element={<Join />} />
                <Route path="/chat" element={<Chat />} />
            </Switch>
        </Router>
    );
};

export default app
