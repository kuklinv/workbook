const socketIO = require('socket.io');
const socketRedis = require('socket.io-redis');
const config = require('./config');

// publish/subscribe

function socket(server) {
  const io = socketIO(server);
  
  io.adapter(socketRedis(config.redis.uri));
  
  /*
  * 1. mark as "untrusted"
  *     "authentication" <- token, 5seconds
  *     [reset connection bye-bye]
  * 2. HTTP query,cookie
  *     ok -> upgrade
  *     fail -> no upgrade, bye-bye
  * */
  
  io.use(async (socket, next) => {
    const query = socket.handshake.query;
    if (!query.token) return next(new Error('no token'));

    next();
  });
  
  io.on('connection', socket => {
    // console.log('connect');
    io.emit('user_connected', 'hello world');
    
    socket.on('message', async message => {
      socket.broadcast.emit('message', message);
      
      /*
      * await Message.create({text: message, ...})
      * */
    });
    
    socket.on('disconnect', () => {
      // console.log('disconnect');
    });
  });
  
  return io;
}

module.exports = socket;
