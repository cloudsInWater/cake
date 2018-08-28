module.exports = () => async function loginMiddleware(ctx, next) {
  const username = await ctx.cookies.get('username');
  if (!username) {
    console.log('...no username cookie...');
    ctx.redirect('/login');
    return;
  }

  const userInfo = await ctx.app.sessionStore.get(username);
  if (!userInfo) {
    console.log('...no username session...');
    ctx.redirect('/login');
    return;
  }

  await next();
};
