module.exports = {
name: "skip",
description: "Skips the Current Song!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: true,
mutualChannel: true,
djOnly: true,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
run: async(client, interaction) => {
  const noq = client.embeds.noqueue(client);
  const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Skipping the Current Song...**`)
  const lastsong = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **This is the Last Song in Queue.**`)
  const player = client.manager.players.get(interaction.guild.id);
  if(!player) { return interaction.reply({ embeds: [noq] }) }
  if(player) {
   if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }
   if(player.queue.size === 0) { return interaction.reply({ embeds: [lastsong] }) }
   await player.stop()
   await interaction.reply({ embeds: [success] }) 
}}}    