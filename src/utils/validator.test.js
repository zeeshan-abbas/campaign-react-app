import {
    validateCampaign,
    validateCampaignList,
} from './validator';

const campaignList = [
    {id: 1, name: "Divavu", startDate: "8/10/2019", endDate: "8/20/2019", Budget: 88377},
    {id: 2, name: "Jaxspan", startDate: "7/10/2019", Budget: 608715},
    {id: 3, name: "Miboo",  endDate: "6/20/2019", Budget: 239507}
];

describe('Validator', () => {
    describe('Validate Campaign', () => {
        it ('Should not validate empty input', () => {
            const isValid = validateCampaign();
            expect(isValid).toBeFalsy()
        });
        it ('Should not validate input without required properties', () => {
            const isValid = validateCampaign({
                id: 1,
                startDate: '8/2/2019',
                endDate: '2/9/2019',
                Budget: '2000'
            });
            expect(isValid).toBeFalsy();
        });
        it ('Should not validate input due to start & end date', () => {
            const isValid = validateCampaign({
                id: 1,
                name: 'Sheila',
                startDate: '8/20/2019',
                endDate: '2/9/2019',
                Budget: '2000'
            });
            expect(isValid).toBeFalsy();
        });
        it ('Should not validate input ', () => {
            const isValid = validateCampaign({
                id: 1,
                name: 'ABCD',
                startDate: '8/20/2019',
                endDate: '2/9/2019',
                Budget: '2000'
            });
            expect(isValid).toBeFalsy();
        });
    });
    describe('Validate Campaign List', () => {
        it ('Should not validate empty input', () => {
            const isValid = validateCampaignList();
            expect(isValid).toBeFalsy()
        });
        it ('Should validate campaign list', () => {
            const isValid = validateCampaignList(campaignList);
            expect(isValid).toBeTruthy();
        });
    });
});