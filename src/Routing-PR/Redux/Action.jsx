export const filter = (value) => {
    return {
        type: 'filter',
        payload: value
    }
}

export const sortTeam = (order) => {
    return {
        type: 'sortTeam',
        payload: order
    };
};

export const filterByCountry = (feeType) => {
    return {
        type: 'filterByCountry',
        payload: feeType
    };
};