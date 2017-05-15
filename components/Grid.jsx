import React, { Component } from 'react';
import Box from './Box.jsx';
import {connect} from "react-redux";
import {updateGrid,addBallToBox,changeBoxColor,addUser} from "./../store/actions/actions"

class Grid extends Component {
    constructor(props){
        super(props);
        this.state = {boxes:[]}
        let websocket =  new WebSocket("ws://localhost:8000")
        websocket.addEventListener("open",()=>{
            websocket.addEventListener("message",(message)=>{
                if(JSON.parse(message.data).userColor !== undefined)
                    this.props.dispatch(addUser({...JSON.parse(message.data),websocket: websocket}))
                else{
                    this.props.dispatch(updateGrid(JSON.parse(message.data).gameGrid))
                }

                this.setState({boxes : this.props.box.boxes,turn: JSON.parse(message.data).turn});
                console.log("got data")
            });
        })
    }
    componentWillMount(){
        
    }
    render() {
        return (
            <div className="grid" >
                {this.renderBoxes()}
                <br className="clearfix"/>
                <div style={{background: 'white'}}>{this.props.user.color === this.state.turn? "Your turn": ""}</div>
            </div>
        );
    }
    handleClick = (box) => {
       let row = box.props.row;
       let col = box.props.column;
        // this.props.dispatch(addBallToBox({
        //     row : row,
        //     column: col
        // }))
        // this.props.dispatch(changeBoxColor({
        //     row : row,
        //     column: col,
        //     color: box.props.userColor
        // }))
        let ws = this.props.user.websocket;
        ws.send(JSON.stringify({
            row: row,
            column: col
        }))

    }
    boxEl = [];
    getBox(row,column){
        return this.refs[row+"x"+column]
    }
    renderBoxes(){
        var boxes = this.props.box.boxes;
        if(boxes !== undefined){
            this.boxEl = boxes.map((box)=>{
                let index = boxes.indexOf(box)
                return <Box key={box.row+"x"+box.column} turn={this.state.turn} ref={box.row+"x"+box.column} userColor={this.props.user.color} row={box.row} onClick={this.handleClick.bind(this)} maxBalls={box.maxBalls} noOfBalls={box.noOfBalls} column={box.column}color={box.color} isFull={box.isFull} />
            })
            return this.boxEl;
        }
    }
}
export default connect((state) => state)(Grid);
