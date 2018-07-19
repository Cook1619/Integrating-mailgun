import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';
import BlogList from './BlogList';
import SingleBlog from './Admin/SingleBlog';
import AdminHome from './Admin/AdminHome';
import Donate from './donate';
import Contact from './contact'

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <nav>
                        <Link to="/goodbye">Goodbye</Link>
                        <Link to="/blogs">Blogs</Link>
                        <Link to="/admin">Admin Login</Link>
                        <Link to="/contact">Contact Us</Link>
                    </nav>
                    <AuthButton />
                    <Switch>
                        <Route exact path="/" component={HelloWorld} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/donate" component={Donate} />
                        <Route path="/blogs" component={BlogList} />
                        <Route path="/contact" component={Contact} />
                        <PrivateRoute path="/goodbye" component={GoodbyeWorld} />
                        <PrivateRoute path="/admin" component={AdminHome} />
                        <PrivateRoute path="/:id" component={SingleBlog} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;