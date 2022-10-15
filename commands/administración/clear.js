const discord = require('discord.js')
module.exports = {
  nombre: 'clear',
  alias: ['limpiar', 'depurar'],
  descripción: "Limpiarás hasta 100 mensajes en un mismo canal!",
  run: (client, message, args) => {
    const staff = ["738215060115292232", "738215059519438899", "738215054004191292", "738366811451555941"]
    const SyntaxA = new discord.MessageEmbed()
      .setColor("#EA4FFF")
      .setAuthor("FreshLifeRP")
      .setDescription("Syntax Error: `clear`" + "__`<Mensajes>`__")
      .setTimestamp()
      .setFooter("FreshLifeRP")
    const rechazado = new discord.MessageEmbed()
      .setAuthor("FreshLifeRP", "https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
      .setColor("#EA4FFF")
      .setDescription("🔴 `¡No tienes permisos para utilizar este comando!` 🔴")
    const SyntaxE = new discord.MessageEmbed()
      .setColor("#EA4FFF")
      .setAuthor("FreshLifeRP")
      .setDescription("Error:" + "__`Solo puedes colocar Números`__")
      .setTimestamp()
      .setFooter("FreshLifeRP")
    const SyntaxE2 = new discord.MessageEmbed()
      .setColor("#EA4FFF")
      .setAuthor("FreshLifeRP")
      .setDescription("Error:" + "__`El valor es inválido`__")
      .setTimestamp()
      .setFooter("FreshLifeRP")

    if (!staff.some(id => message.member.roles.cache.has(id))) {
      message.delete()
      return message.channel.send(rechazado)
    }
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(SyntaxP)
    if (!args[0]) return message.channel.send(SyntaxA)
    let number = args[0]
    if (isNaN(number)) return message.channel.send(SyntaxE)
    number = parseInt(number)
    if (number >= 100 || number < 0) return message.channel.send(SyntaxE2)
    message.channel.bulkDelete(number + 1).then(() => {
      message.channel.send(`**Se elimino ${number} mensajes.**`)
    }).catch(error => {
      message.channel.send(`Ocurrio un error: ${error.message}`)
    })
  }
}