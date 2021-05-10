module.exports = {
    name: "clear",
    description: "Ciscenje Chata (Poruka)",

    async run (client, message, args) {

        const amount = args.join(" ");

        if(!amount) return message.reply('Upisite kolko hocete poruka izbrisati')

        if(amount > 100) return message.reply(`Ne mozete vise od 100 poruka izbrisati`)

        if(amount < 1) return message.reply(`Pricekaj te vec ste obrisali`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send('Uspesno!')

    }
}
