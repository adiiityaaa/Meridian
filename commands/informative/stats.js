const os = require('os')
const cpuStat = require("cpu-stat")

module.exports = {
name: "stats",
description: "Displays statistics about the Bot!",  
category: "Informative",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],    
run: async(client, interaction) => {   
let cpuLol;
cpuStat.usagePercent(function(err, percent, seconds) {
if (err) { return console.log(err); }    
const data1 = (Date.now() / 1000 - client.uptime / 1000).toFixed(0);
const embed = new client.discord.MessageEmbed()
.setColor(client.colors.cyan)
.setDescription(`${client.emotes.general} | **General Information:**\n> Name: <@${client.user.id}>\n> ID: ${client.user.id}\n> Created: ${client.user.createdAt}\n${client.emotes.channel} | **Statistical Information:**\n> Total Servers: ${client.guilds.cache.size}\n> Total Channels: ${client.channels.cache.size}\n> Total Commands: ${client.commands.size}\n> Total Users: ${client.users.cache.size}\n${client.emotes.config} | **System Information:**\n> CPU Model: ${os.cpus().map(i => `${i.model}`)[0]}\n> CPU Usage: ${percent.toFixed(2)}%\n> Ram Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\n> Architecture: ${os.arch()}\n> Platform: ${os.platform()}\n${client.emotes.package} | **Package Information:**\n> Discord.js: ${client.discord.version}\n> Nodejs: ${process.version}\n> Meridian: v1.1.7\n> Erela.js: v2.3.3\n${client.emotes.plus} | **Additional Information:**\n> Prefix: \`/\`\n> API Latency: ${client.ws.ping}ms\n> Last Reboot: <t:${data1}:R>`)
interaction.reply({ embeds: [embed] })
})}}