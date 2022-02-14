module.exports = {
name: "join",
description: "Make the Bot join your Voice Channel!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: true,
mutualChannel: false,
djOnly: false,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
run: async(client, interaction) => {
  const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Joined your Voice Channel.**`)    
  const already = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Client is already Joined to Voice Channel.**`)    
  const plcheck = client.manager.players.get(interaction.guild.id);
  if(!plcheck) {
      const player = interaction.client.manager.create({
      guild: interaction.guild.id,
      voiceChannel: interaction.member.voice.channel.id,
      textChannel: interaction.channel.id,
      selfDeafen: true,
    }) 
 if(player.state !== "CONNECTED") player.connect()
 interaction.reply({ embeds: [embed] })  }
 else if(plcheck && plcheck.state === "CONNECTED") { return interaction.reply({ embeds: [already] }) }   
}}    