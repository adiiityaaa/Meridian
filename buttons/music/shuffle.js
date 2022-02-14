module.exports = {
name: "shuffle_song",
mutualChannel: true,
voiceChannel: true,
djOnly: true,   
run: async(client, interaction) => {
  const noq = client.embeds.noqueue(client);
  const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **The Queue has been Shuffled.**`)
  const less = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Less than 3 Songs in the Queue.**`)
  const player = client.manager.players.get(interaction.guild.id);
  if(!player) { interaction.reply({ embeds: [noq] }) }
  if(player) {
  if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }    
  if(player.queue.size < 3) { return interaction.reply({ embeds: [less] }) }  
  player.set(`unshuffledata`, player.queue.map(track => track));
  await player.queue.shuffle()
  await client.modules.editqembed(client, player)
  await interaction.reply({ embeds: [embed] })
}}}  