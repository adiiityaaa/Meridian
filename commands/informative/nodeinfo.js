module.exports = {
name: "nodeinfo",
description: "Displays the Lavalink Nodes!",
category: "Informative",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
run: async(client, interaction) => {  
        const data = client.manager.nodes.map(node => 
            `${client.emotes.dot} **${node.options.identifier}**` +                              
            `\n> Players: ${node.stats.playingPlayers} Playing` +
            `/${node.stats.players} Total` +
            `\n> Uptime: ${new Date(node.stats.uptime).toISOString().slice(11, 19)}` +
            `\n> Lavalink Load: ${(Math.round(node.stats.cpu.lavalinkLoad * 100) / 100).toFixed(2)}%`                          
        ).join('\n**========================**\n');
const embed = client.modules.embed(client, client.colors.cyan, `${client.emotes.music} | **Lavalink Node Status**\n\n${data}`)    
await interaction.reply({ embeds: [embed] })
}}