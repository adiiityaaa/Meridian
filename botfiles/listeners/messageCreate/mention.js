module.exports.run = async(client, message) => {
 const regex = new RegExp(`^<@!?${client.user.id}>$`);
if(message.content.match(regex)) {
const embed = new client.discord.MessageEmbed()
.setColor(`${client.colors.green}`)
.setThumbnail(message.author.displayAvatarURL)
.setDescription(`${client.emotes.check} | **Need Help?**\n${client.emotes.garrow} ${client.user.username} now has Slash Commands!\n${client.emotes.garrow} Type \`/help\` to check all Commands!`)
message.reply({ embeds: [embed] })
}}