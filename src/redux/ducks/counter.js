const INCREMENT = 'INCREMENT' //action type I
const DECREMENT = 'DECREMENT' //action type II

export function increment(){ //action creator function I
    return{
        type: INCREMENT
    }
}
export function decrement(){ //action creator function II
    return{
        type: DECREMENT
    }
}

const initialState = { //initial state for our counter
    count: 0
}

const reducer = (state=initialState, action) =>{ //reducer to carryout increment or decrement operation
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return{
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }

}

export default reducer
