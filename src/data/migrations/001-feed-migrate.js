exports.up = function(knex) {
    return knex.schema.createTable('Cattle', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('description');
      table.decimal('pricePerBag');
      table.decimal('pricePer20');
      table.decimal('pricePer40');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Cattle');
  };