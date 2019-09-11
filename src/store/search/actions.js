import * as type from './types';
import axios from "axios";

const fetchBeersStart = () => {
    return {
        type: type.FETCH_BEERS_START
    };
};

const fetchBeersSuccess = (results, id) => {
    return {
        type: type.FETCH_BEERS_SUCCESS,
        results: results,
        id: id
    };
};

const fetchBeersError = (err) => {
    return {
        type: type.FETCH_BEERS_ERROR,
        error: err
    };
};

export const fetchOrders = (id) => {
    return dispatch => {
        dispatch(fetchBeersStart());

        axios.get('?uid=' + id).then(res => {
            let results = null;
            if (res.data.input) {
                results = res.data.input.map(beer => {
                    return {
                        id: beer.id,
                        name: beer.name,
                        description: beer.description,
                        abv: beer.abv,
                        ibu: beer.ibu
                    };
                });
            }
            dispatch(fetchBeersSuccess(results, id));
        }).catch(err => {
            dispatch(fetchBeersError(err));
        });
    }
};
