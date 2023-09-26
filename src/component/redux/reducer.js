
// Tạo ra 1 state : dữ liệu trong state: {carts: []}
// action: hành động để thao tác với state.

export const counterReducer = (state = {carts: []}, action) => {
    switch (action.type) {
        case 'ADD':
            return {carts: [...state.carts, action.payload]};
        default:
            return state;
    }
};
