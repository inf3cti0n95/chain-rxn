import React, { Component } from 'react';

class Ball extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div style={{backgroundColor: this.props.color}} className="ball"></div>
        );
    }
}

export default Ball;