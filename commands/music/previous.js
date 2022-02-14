module.exports = {
name: "previous",
description: "Play the previous Song!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: true,
mutualChannel: true,
djOnly: true,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
run: async(client, interaction) => {
  const noq = client.embeds.noqueue(client);
  const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Playing the Previous Song...**`)
  const nosong = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **No Previous Song found.**`)
  const player = client.manager.players.get(interaction.guild.id);
  if(!player) { return interaction.reply({ embeds: [noq] }) }
  if(player) {
  if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }
  if(!player.queue.previous) { return interaction.reply({ embeds: [nosong] }) }     
  const current = player.queue.current;
  player.play(player.queue.previous)
  player.queue.unshift(current)
  await interaction.reply({ embeds: [success] })            
}}}      