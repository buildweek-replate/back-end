exports.up = function(knex) {
    return knex.schema.createTable('pickupRequests', pickupRequest => {
        pickupRequest.increments()
        pickupRequest.string('type')
          .notNullable()
        pickupRequest.integer('amount')
          .notNullable()
        pickupRequest.string('preferredPickupTime')
          .notNullable()
        pickupRequest.boolean('completed')
          .defaultTo(false)
        pickupRequest.string('assignedTo')
          .defaultTo('unassigned')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pickupRequests')
  };