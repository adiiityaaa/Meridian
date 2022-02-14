module.exports = {
name: "unshuffle",
description: "Unshuffles the Queue of the Player!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: true,
mutualChannel: true,
djOnly: true,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
run: async(client, interaction) => {
  const noq = client.embeds.noqueue(client);
  const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **The Queue has been Unshuffled.**`)
  const less = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **No Shuffle data found.**`)
  const player = client.manager.players.get(interaction.guild.id);
  if(!player) { interaction.reply({ embeds: [noq] }) }
  if(player) {
  if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }    
  if(!player.get(`unshuffledata`)) { return interaction.reply({ embeds: [less] }) } 
  await player.queue.clear()
  await interaction.reply({ embeds: [embed] })
  for (const track of player.get(`unshuffledata`)) { player.queue.add(track); }
  const ischeck = await client.modules.hasrequest(client, player);
  if(ischeck === true) { await client.modules.editqembed(client, player) }
  else { return; }
}}}    