export const initialState = {
    basket: [],
};

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //log to add to basket
            break;
        case 'REMOVE_FROM_BASKET':
            //logic for removing from basket
            break;
        default:
            return state;
    }
}
export default reducer;