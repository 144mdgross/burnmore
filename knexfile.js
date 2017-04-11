'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/burnmore_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/burnmore_test'
  },

  production: {
    client:'pg',
    connection:process.env.DATABASE_URL
  }
};
