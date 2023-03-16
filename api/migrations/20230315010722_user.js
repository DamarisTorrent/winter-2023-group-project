/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('user', function(table) {
  
    table.integer('user_id')
      .primary()
      .unsigned()
      .unique()
      .notNullable()
    table.string('email').notNullable()
    table.string('username').notNullable().unique()
    table.string('password').notNullable()
    table.timestamp('dateCreated').notNullable()
    
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user')
};
