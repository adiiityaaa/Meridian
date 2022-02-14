module.exports = {
name: "voldown_song",
mutualChannel: true,
voiceChannel: true,
djOnly: true,   
run: async(client, interaction) => {
  const noq = client.embeds.noqueue(client);
  const range = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Volume is at Lowest Level.**`)  
  const player = client.manager.players.get(interaction.guild.id);
  if(!player) { interaction.reply({ embeds: [noq] }) }
  if(player) {
  if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }
  let vol = player.volume;
  if(vol === 10) { return interaction.reply({ embeds: [range] }) } 
  const time = vol - 10;
  await player.setVolume(time)
  const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Volume set to ${time}%**`)
  await client.modules.editpembed(client, player)
  await interaction.reply({ embeds: [success] })
}}}