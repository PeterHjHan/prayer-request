
exports.up = function(knex) {
  return knex.schema.createTable('prayer', (t) => {
    t.increments('id').primary();
    t.string('author_name').nullable();
    t.string('title').notNullable();
    t.string('context').notNullable();
    t.boolean('completed');
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.string('view_settings');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('prayer');
};
