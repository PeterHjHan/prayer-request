
exports.up = function(knex) {
  return knex.schema.createTable('member_list', (t) => {
    t.increments('id').primary();
    t.timestamp('created_at').defaultTo(knex.fn.now());

    t.integer('user_id').unsigned().nullable();
    t.foreign('user_id').references('id').inTable('user').onDelete('CASCADE');

    t.integer('organization_id').unsigned().nullable();
    t.foreign('organization_id').references('id').inTable('organization').onDelete('CASCADE');
    
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('member_list');
};
