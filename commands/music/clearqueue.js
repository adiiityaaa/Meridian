module.exports = {
name: "clearqueue",
description: "Clears the queue for the Player!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: true,
mutualChannel: true,
djOnly: true,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
run: async(client, interaction) => {
  const noq = client.embeds.noqueue(client);
  const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Player Queue has been Cleared.**`)
  const last = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Last song in the queue.**`)  
  const player = client.manager.players.get(interaction.guild.id);
  if(!player) { return interaction.reply({ embeds: [noq] }) }
  if(player) {
   if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }
   if(player.queue.size === 0) { return interaction.reply({ embeds: [last] }) }
   await player.queue.clear()
   await interaction.reply({ embeds: [success] })
   const ischeck = await client.modules.hasrequest(client, player);
   if(ischeck === true) { await client.modules.editqembed(client, player)  }
}}}