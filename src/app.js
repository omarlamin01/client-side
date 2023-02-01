import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';

const app = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Join />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </Router>
    );
};

export default app
