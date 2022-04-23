module.exports = {
name: "afk",
description: "Set a AFK Status!",
category: "Utilities",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,    
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
authorPerms: [""],    
options: [
      {
      name: "reason",
      type: "STRING",
      description: "Reason for AFK!",
      required: false,
    },
  ],    
run: async(client, interaction) => {    
let reason = interaction.options.getString('reason');    
if(!reason) { reason = "AFK"; }
const afked = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **You are now AFK!**\n\n${client.emotes.garrow} ${reason}`)    
await interaction.reply({ embeds: [afked] })
client.db.set(`afk_${interaction.user.id}_${interaction.guild.id}`, reason)
client.db.set(`afktime_${interaction.user.id}_${interaction.guild.id}`, Date.now())
}}