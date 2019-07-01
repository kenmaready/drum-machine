import { combineReducers } from 'redux';

const SET_CURRENT_SOUND = 'SET_CURRENT_SOUND';

let currSoundReducer = (state = '', action) => {
    switch(action.type) {
        case SET_CURRENT_SOUND:
            return (action.payload);
        default:
            return state;
    }
}

export default combineReducers({
    currSound: currSoundReducer
});