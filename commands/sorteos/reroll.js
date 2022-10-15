const discord = require('discord.js')
const ms = require('ms')

module.exports = {
    nombre: 'reroll',
    alias: [],
    desc:"Rerollea el sorteo hecho previamente",
    run: async(client, message, args) => {
        
    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: No tienes permisos para usar este comando.');
    }

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send(':x: Tienes que especificar una ID válida!');
    }

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        return message.channel.send('No se ha encontrado un sorteo para la ID `'+ args.join(' ') +'`.');
    }

    // Reroll the giveaway
    client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        // Success message
        message.channel.send('Resorteado!');
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is not ended.`)){
            message.channel.send('El sorteo no ha terminado');
        } else {
            console.error(e);
            message.channel.send('Ha ocurrido un error...');
        }
    });
    }
}