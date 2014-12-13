var keyMirror = require('keymirror');

module.exports = {

  APP_NAME: 'yongsa',
  WEBSITE: 'getyongsa.com'

  ActionTypes: keyMirror({
    AUTH_PENDING: null,
    AUTH_SUCCESS: null,
    AUTH_FAILURE: null,
    LOGOUT: null,
    REDIRECT: null,
    SEARCH_PENDING: null,
    SEARCH_SUCCESS: null,
    SEARCH_NO_RESULTS: null,
    SEARCH_FAILURE: null,
    OPEN_EMAIL: null
  }),

  Routes: {
    LOGIN: 'login',
    SEARCH: 'search'
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  Gui: {
    RESULTS_HEIGHT: 495
  },

  Google: {
    CLIENT_ID: '739108486619-i9trh9mmth6844i2jn82ag4kilhc9ail.apps.googleusercontent.com',
    SCOPES: [
      'https://www.googleapis.com/auth/gmail.readonly',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/plus.me'
    ],
    SEARCH_BASE_URL: 'gmail/v1/users/me/messages/',
    DEFAULT_USER_ID: 'me',
    MAX_RESULTS: 8,
    DEFAULT_FORMAT: 'metadata', 
    DEFAULT_FIELDS: ['id', 'labelIds', 'snippet', 'threadId'],
    DEFAULT_METADATA_HEADERS: ['Subject', 'To', 'From', 'Date'],
    EMAIL_DETAILS_PAGE: 'https://mail.google.com/mail/u/0/#search/'
  }
};