
exports.up = function(knex) {
  return knex.schema.createTable('prayer_type', (t) => {
    t.increments('id').primary();
    t.string('name');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('prayer_type');
};
