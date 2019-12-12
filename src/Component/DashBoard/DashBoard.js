import React, { Component } from 'react';
import './DashBoard.css';

class DashBoardComponent extends Component {

    // Constructor to Intialize User Data
    constructor (props) {
        super(props);
        this.state = {
            userData: {},
        }
    }

    componentDidMount() { // Get User Info
        this.getUserInfo();
    }

    async getUserInfo() { // Token Validate
        let userData = await localStorage.getItem('userInfo');
        if (userData !== null) {
            userData = JSON.parse(userData);
            this.setState({ userData });
        }
    }

    // Render Dashboard Html to Browser
    render() {
        return (
            <div className="m-t10">
                <div className="m-b20">
                    <div className="row">  
                        <div className="col-md-12 m-l-32">
                            <h1>
                                WelCome -&nbsp;
                                {
                                    this.state.userData.hasOwnProperty('first_name') ?
                                    this.state.userData.first_name : ''
                                } &nbsp;
                                {
                                    this.state.userData.hasOwnProperty('last_name') ?
                                    this.state.userData.last_name : ''
                                }
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashBoardComponent;
