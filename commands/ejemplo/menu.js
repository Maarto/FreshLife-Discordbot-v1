let discord = require('discord.js')
let { MessageMenuOption, MessageMenu, MessageActionRow } = require('discord-buttons')

module.exports = {
    nombre: 'menu',
    alias: [],
    descripcion: "Menú de prueba",
    run: async(client, message, args) => {
        
        const option1 = new MessageMenuOption()
        .setLabel("Test1")
        .setDescription("La puta de tu hermana1")
        .setEmoji("💩")
        .setValue("Test1")
        const option2 = new MessageMenuOption()
        .setLabel("Test12")
        .setDescription("La puta de tu hermana2")
        .setEmoji("🚇")
        .setValue("Test12")
        const option3 = new MessageMenuOption()
        .setLabel("Test13")
        .setDescription("La puta de tu hermana3")
        .setEmoji("🚗")
        .setValue("Test13")

        const Menu = new MessageMenu()
        .setID('menu1')
        .setPlaceholder('Selecciona lo k mas te guste down')
        .addOption(option1)
        .addOption(option2)
        .addOption(option3)


        const Row1 = new MessageActionRow()
        .addComponent(Menu)

        await message.channel.send("Buenas, elegí o te cago a tiros", {components: [Row1]})

        client.on('clickMenu', async menu => {
            if(menu.values[0] == 'Test1'){
                await menu.reply.defer()
                menu.channel.send('Funncionó 1')
            }

            if(menu.values[0] == 'Test12'){
                await menu.reply.defer()
                menu.channel.send('Funncionó 2')
            }

            if(menu.values[0] == 'Test13'){
                await menu.reply.defer()
                menu.channel.send('Funncionó 3')
            }
        })

    }
}