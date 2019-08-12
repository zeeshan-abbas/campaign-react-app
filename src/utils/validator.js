import Ajv from 'ajv';
import { isAfter } from 'date-fns'

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
    required: ['id', 'name', 'Budget'],
    properties: {
        id: { type: 'number'},
        name: {type: 'string'},
        startDate: {type: 'string'},
        endDate: {type: 'string'},
        Budget: {type: 'number'}
    },
    validateDateRange: true
};

const campaignArraySchema = {
    type: 'array',
    items: campaignSchema
};

const getAjvInstance = () => {
    const ajv = new Ajv(defaults);
    ajv.addKeyword('validateDateRange', {
        async: false,
        compile: function (_schema, _parentSchema) {
            return function validate (data) {
                validate.errors = [];
                validate.errors.push({
                    keyword: "dateRange",
                    message: "Start Date cannot be greater than End Date",
                    params: {
                        keyword: "dateRange"
                    }
                });

                const {startDate, endDate} = data;
                if (startDate && endDate) {
                    return isAfter(endDate, startDate);
                }
                return true;
            }
        },
        errors: true
    });
    return ajv;
};

export const validateCampaign = (campaign) => {
    const ajv = getAjvInstance();
    const validator = ajv.compile(campaignSchema);

    const valid = validator(campaign);
    if (!valid) {
        console.error(`Invalid Input: ${ _handleError(validator.errors)}`);
    }
    return valid;
};

export const validateCampaignList = (campaignList) => {
    const ajv = getAjvInstance();
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
    } else if (error.keyword === 'minLength' || error.keyword === 'maxLength' || error.keyword === 'type') {
        return `${error.dataPath.replace('.', '')} ${error.message}`;
    } else {
        return error.message;
    }
};
