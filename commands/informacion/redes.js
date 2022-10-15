const discord = require('discord.js')

module.exports = {
    nombre: 'redes',
    alias: [],
    desc: "Muestra las redes sociales",
    run: async(client, message, args) => {
        const redes = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("**Instagram**\n[   Clickeame](https://www.instagram.com/freshliferp/)\n\n**TikTok**\n[Clickeame](https://www.tiktok.com/@freshliferp.original?lang=es)")
        .setTitle("- Redes Sociales | FreshLife")
        .setImage("https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        const exito = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("GREEN")
        .setDescription("¡Se ha enviado las redes a tu DM!")

        message.delete()
        message.channel.send(exito).then(m => m.delete({timeout: 2000}))
        message.author.send(redes)
    }
}