// setting secret key
exports.keys = 'keys..of..cake';

// setting security
exports.security = {
  csrf: false,
  ctoken: false,
  // if you see cors error, you should change the domainWhiteList value
  // replace or add page domain to array
  domainWhiteList: [
    'http://127.0.0.1:3000',
  ],
};

// setting which middleware need use
exports.middleware = [];

// setting of loginMiddleware
exports.loginMiddleware = {
  ignore: /(\/login|\/api\/login|\/api\/logout|\/public)/i,
};

// setting cors
exports.cors = {
  credentials: true,
};

// setting view, use nunjucks
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

// setting httpclient
exports.httpclient = {
  request: {
    // default request timeout
    timeout: 5 * 1000,
  },
};
