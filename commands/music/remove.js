module.exports = {
name: "remove",
description: "Remove a specific song from the queue!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: true,
mutualChannel: true,
djOnly: true,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
options: [
      {
      name: "song-number",
      type: "INTEGER",
      description: "Song number to be removed!",
      required: true,
    },
  ],   
run: async(client, interaction) => {
  const noq = client.embeds.noqueue(client);
  const num = interaction.options.getInteger("song-number");
  const number = num - 1;
  const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Song at position ${num} has been removed.**`)
  const great = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Number is greater than Songs in Queue.**`)
  const lastsong = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **This is the last song in Queue.**`)
  const skipping = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Skipping the Current Song...`)
  const player = client.manager.players.get(interaction.guild.id);
  if(!player) { return interaction.reply({ embeds: [noq] }) }
  if(player) {
   if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }
   if(player.queue.size === 0) { return interaction.reply({ embeds: [lastsong] }) }
   if(num > player.queue.size) { return interaction.reply({ embeds: [great] }) }
   await player.queue.remove(num);
   const ischeck = await client.modules.hasrequest(client, player)
   if(ischeck === true) { await client.modules.editqembed(client, player) }
   await interaction.reply({ embeds: [success] })
}}}