module.exports.run = async(client, guild) => {
const embed = client.modules.embed(client, client.colors.green, `${client.emotes.enter} | **Joined a Guild!**\n${client.emotes.garrow} **Name:** ${guild.name}\n${client.emotes.garrow} **Members:** ${guild.memberCount}\n${client.emotes.garrow} **New Server Count:** ${client.guilds.cache.size}`);
client.channels.cache.get(client.settings.serverlog).send({ embeds: [embed] })

const channel = guild.channels.cache.find(channel => channel.type === "GUILD_TEXT" && channel.permissionsFor(guild.me).has("SEND_MESSAGES"));
if(!channel) return;    
const embed2 = client.modules.embed(client, client.colors.green, `${client.emotes.discord} | **Thank you for Inviting me!**\n${client.emotes.garrow} To get started, type \`/help\`\n${client.emotes.garrow} Join the support server by [Clicking Here!](https://discord.gg/n2DJwqg24F)\n${client.emotes.garrow} Setup request channel using \`/request-channel\``);
channel.send({ embeds: [embed2] })    
}