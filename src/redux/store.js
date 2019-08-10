import {createStore, combineReducers} from 'redux';
import campaign from './reducers/campaignReducer'

export default createStore(
    combineReducers({
        campaign
    }, {})
)
