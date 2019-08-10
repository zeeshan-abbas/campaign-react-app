import {ACTION_CAMPAIGN_ADD_ALL} from '../../constants';

const initialState = [
    {"id":1,"name":"Divavu","startDate":"8/10/2019","endDate":"8/20/2019","B udget":88377},
    {"id":2,"name":"Jaxspan","startDate":"11/21/2017","endDate":"2/21/2018", "Budget":608715},
    {"id":3,"name":"Miboo","startDate":"11/1/2017","endDate":"6/20/2018","Bu dget":239507},
    {"id":4,"name":"Trilith","startDate":"8/25/2017","endDate":"11/30/2017", "Budget":179838},
    {"id":5,"name":"Layo","startDate":"11/28/2017","endDate":"3/10/2018","Bu dget":837850},
    {"id":6,"name":"Photojam","startDate":"7/25/2017","endDate":"6/23/2018", "Budget":858131},
    {"id":7,"name":"Blogtag","startDate":"6/27/2017","endDate":"1/15/2018"," Budget":109078},
    {"id":8,"name":"Rhyzio","startDate":"10/13/2017","endDate":"1/25/2018"," Budget":272552},
    {"id":9,"name":"Zoomcast","startDate":"9/6/2017","endDate":"11/10/2017", "Budget":301919},
    {"id":10,"name":"Realbridge","startDate":"3/5/2017","endDate":"10/2/2017 ","Budget":505602},
    {"id":11,"name":"Divavu","startDate":"8/10/2019","endDate":"8/20/2019","B udget":88377},
    {"id":12,"name":"Jaxspan","startDate":"11/21/2017","endDate":"2/21/2018", "Budget":608715},
    {"id":13,"name":"Miboo","startDate":"11/1/2017","endDate":"6/20/2018","Bu dget":239507},
    {"id":14,"name":"Trilith","startDate":"8/25/2017","endDate":"11/30/2017", "Budget":179838},
    {"id":15,"name":"Layo","startDate":"11/28/2017","endDate":"3/10/2018","Bu dget":837850},
    {"id":16,"name":"Photojam","startDate":"7/25/2017","endDate":"6/23/2018", "Budget":858131},
    {"id":17,"name":"Blogtag","startDate":"6/27/2017","endDate":"1/15/2018"," Budget":109078},
    {"id":18,"name":"Rhyzio","startDate":"10/13/2017","endDate":"1/25/2018"," Budget":272552},
    {"id":19,"name":"Zoomcast","startDate":"9/6/2017","endDate":"11/10/2017", "Budget":301919},
    {"id":20,"name":"Realbridge","startDate":"3/5/2017","endDate":"10/2/2017 ","Budget":505602},
    {"id":21,"name":"Divavu","startDate":"8/10/2019","endDate":"8/20/2019","B udget":88377},
    {"id":22,"name":"Jaxspan","startDate":"11/21/2017","endDate":"2/21/2018", "Budget":608715},
    {"id":23,"name":"Miboo","startDate":"11/1/2017","endDate":"6/20/2018","Bu dget":239507},
    {"id":24,"name":"Trilith","startDate":"8/25/2017","endDate":"11/30/2017", "Budget":179838},
    {"id":25,"name":"Layo","startDate":"11/28/2017","endDate":"3/10/2018","Bu dget":837850},
    {"id":26,"name":"Photojam","startDate":"7/25/2017","endDate":"6/23/2018", "Budget":858131},
    {"id":27,"name":"Blogtag","startDate":"6/27/2017","endDate":"1/15/2018"," Budget":109078},
    {"id":28,"name":"Rhyzio","startDate":"10/13/2017","endDate":"1/25/2018"," Budget":272552},
    {"id":29,"name":"Zoomcast","startDate":"9/6/2017","endDate":"11/10/2017", "Budget":301919},
    {"id":30,"name":"Realbridge","startDate":"3/5/2017","endDate":"10/2/2017 ","Budget":505602}
];

const campaignReducer = (state = initialState, {type, payload = []}) => {
    switch (type) {
        case ACTION_CAMPAIGN_ADD_ALL:
            return [
                ...state,
                ...payload
            ];
        default:
            return state;
    }
};

export default campaignReducer;
