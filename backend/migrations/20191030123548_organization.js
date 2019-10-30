
exports.up = function(knex) {
  return knex.schema.createTable('organization', (t) => {
    t.increments('id').primary();
    t.string('name').notNullable();
    t.string('address_street');
    t.string('address_street_option1');
    t.string('address_city');
    t.string('address_postal_code');
    t.string('address_province');
    t.string('address_county');
    t.string('phone_number');
    t.string('email');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('organization');
};
