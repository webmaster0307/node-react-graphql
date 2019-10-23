const eventsResolver = require('./events');
const authResolver = require('./auth');
const bookingResolver = require('./booking');

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...bookingResolver
}

module.exports = rootResolver;
