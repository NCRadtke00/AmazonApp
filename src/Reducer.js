export const initialState = {
    basket: [{
        id:"3254354345",
        title: "Maledan Compatible with Fitbit Sense & Versa 3 Charger Replacement USB Charging Cable Dock Stand for Sense Smartwatch, 2 Pack 3.3Ft Durable Portable Charger Dock Power Cable Cord, Black/Black",
        price: 9.99,
        rating:4,
        image:"https://images-na.ssl-images-amazon.com/images/I/71r6OE-WsTL._AC_SL1500_.jpg",
    },
    {
        id:"3254354345",
        title: "Maledan Compatible with Fitbit Sense & Versa 3 Charger Replacement USB Charging Cable Dock Stand for Sense Smartwatch, 2 Pack 3.3Ft Durable Portable Charger Dock Power Cable Cord, Black/Black",
        price: 9.99,
        rating:4,
        image:"https://images-na.ssl-images-amazon.com/images/I/71r6OE-WsTL._AC_SL1500_.jpg",
    }],
    user: null,
};

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //log to add to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            //logic for removing from basket
            return {state};
        default:
            return state;
    }
}
export default reducer;