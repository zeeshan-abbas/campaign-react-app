import { CAMPAIGN_ADD_ALL } from '../actions/types';
import postsReducer from './campaignReducer';

describe('Campaign Reducer', () => {

    const campaignList = [
        {"id":1,"name":"Divavu","startDate":"8/10/2019","endDate":"8/20/2019","Budget":88377}
    ];

    it('Should return default state', () => {
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', () => {

        const newState = postsReducer(undefined, {
            type: CAMPAIGN_ADD_ALL,
            payload: campaignList
        });
        expect(newState).toEqual(campaignList);

    });

});