type UserReturnType = {
    userDataBeans: Array<any>;
    pageSize: number;
    recordSetCount: number;
    pageNumber: number;
    recordSetTotal: number;
}

export const USERS: UserReturnType = {
    pageSize: 12,
    recordSetTotal: 15,
    pageNumber: 1,
    recordSetCount: 12,
    userDataBeans: [
    {"lastName": 'James', "displayName": 'LeBron', "parentMemberId": '10001', "preferredCurrency": 'USD', "roles": ['Admin'], "organization": 'LA Lakers'},
    {"lastName": 'Bryant', "displayName": 'Kobe', "parentMemberId": '10001', "preferredCurrency": 'USD', "roles": ['Admin'], "organization": 'LA Lakers'},
    {"lastName": 'Johnson', "displayName": 'Magic', "parentMemberId": '10001', "preferredCurrency": 'USD', "roles": ['Shopper'], "organization": 'LA Lakers'},
    {"lastName": 'Kidd', "displayName": 'Jason', "parentMemberId": '10001', "preferredCurrency": 'USD', "roles": ['Admin'], "organization": 'NJ Nets'},
    {"lastName": 'Muckerberg', "displayName": 'Zark', "parentMemberId": '10001', "preferredCurrency": 'USD', "roles": ['Owner'], "organization": 'Bacefook'},
    {"lastName": 'Stephanson', "displayName": 'Stephan', "parentMemberId": '10001', "preferredCurrency": 'USD', "roles": ['Admin'], "organization": 'Stephanson and Sons co.'},
    {"lastName": 'James', "displayName": 'LeBron', "parentMemberId": '10001', "preferredCurrency": 'USD', "roles": ['Admin'], "organization": 'LA Lakers'},
    {"lastName": 'Bryant', "displayName": 'Kobe', "parentMemberId": '10001', "preferredCurrency": 'USD', "roles": ['Admin'], "organization": 'LA Lakers'},
    {"lastName": 'Johnson', "displayName": 'Magic', "parentMemberId": '10001', "preferredCurrency": 'USD', "roles": ['Shopper'], "organization": 'LA Lakers'},
    {"lastName": 'Kidd', "displayName": 'Jason', "parentMemberId": '10001', "preferredCurrency": 'USD', "roles": ['Admin'], "organization": 'NJ Nets'},
    {"lastName": 'Muckerberg', "displayName": 'Zark', "parentMemberId": '10001', "preferredCurrency": 'USD', "roles": ['Owner'], "organization": 'Bacefook'},
    {"lastName": 'Stephanson', "displayName": 'Stephan', "parentMemberId": '10001', "preferredCurrency": 'USD', "roles": ['Admin'], "organization": 'Stephanson and Sons co.'}
]};

export const USERS2: UserReturnType = {
    pageSize: 12,
    recordSetTotal: 15,
    pageNumber: 2,
    recordSetCount: 3,
    userDataBeans: [    
    {"lastName": 'James', "displayName": 'LeBron', "parentMemberId": '10001', "preferredCurrency": 'USD', "roles": ['Admin'], "organization": 'LA Lakers'},
    {"lastName": 'Bryant', "displayName": 'Kobe', "parentMemberId": '10001', "preferredCurrency": 'USD', "roles": ['Admin'], "organization": 'LA Lakers'},
    {"lastName": 'Johnson', "displayName": 'Magic', "parentMemberId": '10001', "preferredCurrency": 'USD', "roles": ['Shopper'], "organization": 'LA Lakers'},
    {"lastName": 'Muckerberg', "displayName": 'Zark', "parentMemberId": '10001', "preferredCurrency": 'USD', "roles": ['Owner'], "organization": 'Bacefook'},
    ]
}