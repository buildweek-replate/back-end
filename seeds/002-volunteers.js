
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('volunteers').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteers').insert([
        {username: 'joey', password: 'joey', volunteerName: 'Joseph Wallace', phoneNumber: '111-222-2020' },
        {username: 'bob', password: 'bob', volunteerName: 'Robert Stone', phoneNumber: '222-111-1010' },
        {username: 'lena', password: 'lena', volunteerName: 'Elena Gianni', phoneNumber: '333-333-3030' }
      ]);
    });
};
