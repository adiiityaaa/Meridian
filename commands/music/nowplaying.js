module.exports = {
name: "nowplaying",
description: "Displays information for current song!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
  run: async(client, interaction) => {
  const noq = client.embeds.noplay(client);
  const check = client.manager.players.get(interaction.guild.id);
  if(!check) { interaction.reply({ embeds: [noq] })}
  if(check) {
     if(!check.playing) { interaction.reply({ embeds: [noq] }) }
     const bar = await client.modules.progressbar(client, check.position, check.queue.current.duration)
     const embed = new client.discord.MessageEmbed()
     .setThumbnail(check.queue.current.thumbnail)
     .setColor(`${client.colors.gold}`)
     .setDescription(`${client.emotes.music} | **Now Playing:**\n\n${client.emotes.parrow}[${check.queue.current.title}](${check.queue.current.uri})\n${client.emotes.parrow} Requested by: ${check.queue.current.requester}\n${bar}`)
     await interaction.reply({ embeds: [embed] })
  }
}}