module.exports = app => {
  app.router.get('/', app.controller.page.index);
  app.router.get('/one', app.controller.inventory.index);
  app.router.get('/login', app.controller.page.index);
  app.router.get('/tryMobx', app.controller.oauth.login);
};
