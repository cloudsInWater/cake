const { Service } = require('egg');

class OAuthService extends Service {
  async login() {
    return 'login';
  }

  async logout() {
    return 'logout';
  }
}

module.exports = OAuthService;
