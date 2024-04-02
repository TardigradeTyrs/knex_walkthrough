/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet_food_type').del()
  await knex('pet_food_type').insert([
    {id: 1, name: 'Kibble'},
    {id: 2, name: 'Wet'},
    {id: 3, name: 'Whole'}
  ]);
};
