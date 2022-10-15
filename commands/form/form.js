let discord = require('discord.js')
const { type } = require('os')

module.exports = {
    nombre: 'formulario',
    alias: [],
    descripcion: "Inicia un formulario.",
    run: async(client, message, args) => {
        message.delete()

        let filter = m => !m.author.bot.id || message.author.id
        let collector = new discord.MessageCollector(message.channel, filter)
        
        message.channel.send('Bot escuchando mensajes.')

        collector.on('collect', (message, col) => {
            console.log(`Mensaje recolectado ${message.content}`)
            console.log(col)
        })
    }
}