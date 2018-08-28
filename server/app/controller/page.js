const { Controller } = require('egg');

class PageController extends Controller {
  async index() {
    const { ctx } = this;

    await ctx.render('index.tpl');
  }
}

module.exports = PageController;
