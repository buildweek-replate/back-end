
exports.up = function(knex) {
    return knex.schema.createTable('volunteers', volunteer => {
        volunteer.increments()
        volunteer.string('username')
          .notNullable()
          .unique()
        volunteer.string('password')
          .notNullable()
        volunteer.string('volunteerName')
          .notNullable()
        volunteer.string('phoneNumber')
          .notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('volunteers')
  };