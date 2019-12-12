import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

class Logout extends Component {
    componentDidMount () { // Logout
        this.props.onLogout();
    }
    render (){
        return <Redirect to="/login" />
    };
}

// Logout function to set token-null in Reducer state
const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout)
