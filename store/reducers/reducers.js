export function boxReducer(state = {},action){
    switch(action.type){
        case "UPDATE_GRID":{
            if(state.boxes === undefined)
                state = {...state, boxes:[]}
            return state = {...state, boxes:[... action.payload]};
            }
        case "ADD_BALLTOBOX":
        {
            let currentBoxes = state.boxes;
            currentBoxes.forEach((box)=>{
                
                if(box.row === action.payload.row && box.column === action.payload.column && !box.isFull){
                    box.noOfBalls++;
                    if(box.noOfBalls === box.maxBalls){
                        box.isFull = true;
                    }

                }
            })
            return state = {...state, boxes: currentBoxes}
        }
        case "CHANGE_BOXCOLOR":
        {
            let currentBoxes = state.boxes;
            currentBoxes.forEach((box)=>{
                if(box.row === action.payload.row && box.column === action.payload.column){
                    box.color = action.payload.color;
                    console.log(box.color)
                }
            })
            return state = {...state, boxes: currentBoxes}
        }
        case "EMPTY_BOX" :
        {
            let currentBoxes = state.boxes;
            currentBoxes.forEach((box)=>{
                if(box.row === action.payload.row && box.column === action.payload.column)
                    box.color = "none",
                    box.noOfBalls = 0,
                    box.isFull = false
            })
            return state = {...state, boxes: currentBoxes}
        }
    }
    return state;
}

export function userReducer(state = {},action){

    switch(action.type){
        case "ADD_USER":{
            console.log(action.payload)
            return state = {...state, color:action.payload.userColor, score:action.payload.userScore, websocket: action.payload.websocket}
        }
    }
    return state;

}