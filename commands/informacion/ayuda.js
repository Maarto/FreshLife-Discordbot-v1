const discord = require('discord.js')

module.exports = {
    nombre: 'ayuda',
    alias: ["help","comandos"],
    desc: "Enseña el panel de ayuda",
    run: async(client, message, args) => {
        const panelAyuda = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription(`¡Buenas <@${message.author.id}>, aqui tienes la guía de comandos!`+"\n\n\n🔹 **Comandos** 🔹\n\n `.Ip` **|** `.WhiteList` **|** `.Suggest` **|** `.Redes`")
        .setImage("https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        message.delete()
        message.author.send(panelAyuda)
    }
} 