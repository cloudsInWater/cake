const { Controller } = require('egg');

class PageController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('I am In here')
    await ctx.render('index.html');
  }
}

module.exports = PageController;
