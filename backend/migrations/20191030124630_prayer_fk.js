
exports.up = function(knex) {
  return knex.schema.table('prayer', (t) => {
    t.integer('user_id').unsigned().nullable();
    t.foreign('user_id').references('id').inTable('user').onDelete('CASCADE');

    t.integer('organization_id').unsigned().nullable();
    t.foreign('organization_id').references('id').inTable('organization').onDelete('CASCADE');

    t.integer('prayer_type_id').unsigned().nullable();
    t.foreign('prayer_type_id').references('id').inTable('prayer_type').onDelete('CASCADE');

  });
};

exports.down = function(knex) {
  return knex.schema.table('prayer', (t) => {
    t.dropForeign('user_id');
    t.dropColumn('user_id');
    t.dropForeign('organization_id');
    t.dropColumn('organization_id');
    t.dropForeign('prayer_type_id');
    t.dropColumn('prayer_type_id');
  })
};
