const discord = require('discord.js')
const ms = require('ms')

module.exports = {
    nombre: 'terminar',
    alias: [],
    desc: "Termina el sorteo que elijas",
    run: async(client, message, args) => {
        
    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: No tienes permisos para usar este comando.');
    }

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send(':x: Debes especificar una ID de mensaje válida!');
    }

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        return message.channel.send('No se ha encontrado un sorteo para la ID `'+ args.join(' ') + '`.');
    }

    // Edit the giveaway
    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    // Success message
    .then(() => {
        // Success message
        message.channel.send('El sorteo terminará en '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' segundos...');
    })
    .catch((e) => {
        if(e.startsWith(`El sorteo con la ID ${giveaway.messageID} ha terminado.`)){
            message.channel.send('El sorteo ya ha terminado!');
        } else {
            console.error(e);
            message.channel.send('Un error ha ocurrido...');
        }
    });
    }
}