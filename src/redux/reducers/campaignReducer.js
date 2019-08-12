import {CAMPAIGN_ADD_ALL} from '../actions/types';

const initialState = [];

const campaignReducer = (state = initialState, {type, payload = []}) => {
    switch (type) {
        case CAMPAIGN_ADD_ALL:
            return [
                ...state,
                ...payload
            ];
        default:
            return state;
    }
};

export default campaignReducer;


