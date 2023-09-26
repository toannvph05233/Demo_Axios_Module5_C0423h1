
// Tạo ra các action.
export const addCart = (product) => {
    return {
        type: 'ADD',
        payload: product
    };
};
