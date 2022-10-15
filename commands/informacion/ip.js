const discord = require("discord.js")
module.exports = {
    nombre: "ip",
    alias: ["server"],
    descripción: "Muestra la IP del servidor.",
    run: async(client, message, args) => {
        const embedip = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("🔥 **¿No encuentras el servidor en la lista de FiveM?** 🔥\n\n Presiona **F8** y luego pon `connect cfx.re/join/ykdqom`")

        message.channel.send(embedip)
    }
}