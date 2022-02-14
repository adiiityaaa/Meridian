module.exports = {
name: "ping",
description: "Displays the API Latency of the Bot!",
category: "Utilities",
type: 1,    
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,    
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
authorPerms: [""],
run: async(client, interaction) => {
const ping = Date.now() - interaction.createdTimestamp;    
const embed = client.modules.embed(client, client.colors.green, `${client.emotes.discord} | **Pong!**\n\n${client.emotes.garrow} Interaction Latency: ${ping}ms\n${client.emotes.garrow} API Latency: ${client.ws.ping}ms`)
await interaction.reply({ embeds: [embed] })
}}