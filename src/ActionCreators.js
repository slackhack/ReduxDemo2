import * as Constant from './Constants';

export function addItemAction(text) {
    return {
        type: Constant.ADD_ITEM_ACTION,
        data: text
    }
}


export function removeItemAction(index) {
    return {
        type: Constant.REMOVE_ITEM_ACTION,
        data: index
    }
}