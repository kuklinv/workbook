const Koa = require('koa');
const pug = require('pug');
const Router = require('koa-router');
const jwt = require('jsonwebtoken');

const app = new Koa();


const sessions = {/*
  [token]: {foo: 'bar', count: 0}
*/};


app.use((ctx, next) => {
  const id = ctx.cookies.get('my_session_key');
  if (id) {
    try {
      jwt.verify(id, 'secret');
    } catch (err) {
      ctx.throw(400, 'invalid token!');
    }
  }

  if (id && sessions[id]) {
    if (sessions[id].expiresAt > Date.now()) {
      ctx.session = sessions[id];
      return next();
    } else {
      delete sessions[id];
    }
  }
  
  // const newId = uuid();
  const newId = jwt.sign({
    user: 'admin',
    name: 'Sergey',
  }, 'secret');

  sessions[newId] = {expiresAt: Date.now() + 1000 * 5};
  ctx.session = sessions[newId];
  ctx.cookies.set('my_session_key', newId);
  return next();
});

app.use((ctx, next) => {
  ctx.render = function render(template, locals) {
    ctx.body = pug.renderFile(`${template}.pug`, locals);
  }
});

const router = new Router();

router.get('/:username', async (ctx, next) => {
  
  const count = ctx.session.count || 0;
  ctx.session.count = count + 1;
  
  ctx.render('hello.pug', {
    name: ctx.params.username,
    count: ctx.session.count,
  });
});

app.use(router.routes());

app.listen(3000);
