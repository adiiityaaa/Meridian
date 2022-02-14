module.exports = {
name: "autoplay",
description: "Toggle the Autoplay Mode!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: true,
mutualChannel: true,
djOnly: true,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
run: async(client, interaction) => {
const noq = client.embeds.noplay(client);       
const player = client.manager.players.get(interaction.guild.id);
if(!player) { return interaction.reply({ embeds: [noq] }) }
if(player) {
if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }    
const check = client.db.get(`autoplay_${interaction.guild.id}`);
let mode;
if(check === null || check === false) { mode = true }
else if(check === true) { mode = false };
client.db.set(`autoplay_${interaction.guild.id}`, mode)
const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Autoplay set to ${mode}!**`)
await interaction.reply({ embeds: [embed] })
const ischeck = await client.modules.hasrequest(client, player);
if(ischeck === true) { await client.modules.editpembed(client, player) }    
}}}