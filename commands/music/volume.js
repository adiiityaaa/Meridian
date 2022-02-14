module.exports = {
name: "volume",
description: "Manipulate the Volume of the Player!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: true,
mutualChannel: true,
djOnly: true,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
options: [
  {
      name: "level",
      type: "INTEGER",
      description: "Volume level to be set!",
      required: true,
  },
],      
run: async(client, interaction) => {
  const level = interaction.options.getInteger("level");
  const noq = client.embeds.noqueue(client);
  const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Volume set to ${level}%**`)
  const min = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Lowest Volume Level is 10%**`)
  const max = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Highest Volume Level is 120%**`)
  const player = client.manager.players.get(interaction.guild.id);
  if(!player) { return interaction.reply({ embeds: [noq] }) }
  if(player) {
   if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }
   if(level < 10) { return interaction.reply({ embeds: [min] }) }
   if(level > 120) { return interaction.reply({ embeds: [max] }) }
   await player.setVolume(level)
   await interaction.reply({ embeds: [success] })
   const ischeck = await client.modules.hasrequest(client, player);
   if(ischeck === true) { await client.modules.editpembed(client, player) }
   else { return; }
}}}      