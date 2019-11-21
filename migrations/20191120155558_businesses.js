
exports.up = function(knex) {
  return knex.schema.createTable('businesses', business => {
      business.increments()
      business.string('username')
        .notNullable()
        .unique()
      business.string('password')
        .notNullable()
      business.string('businessName')
        .notNullable()
      business.string('businessAddress')
        .notNullable()
      business.string('phoneNumber')
        .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('businesses')
};


///get a schema up before seeding it 
/// get it up by kneex migrate latest

// if i want to alter this later need to do a rollback.
// could also do alter table command