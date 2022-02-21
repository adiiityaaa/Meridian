module.exports.run = async(client, guild) => {
const embed = client.modules.embed(client, client.colors.red, `${client.emotes.exit} | **Left a Guild!**\n${client.emotes.rarrow} **Name:** ${guild.name}\n${client.emotes.rarrow} **Members:** ${guild.memberCount}\n${client.emotes.rarrow} **New Server Count:** ${client.guilds.cache.size}`)
client.channels.cache.get(client.settings.serverlog).send({ embeds: [embed] })
}