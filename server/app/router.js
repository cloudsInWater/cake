module.exports = app => {
  app.router.get('/', app.controller.page.index);
  app.router.get('/login', app.controller.page.index);
};
