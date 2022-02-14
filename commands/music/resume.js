module.exports = {
name: "resume",
description: "Resumes the current song!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: true,
mutualChannel: true,
djOnly: true,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
run: async(client, interaction) => {
const noq = client.embeds.noplay(client);    
const already = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Player is already Playing.**`)  
const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Resumed the Song.**`)    
const player = client.manager.players.get(interaction.guild.id);
if(!player) { return interaction.reply({ embeds: [noq] }) }
if(player) {
if(!player.queue) { return interaction.reply({ embeds: [noq] }) }
if(player.playing) { return interaction.reply({ embeds: [already] }) }       
await player.pause(false)
await interaction.reply({ embeds: [success] })
const ischeck = await client.modules.hasrequest(client, player);
if(ischeck === true) { await client.modules.editpembed(client, player) }
else { return; }    
}}}  