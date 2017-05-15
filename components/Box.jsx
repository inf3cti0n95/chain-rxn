import React, { Component } from 'react';
import { connect } from 'react-redux'
import Ball from './Ball.jsx'

class Box extends Component {
    constructor(props){
        super(props);
        this.state = {
            noOfBalls: this.props.noOfBalls,
            color: this.props.color,
            isFull: this.props.isFull,
            maxBalls: this.props.maxBalls,
            row: this.props.row,
            column: this.props.column
        }
       
    }
    render() {
        return (
            <div className="box" style={{borderColor:this.props.turn}} onClick={()=>{this.props.onClick(this)}} >
                <div className="innerBox">
                    {this.renderBalls()}
                </div>
            </div>
        );
    }


    componentWillReceiveProps(nextProps){
        this.setState({noOfBalls: nextProps.noOfBalls,isFull: nextProps.isFull, color: nextProps.color})
    }

    renderBalls(){
        let balls = [];
        let {noOfBalls,color, row, column, maxBalls,isFull} =  this.state;   
        for(let i = 0; i< noOfBalls && i<maxBalls; i++){
            let ball = (<Ball key={row+"x"+column+"-"+i} color={color}/>);
            balls.push(ball);
        }

        return balls;
    }
}

export default (Box);