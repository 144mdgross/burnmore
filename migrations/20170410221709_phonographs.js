
exports.up = function(knex) {
  return knex.schema.createTable('phonographs', table => {
    table.increments()
    table.string('pet_name').notNullable().defaultTo('Luther')
    table.text('img').notNullable().defaultTo('http://www.phonographs.org/images/xph.3.jpg.pagespeed.ic.nSK3NKdx7-.jpg')
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('phonographs')
};
