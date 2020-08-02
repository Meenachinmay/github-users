import React, { Component } from 'react';

class Navbar extends Component {
    render(){
        return (
            <div className="navbar bg-dark">
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

export default Navbar;