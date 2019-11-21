
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(function () {
      // Inserts seed entries
      return knex('businesses').insert([
        {username: 'walmart', password: 'walmart', businessName: 'walmart inc', businessAddress: '123 harvard street', phoneNumber: '000-000-0000' },
        {username: 'starbucks', password: 'starbucks', businessName: 'starbucks inc', businessAddress: '321 yale avenue', phoneNumber: '111-111-1111' },
        {username: 'acme', password: 'acme', businessName: 'acme inc', businessAddress: '104 cartoon road', phoneNumber: '222-222-2222' }
      ]);
    });
};


// knex seed run deletes everything and starts it from scratch
