module.exports = {
name: "previous_song",    
mutualChannel: true,
voiceChannel: true,
djOnly: true,    
run: async(client, interaction) => {
  const noq = client.embeds.noqueue(client);
  const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Playing the Previous Song...**`)
  const lastsong = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **No Previous Song found.**`)
  const player = client.manager.players.get(interaction.guild.id);
  if(!player) { return interaction.reply({ embeds: [noq] }) }
  if(player) {
   if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }
   if(!player.queue.previous) { return interaction.reply({ embeds: [lastsong] }) }
   const current = player.queue.current;
   player.play(player.queue.previous)
   player.queue.unshift(current)
   await interaction.reply({ embeds: [success] })      
}}}