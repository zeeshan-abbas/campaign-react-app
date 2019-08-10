import Ajv from 'ajv';

const defaults = {
    v5: true,
    coerceTypes: 'array', // important for query string params
    allErrors: false,
    useDefaults: true,
    $data: true, // required for ajv-keywords
    defaultLanguage: 'en'
};

const campaignSchema = {
    type: 'object',
    required: ['id', 'name', 'startDate', 'endDate','Budget'],
    properties: {
        id: { type: 'number'},
        name: {type: 'string'},
        startDate: {type: 'string'},
        endDate: {type: 'string'},
        Budget: {type: 'number'}
    }
};

const campaignArraySchema = {
    type: 'array',
    items: campaignSchema
};

export const validateCampaign = (campaign) => {
    const ajv = new Ajv(defaults);
    const validator = ajv.compile(campaignSchema);
    const valid = validator(campaign);
    if (!valid) {
        console.error(`Invalid Input: ${ _handleError(validator.errors)}`);
    }
    return valid;
};

export const validateCampaignList = (campaignList) => {
    const ajv = new Ajv(defaults);
    const validator = ajv.compile(campaignArraySchema);
    const valid = validator(campaignList);
    if (!valid) {
        console.error(`Invalid Input: ${ _handleError(validator.errors)}`);
    }
    return valid;
};

const _handleError = (errors) => {
    const error = errors[0];
    if (error.keyword === 'required') {
        return `${error.params.missingProperty} is required`;
    } else if (error.keyword === 'minLength' || error.keyword == 'maxLength' || error.keyword === 'type') {
        return `${error.dataPath.replace('.', '')} ${error.message}`;
    } else {
        return error.message;
    }
}
