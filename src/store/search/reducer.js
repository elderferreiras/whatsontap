import * as type from './types';
import { updateObject } from '../../shared/utility';

const initialState = {
    results: null,
    id: null,
    loading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case type.FETCH_BEERS_START:
            return fetchBeersStart(state, action);
        case type.FETCH_BEERS_SUCCESS:
            return fetchBeersSuccess(state, action);
        case type.FETCH_BEERS_ERROR:
            return fetchBeersError(state, action);
        default:
            return state;
    }
};

const fetchBeersStart = (state, action) => {
    return updateObject(state, { loading: true, results: null, id: null})
};

const fetchBeersSuccess = (state, action) => {
    return updateObject(state, { results: action.results, id: action.id, loading: false, error: null})
};

const fetchBeersError = (state, action) => {
    return updateObject(state, { results: null, id: null, loading: false, error: action.error})
};

export default reducer;