'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Cards', [
        //userId, name, tribeId, imageUrl, cost, costType, description
        /*
        Tribes:
        1 - canine
        2 - Avian
        3 - Reptile
        4 - Insect
        5 - No Tribe
        */
        {userId: 1, name: 'Wolf', tribeId: 1, imageUrl: 'https://i.imgur.com/NR4pi3i.png', cost: 2, costType:'blood', description:'The Wolf is part of the Canine tribe, it deals 3 damage and has 2 life. It is made available at the start of the game, in Act 1.', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'Squirrel', tribeId: 5, imageUrl: 'https://i.imgur.com/HyA9pJ7.png', cost: 0, costType:'blood', description:'Squirrels are a resource card. They are free to play and you may draw one every turn. They sole purpose is in that of utility.', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'OuroBoros', tribeId: 3, imageUrl: 'https://i.imgur.com/JY1xJo2.png', cost: 2, costType:'blood', description:'The Ouroboros is a rare card that when defeated, is returned to the players hand with +1 to it\'s strength and health permanently' , createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'Raven', tribeId: 2, imageUrl: 'https://i.imgur.com/16ccBX1.png', cost: 2, costType:'blood', description:'The Raven is a flyer that can attack the opposing player directly despite having a facing card without the "mighty leap" sigil', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'Mantis God', tribeId: 4, imageUrl: 'https://i.imgur.com/hpnuw5w.png', cost: 1, costType:'blood', description:'The Mantis God is one of the most powerful cards in Inscryption. Despite it\'s lackluster attack and hp stats, the Mantis God can quickly crush any opposition with a quick visit to a damage campfire and a fecundity or undying sigil.', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'Coyote', tribeId: 1, imageUrl: 'https://i.imgur.com/gilmLbc.png', cost: 4, costType:'bones', description:'The meager Coyote. But what did you expect for only four bones?', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'Alpha', tribeId: 1, imageUrl: 'https://i.imgur.com/JWPRjmz.png', cost: 5, costType:'bones', description:'The venerable Alpha. Its courage emboldens the creatures that stand beside it.', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'Bloodhound', tribeId: 1, imageUrl: 'https://i.imgur.com/gDB3hto.png', cost: 2, costType:'blood', description:'The dauntless bloodhound. It leaps to oppose new creatures when they are played.', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'Wolf Cub', tribeId: 1, imageUrl: 'https://i.imgur.com/pUWh7Yq.png', cost: 1, costType:'blood', description:'The young Wolf Cub. It grows into a Wolf after a single turn.', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'Cockroach', tribeId: 4, imageUrl: 'https://imgur.com/E2SDEyE.png', cost: 4, costType:'bones', description:'The unkillable Cockroach. It returns to your hand after dying.', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'Ant Queen', tribeId: 4, imageUrl: 'https://i.imgur.com/PsUaPti.png', cost: 2, costType:'blood', description:'The Regal Ant Queen. She births a new Ant once played.', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'Mantis', tribeId: 4, imageUrl: 'https://i.imgur.com/tYAZzJG.png', cost: 1, costType:'blood', description:'The fervid Mantis. Its prying claws strike both to the left and right.', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'Ring Worm', tribeId: 4, imageUrl: 'https://i.imgur.com/VlDDZlG.png', cost: 1, costType:'blood', description:'The underappreciated Ring Worm. Its value is not readily apparent.', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'Strange Larva', tribeId: 4, imageUrl: 'https://i.imgur.com/qHhR00h.png', cost: 1, costType:'blood', description:'A largely unimpressive specimen.', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'Strange Pupa', tribeId: 4, imageUrl: 'https://i.imgur.com/JP201vj.png', cost: 1, costType:'blood', description:'A largely unimpressive specimen.', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'Mothman', tribeId: 4, imageUrl: 'https://i.imgur.com/CteR5nx.png', cost: 1, costType:'blood', description:'A ferocious abomination', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'Geck', tribeId: 3, imageUrl: 'https://i.imgur.com/Y2xaJx9.png', cost: 0, costType:'blood', description:'The uninspiring Geck. Perhaps you can find a use for it?', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'Rattler', tribeId: 3, imageUrl: 'https://i.imgur.com/DfdAPV7.png', cost: 6, costType:'bones', description:'The nefarious Rattler. A brittle creature... once past its monstrous fangs.', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'Skink', tribeId: 3, imageUrl: 'https://i.imgur.com/GCEwTlM.png', cost: 1, costType:'blood', description:'The Tenacious Skink. It moves over when attacked, leaving its tail behind.', createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Cards', null, {});
  }
};
