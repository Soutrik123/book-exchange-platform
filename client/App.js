import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import AddBook from './AddBook';
import Books from './Books';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/add-book" component={AddBook} />
                <Route path="/books" component={Books} />
            </Switch>
        </Router>
    );
};

export default App;