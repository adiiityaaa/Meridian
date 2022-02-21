const load = require("lodash");

module.exports = {
name: "queue",
description: "Displays the queue of the Player!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
options: [
  {
      name: "page",
      type: "INTEGER",
      description: "Page to skip to!",
      required: false,
  },
],      
run: async(client, interaction) => {
await interaction.deferReply().catch(() => {});    
const error = client.embeds.error(client);    
const noq = client.embeds.noqueue(client);
const player = client.manager.players.get(interaction.guild.id);
if(!player) { return interaction.editReply({ embeds: [noq] }) }
if(player) {
 const embed = new client.discord.MessageEmbed()
 .setColor(client.colors.gold)
 .setDescription(`${client.emotes.dot} **Now Playing:**\n#0 ${client.emotes.parrow} [${player.queue.current.title}](${player.queue.current.uri}) : ${client.modules.duration(client, player.queue.current.duration)} by ${player.queue.current.requester}`)
 if(player.queue.length === 0) { interaction.editReply({ embeds: [embed] }) }
 if(player.queue.length < 15) { const embed15 = new client.discord.MessageEmbed()
 .setColor(client.colors.gold)
 .setDescription(`${client.emotes.dot} **Now Playing:**\n#0 ${client.emotes.parrow} [${player.queue.current.title}](${player.queue.current.uri}) : ${client.modules.duration(client, player.queue.current.duration)} by ${player.queue.current.requester}\n\n${client.emotes.dot} **Upcoming Tracks [${player.queue.length}]:**\n${player.queue.map((t, i) => `#${++i} ${client.emotes.parrow} [${t.title}](${t.uri}) : ${client.modules.duration(client, t.duration)} by ${t.requester}`).join("\n")}`)
 interaction.editReply({ embeds: [embed15] }) }
 if(player.queue.length > 15) {
  const mapping = player.queue.map((t, i) => `#${++i} ${client.emotes.parrow} [${t.title}](${t.uri}) : ${client.modules.duration(client, t.duration)} by ${t.requester}`);
  const chunk = load.chunk(mapping, 15);
  const pages = chunk.map((x) => x.join("\n"));     
  let page = interaction.options.getInteger("page");
  if(!page) page = 0;
  if(page) page = page -1;
  if(page > pages.length) page = 0;
  if(page < 0) page = 0;     
const bigembed1 = new client.discord.MessageEmbed()
.setColor(client.colors.gold)
.setDescription(`${client.emotes.dot} **Now Playing:**\n#0 ${client.emotes.parrow} [${player.queue.current.title}](${player.queue.current.uri}) : ${client.modules.duration(client, player.queue.current.duration)} by ${player.queue.current.requester}\n\n${client.emotes.dot} **Upcoming Tracks [${player.queue.length}]:**\n${pages[page]}`)
.setFooter({ text: `Page ${page + 1}/${pages.length}` })
const queue1 = new client.discord.MessageButton().setCustomId("queue_1").setEmoji("923928134984814624").setStyle("SUCCESS")
const disqueue1 = new client.discord.MessageButton().setDisabled(true).setCustomId("dis_queue_1").setEmoji("923928134984814624").setStyle("SUCCESS")
const queue2 = new client.discord.MessageButton().setCustomId("queue_2").setEmoji("923928133613260871").setStyle("SUCCESS")
const disqueue2 = new client.discord.MessageButton().setDisabled(true).setCustomId("dis_queue_2").setEmoji("923928133613260871").setStyle("SUCCESS")
const queue3 = new client.discord.MessageButton().setCustomId("queue_3").setEmoji("923928139887939615").setStyle("DANGER")
const disqueue3 = new client.discord.MessageButton().setDisabled(true).setCustomId("dis_queue_3").setEmoji("923928139887939615").setStyle("DANGER")  
const disabledbtns = new client.discord.MessageActionRow().addComponents([ disqueue2, disqueue3, disqueue1 ])
await interaction.editReply({ embeds: [bigembed1], components: [new client.discord.MessageActionRow().addComponents([ queue2, queue3, queue1 ])] }).catch(() => {});
const collector = interaction.channel.createMessageComponentCollector({
                    filter: (b) => {
                        if(b.user.id === interaction.user.id) return true;
                        else return b.reply({ content: `These buttons can be operated by ${interaction.user.tag}.` }).catch(() => {});
                    },
                    time: 60000*5,
                    idle: 30e3
                });     
collector.on("collect", async (button) => {
if(button.customId === "queue_1") {
await button.deferUpdate().catch(() => {});
page = page + 1 < pages.length ? ++page : 0;
const bigembed2 = new client.discord.MessageEmbed()
.setColor(client.colors.gold)
.setDescription(`${client.emotes.dot} **Now Playing:**\n#0 ${client.emotes.parrow} [${player.queue.current.title}](${player.queue.current.uri}) : ${client.modules.duration(client, player.queue.current.duration)} by ${player.queue.current.requester}\n\n${client.emotes.dot} **Upcoming Tracks [${player.queue.length}]:**\n${pages[page]}`)
.setFooter({ text: `Page ${page + 1}/${pages.length}` })
await interaction.editReply({ embeds: [bigembed2], components: [new client.discord.MessageActionRow().addComponents([ queue2, queue3, queue1 ])] })
} else if(button.customId === "queue_2") {
await button.deferUpdate().catch(() => {});
page = page > 0 ? --page : pages.length - 1;
const bigembed3 = new client.discord.MessageEmbed()
.setColor(client.colors.gold)
.setDescription(`${client.emotes.dot} **Now Playing:**\n#0 ${client.emotes.parrow} [${player.queue.current.title}](${player.queue.current.uri}) : ${client.modules.duration(client, player.queue.current.duration)} by ${player.queue.current.requester}\n\n${client.emotes.dot} **Upcoming Tracks [${player.queue.length}]:**\n${pages[page]}`)
.setFooter({ text: `Page ${page + 1}/${pages.length}` })
await interaction.editReply({ embeds: [bigembed3], components: [new client.discord.MessageActionRow().addComponents([ queue2, queue3, queue1 ])] }).catch(() => {});
} else if(button.customId === "queue_3") {
await button.deferUpdate().catch(() => {});
await collector.stop() } else return; });
collector.on("end", async () => {
await interaction.editReply({ embeds: [bigembed1], components: [disabledbtns] });
})}}}}