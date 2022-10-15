const discord = require('discord.js')

module.exports = {
    nombre: 'ticketform',
    alias: [],
    descripcion: "Enseña el formato para hacer un reporte!",
    run: async(client, message, args) => {
        message.delete()

        let soporte = message.member;

        const staff = ["817978346343890964", "829880807799128114", "824356462586363994", "790425188465377280", "799403097687326750", "738215062023438339", "738215061323251722", "738215060115292232", "738215059519438899"]
        if(!staff.some(id => message.member.roles.cache.has(id))){
            message.delete()
            return message.channel.send(`${soporte}, 🔴 No tienes permisos para utilizar este comando!🔴`)
        }

        let form = new discord.MessageEmbed()
        .setDescription(`*¡Buenas, Mi nombre es ${soporte}!,*\n\n__**¿Como debes formular tu reporte?**__`)
        .setFooter()
        .setColor()
        .setAuthor()
        .setImage()

    }
}