import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';

const app = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={Join} />
                <Route path="/chat" component={Chat} />
            </Routes>
        </Router>
    );
};

export default app
