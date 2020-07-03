exports.up = function(knex) {
    return knex.schema.createTable('movies', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('author').notNullable();
        table.string('classification').notNullable();
        table.string('duration', 3).notNullable();
    });
 
};

exports.down = function(knex) {
  return knex.schema.dropTable('movies');
};
