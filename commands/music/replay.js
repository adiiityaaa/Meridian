module.exports = {
name: "replay",
description: "Replays the Current Song!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: true,
mutualChannel: true,
djOnly: false,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
run: async(client, interaction) => {
 const noq = client.embeds.noqueue(client);
  const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Replaying the song.**`)  
  const player = client.manager.players.get(interaction.guild.id);
  if(!player) { interaction.reply({ embeds: [noq] }) }
  if(player) {
  if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }
  await player.seek(0)
  await interaction.reply({ embeds: [success] })     
}}}    