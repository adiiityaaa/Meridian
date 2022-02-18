module.exports = {
name: "247",
description: "Toggle the 24/7 Mode.",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: true,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS", "MANAGE_GUILD"],
run: async(client, interaction) => {
const check = client.db.get(`247_${interaction.guild.id}`);
let mode;
if(check === null || check === false) { mode = true }
else if(check === true) { mode = false };
client.db.set(`247_${interaction.guild.id}`, mode)
const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **24/7 Mode set to ${mode}!**`)
await interaction.reply({ embeds: [embed] })
}}