const redis = require('redis');
const util = require('util');

const client = redis.createClient({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD || '',
});

client.on('error', (err) => {
  console.error('Redis error: ', err);
});

client.get = util.promisify(client.get);
client.set = util.promisify(client.set);

module.exports = client;
