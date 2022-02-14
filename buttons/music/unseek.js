module.exports = {
name: "unseek_song",
mutualChannel: true,
voiceChannel: true,
djOnly: true,   
run: async(client, interaction) => {
  const noq = client.embeds.noqueue(client);
  const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Song unseeked by 20s!**`)
  const player = client.manager.players.get(interaction.guild.id);
  if(!player) { interaction.reply({ embeds: [noq] }) }
  if(player) {
  if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }    
  let time = player.position - 20 * 1000
  if(time >= player.queue.current.duration - player.position || time < 0) { time = 0; }  
  player.seek(time)    
  await interaction.reply({ embeds: [embed] })     
}}}      