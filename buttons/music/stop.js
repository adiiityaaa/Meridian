module.exports = {
name: "stop_song",    
mutualChannel: true,
voiceChannel: true,
djOnly: true,
run: async(client, interaction) => {
  const noq = client.embeds.noqueue(client);
  const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Player has been Stopped.**`)
  const player = client.manager.players.get(interaction.guild.id);
  if(!player) { return interaction.reply({ embeds: [noq] }) }
  if(player) {
   if(!player.queue) { return interaction.reply({ embeds: [noq] }) }
   await player.destroy()
   await interaction.reply({ embeds: [success] })
}}}