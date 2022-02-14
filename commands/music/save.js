module.exports = {
name: "save",
description: "Saves the Current song in your DM!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
run: async(client, interaction) => {
const noq = client.embeds.noplay(client);  
const checkdm = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Song Information sent in DM.**`)
const nodm = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Could not DM you.**`)
const player = client.manager.players.get(interaction.guild.id);
if(!player) { return interaction.reply({ embeds: [noq] }) }
if(player) {
  if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }
  let song = player.queue.current;
  let saved = client.modules.embed(client, client.colors.green, `${client.emotes.music} | **Song Information!**\n${client.emotes.garrow} [${song.title}](${song.uri})\n${client.emotes.parrow} Requested by: ${song.requester} | Duration: ${client.modules.duration(client, song.duration)}\n${client.emotes.parrow} Download: [Click Here](https://google.com/)`)
try {    
  await interaction.user.send({ embeds: [saved] })
  await interaction.reply({ embeds: [checkdm] })
} catch(e) { 
  await interaction.reply({ embeds: [nodm] })    
}}}}