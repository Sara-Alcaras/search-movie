const knex = require('knex');
const confifuration = require('../../knexfile');

const connection = knex(confifuration.development);

module.exports = connection;