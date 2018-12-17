export class UserManagementConstants {

    static readonly DEFAULT_STORE_ID = '0';

    static readonly DEFAULT_ORG_Q = 'organizationsICanAdmin';

    static readonly DEFAULT_PROFILE_NAME = 'IBM_User_Registration_Details';

    static readonly REGEX_VALUES = {
        'EMAIL_REGEX': /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'PASS_NUMBER_REGEX': /\d/,
        'PASS_ALPHABET_REGEX': /[a-zA-Z]/
    }

    /* Translation Value IDs */
    static readonly TRANSLATION_VALUES = {
        'LANGUAGE': 'USER_MANAGEMENT.LANGUAGE_LIST',
        'ERROR': 'USER_MANAGEMENT.ERROR_MESSAGES',
        'ADD_USER': 'USER_MANAGEMENT.ADD_USER'
    };

    static LANGUAGE_LIST = [
        {
          content: "United States English",
          selected: true,
          value: "-1"
        },
        {
          content: "French",
          selected: false,
          value: "-2"
        },
        {
          content: "German",
          selected: false,
          value: "-3"
        },
        {
          content: "Italian",
          selected: false,
          value: "-4"
        },
        {
          content: "Spanish",
          selected: false,
          value: "-5"
        },
        {
          content: "Brazilian Portugese",
          selected: false,
          value: "-6"
        },
        {
          content: "Simplified Chinese",
          selected: false,
          value: "-7"
        },
        {
          content: "Chinese Traditional",
          selected: false,
          value: "-8"
        },
        {
          content: "Japanese",
          selected: false,
          value: "-9"
        },
        {
          content: "Russian",
          selected: false,
          value: "-20"
        },
        {
          content: "Romanian",
          selected: false,
          value: "-21"
        }
    ];

    static POLICY_LIST = [
        {
          content: "Administrators",
          selected: true,
          value: "-2"
        },
        {
          content: "Shoppers",
          selected: false,
          value: "-1"
        }
      ];
    
      static STATUS_LIST = [
        {
          content: "Enabled",
          selected: true,
          value: "1"
        },
        {
          content: "Disabled",
          selected: false,
          value: "0"
        }
      ];
      

}