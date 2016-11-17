import * as Constant  from './Constants';
import { combineReducers } from 'redux';


String.prototype.hashCode = function(){
    var hash = 0;
    if (this.length == 0) return hash;
    for (var i = 0; i < this.length; i++) {
        var character = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+character;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

/**
 * create new item from action data
 */
const newItem = (action, i) => {
    return {
        id: action.data.hashCode() + i,
        data: action.data
    };
};

const itemList = (state = [], action) => {
    switch (action.type) {
        case Constant.ADD_ITEM_ACTION:
            return [...state, newItem(action, state.length)]; //append to current state
        default:
            return state;
    }
};

/*
 returns object allReducers as:
 {
    itemList : [{id,data},{id,data},{id,data}.....]
 }
 */
const allReducers = combineReducers({
    itemList
});

export default allReducers;


