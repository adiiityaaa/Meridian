module.exports = {
name: "shuffle",
description: "Shuffles the Queue of the Player!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: true,
mutualChannel: true,
djOnly: true,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
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
  await interaction.reply({ embeds: [embed] })
  const ischeck = await client.modules.hasrequest(client, player);
  if(ischeck === true) { await client.modules.editqembed(client, player) }
  else { return; }
}}}    