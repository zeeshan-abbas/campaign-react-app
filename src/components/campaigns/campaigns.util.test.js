import {
    applyDateFilter,
    applySearch,
    applyPagination,
    isCampaignActive,
    formatBudget
} from './campaigns.util';

const campaignList = [
    {id: 1, name: "Divavu", startDate:"8/10/2019", endDate: "8/20/2019", Budget: 88377},
    {id: 2, name: "Jaxspan", startDate:"7/10/2019", Budget:608715},
    {id: 3, name: "Miboo",  endDate:"6/20/2019",Budget:239507},
    {id: 4, name: "Trilith", startDate:"8/25/2019",endDate:"11/30/2019", Budget: 179838},
    {id: 6, name: "Photojam", startDate:"7/25/2017",endDate:"6/23/2018", Budget: 858131},
    {id: 7, name: "Blogtag", startDate:"6/27/2017",endDate:"1/15/2018", Budget: 109078},
    {id: 8, name: "Rhyzio", startDate:"10/13/2017",endDate:"1/25/2018", Budget: 272552},
    {id: 9, name: "Zoomcast", startDate:"9/6/2017",endDate:"11/10/2017", Budget: 301919},
    {id: 10, name: "Realbridge", startDate :"3/5/2017",endDate:"10/2/2017 ",Budget: 505602}
];

describe('Campaign Util', () => {
    describe('Apply Date Filter', () => {
        it('Should return empty array', () => {
            const filteredCampaignList = applyDateFilter();
            expect(filteredCampaignList).toBeDefined();
            expect(filteredCampaignList.length).toBe(0);
        });
        it('Should return original array', () => {
            const filteredCampaignList = applyDateFilter(campaignList);
            expect(filteredCampaignList).toBeDefined();
            expect(filteredCampaignList.length).toBe(campaignList.length);
            expect(filteredCampaignList).toBe(campaignList);
        });
        it('Should return filtered data where start date overlaps', () => {
            const filteredCampaignList = applyDateFilter(campaignList, '7/9/2019', '7/20/2019');
            expect(filteredCampaignList).toBeDefined();
            expect(filteredCampaignList.length).toBe(1);
            expect(filteredCampaignList[0].startDate).toBeDefined();
            expect(filteredCampaignList[0].endDate).toBeUndefined();
        });
        it('Should return filtered data where end date overlaps', () => {
            const filteredCampaignList = applyDateFilter(campaignList, '6/9/2019', '6/20/2019');
            expect(filteredCampaignList).toBeDefined();
            expect(filteredCampaignList.length).toBe(1);
            expect(filteredCampaignList[0].startDate).toBeUndefined();
            expect(filteredCampaignList[0].endDate).toBeDefined();
        });
        it('Should return filtered data both dates overlap', () => {
            const filteredCampaignList = applyDateFilter(campaignList, '8/9/2019', '8/20/2019');
            expect(filteredCampaignList).toBeDefined();
            expect(filteredCampaignList.length).toBe(1);
            expect(filteredCampaignList[0].startDate).toBeDefined();
            expect(filteredCampaignList[0].endDate).toBeDefined();
        });
    });

    describe('Apply Search Filter', () => {
        it('Should return empty array', () => {
            const filteredCampaignList = applySearch();
            expect(filteredCampaignList).toBeDefined();
            expect(filteredCampaignList.length).toBe(0);
        });
        it('Should return original array', () => {
            const filteredCampaignList = applySearch(campaignList);
            expect(filteredCampaignList).toBeDefined();
            expect(filteredCampaignList.length).toBe(campaignList.length);
            expect(filteredCampaignList).toBe(campaignList);
        });
        it('Should return filtered data based on name', () => {
            const filteredCampaignList = applySearch(campaignList, 'ja');
            expect(filteredCampaignList).toBeDefined();
            expect(filteredCampaignList.length).toBe(2);
            filteredCampaignList.forEach(camp => expect(camp.name).toMatch(/ja/i))
        });
        it('Should return empty array', () => {
            const filteredCampaignList = applySearch(campaignList, 'jaa');
            expect(filteredCampaignList).toBeDefined();
            expect(filteredCampaignList.length).toBe(0);
        });
    });


    describe('Apply Pagination', () => {
        it('Should return empty array', () => {
            const filteredCampaignList = applyPagination();
            expect(filteredCampaignList).toBeDefined();
            expect(filteredCampaignList.length).toBe(0);
        });
        it('Should return original array', () => {
            const filteredCampaignList = applyPagination(campaignList);
            expect(filteredCampaignList).toBeDefined();
            expect(filteredCampaignList.length).toBe(campaignList.length);
            expect(filteredCampaignList).toBe(campaignList);
        });
        it('Should return original array', () => {
            const filteredCampaignList = applyPagination(campaignList, 1);
            expect(filteredCampaignList).toBeDefined();
            expect(filteredCampaignList.length).toBe(campaignList.length);
            expect(filteredCampaignList).toBe(campaignList);
        });
        it('Should return 6 record in page 1', () => {
            const filteredCampaignList = applyPagination(campaignList, 1, 6);
            expect(filteredCampaignList).toBeDefined();
            expect(filteredCampaignList.length).toBe(6);
        });
        it('Should return 4 record in page 2', () => {
            const filteredCampaignList = applyPagination(campaignList, 2, 6);
            expect(filteredCampaignList).toBeDefined();
            expect(filteredCampaignList.length).toBe(3);
        });
    });

    describe('Is Campaign Active', () => {
        it('Should return false with empty input', () => {
            const isActive = isCampaignActive();
            expect(isActive).toBeFalsy();
        });
        it('Should return false with input', () => {
            const campaign = campaignList[0];
            const isActive = isCampaignActive(campaign.startDate, campaign.endDate, '01/01/1970');
            expect(isActive).toBeFalsy();
        });
        it('Should return false with input', () => {
            const campaign = campaignList[0];
            const isActive = isCampaignActive(campaign.startDate, campaign.endDate, campaign.startDate);
            expect(isActive).toBeTruthy();
        });
    });
    describe('Format Budget', () => {
        it('Should return empty string with empty input', () => {
            const budget = formatBudget();
            expect(budget).toBe('');
        });
        it('Should return original amount with currency code', () => {
            const amount = '100';
            const budget = formatBudget(amount);
            expect(budget).toMatch(/100/);
            expect(budget).toMatch(/USD/);
        });
        it('Should return formatted amount (Thousand)', () => {
            const amount = '1000';
            const budget = formatBudget(amount);
            expect(budget).toMatch(/1K/);
            expect(budget).toMatch(/USD/);
        });
        it('Should return formatted amount (Million)', () => {
            const amount = '1000000';
            const budget = formatBudget(amount);
            expect(budget).toMatch(/1M/);
            expect(budget).toMatch(/USD/);
        });
        it('Should return formatted amount (Billion)', () => {
            const amount = '1000000000';
            const budget = formatBudget(amount);
            expect(budget).toMatch(/1B/);
            expect(budget).toMatch(/USD/);
        });
    })
});