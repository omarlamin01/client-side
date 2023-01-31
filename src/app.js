import {BrowserRouter as Router, Route} from 'react-router-dom';

const app = () => (
    <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
    </Router>
);

export default app
