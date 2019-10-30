
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('prayer_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('prayer_type').insert([
        {id: 1, name: '감사기도'},
        {id: 2, name: '선교기도'},
        {id: 3, name: '금식기도'},
        {id: 4, name: '새벽기도'},
        {id: 5, name: '물질기도'}
      ]);
    });
};
