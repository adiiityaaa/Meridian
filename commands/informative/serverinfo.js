module.exports = {
name: "serverinfo",
description: "Shows the Information about the Server!",
category: "Informative",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],    
run: async(client, interaction) => {
const embed = new client.discord.MessageEmbed()
.setDescription(`${client.emotes.music} | **${interaction.guild.name}**\n\n${client.emotes.general} | **General Information:**\n> ID: ${interaction.guild.id}\n> Owner: <@${interaction.guild.ownerId}>\n> Created: ${interaction.guild.createdAt}\n> Description: ${interaction.guild.description}\n${client.emotes.channel} | **Channel Information:**\n> Total Channels: ${interaction.guild.channels.cache.size}\n> Categories: ${interaction.guild.channels.cache.filter((channel) => channel.type === "GUILD_CATEGORY").size}\n> Voice Channels: ${interaction.guild.channels.cache.filter((channel) => channel.type === "GUILD_VOICE").size}\n> Text Channels: ${interaction.guild.channels.cache.filter((channel) => channel.type === "GUILD_TEXT").size}\n> Stage Channels: ${interaction.guild.channels.cache.filter((channel) => channel.type === "GUILD_STAGE_VOICE").size}\n> AFK Channel: ${interaction.guild.afkChannel}\n> Rules Channel: ${interaction.guild.rulesChannel}\n${client.emotes.emote} | **Emote Information:**\n> Total Emotes: ${interaction.guild.emojis.cache.size}\n> Total Stickers: ${interaction.guild.stickers.cache.size}\n${client.emotes.boost} | **Premium Information:**\n> Total Boosts: ${interaction.guild.premiumSubscriptionCount}\n> Premium Tier: ${interaction.guild.premiumTier}\n${client.emotes.role} | **Role Information:**\n> Total Roles: ${interaction.guild.roles.cache.size}\n> Highest Role: ${interaction.guild.roles.highest}\n${client.emotes.member} | **Member Information:**\n> Total Members: ${interaction.guild.memberCount}\n> Bot Count: ${interaction.guild.members.cache.filter(member => member.user.bot).size}\n> Human Count: ${interaction.guild.members.cache.filter(member => !member.user.bot).size}`)
.setColor(client.colors.cyan)
.setThumbnail(interaction.guild.iconURL())
await interaction.reply({ embeds: [embed] })
}}