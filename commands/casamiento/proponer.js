const discord = require('discord.js')
let db = require('megadb')
module.exports = {
    nombre: 'proponer',
    alias: [],
    descripcion: "Propon casamiento a un usuario",
    run: async(client, message, args) => {
        let mention = message.members.mentions.first() || message.guild.members.cache.get(args[0])
        let usuario = message.member;
        
        if(!mention) return message.channel.send(`${usuario}, no has mencionado la persona a la que quieres proponerle matrimonio!`);


    
    }
}