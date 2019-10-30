
exports.up = function(knex) {
  return knex.schema.table('prayer', (t) => {
    t.integer('organization_id').unsigned().nullable();
    t.foreign('organization_id').references('id').inTable('organization').onDelete('CASCADE');

  });
};

exports.down = function(knex) {
  return knex.schema.table('prayer', (t) => {
    t.dropForeign('organization_id')
    t.dropColumn('organization_id');
  })
};
