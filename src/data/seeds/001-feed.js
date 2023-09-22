exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('Cattle').del()
      .then(function() {
        // Inserts seed entries
        return knex('Cattle').insert([
          {
            name: 'Cattle 1',
            description: 'Description for Cattle 1',
            pricePerBag: 10.0,
            pricePer20: 180.0,
            pricePer40: 340.0,
          },
          // Add more entries as needed
        ]);
      });
  };