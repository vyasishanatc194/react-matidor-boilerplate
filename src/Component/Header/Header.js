import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Header.css'
import history from '../../store/history';
class HeaderComponent extends Component {

    // Constructor to define State
    constructor (props) {
        super(props);
        this.state = {
            token: undefined,
        }
    }

   componentDidMount() { // Get Token to Check for Authentication
        this.getToken();
    }

    async getToken() { // Token Validate
        let token = await localStorage.getItem('token');
        if (token !== null) {
            this.setState({ token });
        }
    }

    handleLogout = () => { // Logout
        localStorage.removeItem('token');
        history.push('/login');
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark fixed-top h-60">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="navbar-brand" to="/" exact="true">React Matidor BoilerPlate</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {this.state.token === null || this.state.token === undefined || this.state.token === ''?
                            <Link className="navbar-brand" to="/login" exact="true">Login</Link>
                        :
                            <Link className="navbar-brand" to="/logout" exact="true">LogOut</Link>
                        }
                    </li>
                </ul>
            </nav>
        )
    }
}

export default HeaderComponent;
