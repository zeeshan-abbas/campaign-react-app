import { ACTION_CAMPAIGN_ADD_ALL } from '../../constants';

export function addCampaigns(campaigns) {
    return {
        type: ACTION_CAMPAIGN_ADD_ALL,
        payload: campaigns
    };
}
