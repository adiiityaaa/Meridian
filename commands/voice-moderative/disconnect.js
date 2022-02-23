module.exports = { 
 name: "disconnect",
 run: async(client, interaction) => {
 interaction.member.disconnect()
 interaction.reply("your mom disconnected lol")
}}