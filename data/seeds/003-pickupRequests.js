
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pickupRequests').del()
    .then(function () {
      // Inserts seed entries
      return knex('pickupRequests').insert([
        {type: 'burgers', amount: 6 , preferredPickupTime: '1200', completed: false, assignedTo: 'unassigned' },
        {type: 'burritos', amount: 4 , preferredPickupTime: '1300', completed: false, assignedTo: 'unassigned' },
        {type: 'salads', amount: 5 , preferredPickupTime: '1500', completed: true, assignedTo: 'lena' }
      ]);
    });
};
