module.exports = {
name: "seek",
description: "Seek the Current Song!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: true,
mutualChannel: true,
djOnly: true,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
options: [
  {
      name: "duration",
      type: "INTEGER",
      description: "Duration to seek in Seconds!",
      required: true,
  },
],     
run: async(client, interaction) => {
  const level = interaction.options.getInteger("duration");
  const noq = client.embeds.noqueue(client);
  const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Song has been Seeked!**`)
  const player = client.manager.players.get(interaction.guild.id);
  if(!player) { return interaction.reply({ embeds: [noq] }) }
  if(player) {
   if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }
    let time = player.position + level * 1000
  if(time >= player.queue.current.duration) { time = player.queue.current.duration - 1000; }
  await player.seek(time)
  await interaction.reply({ embeds: [success] })
}}}      