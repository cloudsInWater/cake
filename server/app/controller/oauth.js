const { Controller } = require('egg');

class OAuthController extends Controller {
  async login() {
    const { ctx } = this;

    ctx.body = 'login';
  }

  async logout() {
    const { ctx } = this;

    ctx.body = 'logout';
  }
}

module.exports = OAuthController;
