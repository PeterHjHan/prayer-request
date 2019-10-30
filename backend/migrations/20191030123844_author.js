
exports.up = function(knex) {
  return knex.schema.createTable('user', (t) => {
    t.increments('id').primary();
    t.string('name').notNullable();
    t.string('account_type');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user');
};
