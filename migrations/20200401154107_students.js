
exports.up = function(knex) {
  return knex.schema.createTable('students', (t) => {
      t.increments('id')
      t.string('name')
      t.integer('age')
  })
};

exports.down = function(knex) {
  
};
