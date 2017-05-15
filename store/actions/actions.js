export function updateGrid(payload){
    return {
        type: "UPDATE_GRID",
        payload: payload
    }
}

export function addBallToBox(payload){
    return {
        type: "ADD_BALLTOBOX",
        payload: payload
    }
}

export function changeBoxColor(payload){
    return {
        type: "CHANGE_BOXCOLOR",
        payload: payload
    }
}

export function emptyBox(payload){
    return {
        type: "EMPTY_BOX",
        payload: payload
    }
}

export function addUser(payload){
    return {
        type: "ADD_USER",
        payload: payload
    }
}