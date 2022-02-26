module.exports = {
name: "jump",
description: "Jump to the Specified Song!",
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
      description: "Song number to skip to!",
      required: true,
    },
  ],   
run: async(client, interaction) => {
  const noq = client.embeds.noqueue(client);
  const num = interaction.options.getInteger("song-number");
  const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Skipping to song at position ${num}.**`)
  const great = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Number is greater than Songs in Queue.**`)
  const lastsong = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **This is the last song in Queue.**`)
  const player = client.manager.players.get(interaction.guild.id);
  if(!player) { return interaction.reply({ embeds: [noq] }) }
  if(player) {
   if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }
   if(player.queue.size === 0) { return interaction.reply({ embeds: [lastsong] }) }
   if(num > player.queue.size) { return interaction.reply({ embeds: [great] }) }
   player.queue.remove(0, num);
   player.stop()
   await interaction.reply({ embeds: [success] }) 
}}}    