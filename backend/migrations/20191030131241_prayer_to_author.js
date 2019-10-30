
exports.up = function(knex) {
  return knex.schema.createTable('prayer_and_author', (t) => {
    t.increments('id').primary();
    t.timestamp('created_at').defaultTo(knex.fn.now());

    t.integer('user_id').unsigned().nullable();
    t.foreign('user_id').references('id').inTable('user').onDelete('CASCADE');

    t.integer('prayer_id').unsigned().nullable();
    t.foreign('prayer_id').references('id').inTable('prayer').onDelete('CASCADE');
    
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('prayer_and_author');
};
