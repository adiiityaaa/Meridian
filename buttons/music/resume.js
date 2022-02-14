module.exports = {
name: "resume_song",    
mutualChannel: true,
voiceChannel: true,
djOnly: true,    
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
await client.modules.editpembed(client, player)     
await interaction.reply({ embeds: [success] })    
}}}