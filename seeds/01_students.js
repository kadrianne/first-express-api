
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Kristine', age: 29},
        {name: 'Jared', age: 30},
        {name: 'Miwha', age: 25}
      ]);
    });
};
