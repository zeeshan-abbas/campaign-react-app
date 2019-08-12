import { CAMPAIGN_ADD_ALL } from './types';

export function addCampaigns(campaigns) {
    return {
        type: CAMPAIGN_ADD_ALL,
        payload: campaigns
    };
}
