
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('phonographs').del()
    .then(function () {
      // Inserts seed entries
      return knex('phonographs').insert([
        {id: 1, 'pet_name': 'Octopod1', 'img': 'https://www.loc.gov/collections/static/edison-company-motion-pictures-and-sound-recordings/images/homesm.jpg'},
        {id: 2, 'pet_name': 'Octopod2', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwsCdw9P3LN_ll4vSNmNtfldUJkFE30x7usNtsVXh_9TaOJtPWJQ'},
        {id: 3, 'pet_name': 'Octopod3', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNWii1Bi8IKseuCl5z8cVJoiE_8gBlSMvOO4Kc7Sono-kDwtJqw'}
      ]);
    });
};
