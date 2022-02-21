module.exports = {
name: "queuestats",
description: "Displays the Status of the Queue!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
run: async(client, interaction) => { 
const noq = client.embeds.noqueue(client);
const player = client.manager.players.get(interaction.guild.id);
if(!player) { return interaction.editReply({ embeds: [noq] }) }
if(player) {
let loop;
if(!player.queueRepeat && !player.trackRepeat) { loop = "Disabled" }
else if(player.queueRepeat && !player.trackRepeat) { loop = "Queue" }
else if(!player.queueRepeat && player.trackRepeat) { loop = "Song" }      
const embed = client.modules.embed(client, client.colors.gold, `${client.emotes.dot} **Now Playing:** [${player.queue.current.title}](${player.queue.current.uri}) : ${client.modules.duration(client, player.queue.current.duration)} by ${player.queue.current.requester}\n\n${client.emotes.dot} **Upcoming Tracks:** ${player.queue.length}\n${client.emotes.dot} **Queue Duration:** ${client.modules.duration(client, player.queue.duration)}\n${client.emotes.dot} **Volume:** ${player.volume}%\n${client.emotes.dot} **Text Channel:** <#${player.textChannel}>\n${client.emotes.dot} **Voice Channel:** <#${player.voiceChannel}>\n${client.emotes.dot} **Loop Mode:** ${loop}\n${client.emotes.dot} **Filter:** ${player.get("filter")}`)
interaction.reply({ embeds: [embed] })
}}}