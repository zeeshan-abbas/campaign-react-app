import { isWithinRange, isBefore, isAfter } from 'date-fns'

export function applyDateFilter(campaignList, startDate, endDate) {
    if (!campaignList) {
        return [];
    }
    if (!startDate || !endDate) {
        return campaignList;
    }
    return campaignList.filter(campaign => {
        const isStartDateInRange = campaign.startDate ? isWithinRange(campaign.startDate, startDate, endDate) : false;
        const isEndDateInRange = campaign.endDate ? isWithinRange(campaign.endDate, startDate, endDate) : false;
        if (campaign.startDate && campaign.endDate) {
            return isStartDateInRange && isEndDateInRange;
        } else if (campaign.startDate) {
            return isStartDateInRange;
        } else if (campaign.endDate) {
            return isEndDateInRange;
        }
        return false;
    })
}

export function applySearch(campaignList, searchText) {
    if (!campaignList) {
        return [];
    }
    if (!searchText) {
        return campaignList;
    }
    return campaignList.filter(campaign => campaign.name.toLowerCase().includes(searchText.toLowerCase()))
}

export function applyPagination(campaignList, currentPage, itemsPerPage) {
    if (!campaignList) {
        return [];
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    return campaignList.slice(startIndex, endIndex);
}

export function isCampaignActive(startDate, endDate) {
    if (startDate && endDate) {
        return isWithinRange(new Date(), startDate, endDate);
    } else if (startDate) {
        return isAfter(new Date(), startDate);
    } else if (endDate) {
        return isBefore(new Date(), endDate);
    }
    return false;
}

export function formatBudget(amount) {
    if (!amount) {
        return '';
    }
    let formatted = amount;
    if (amount >= 1e3 && amount < 1e6) {
        formatted = +(amount / 1e3).toFixed(1) + "K";
    }
    if (amount >= 1e6 && amount < 1e9) {
        formatted = +(amount / 1e6).toFixed(1) + "M";
    }
    if (amount >= 1e9 && amount < 1e12) {
        formatted = +(amount / 1e9).toFixed(1) + "B";
    }
    if (amount >= 1e12) {
        formatted = +(amount / 1e12).toFixed(1) + "T";
    }
    return formatted + ' USD';
}